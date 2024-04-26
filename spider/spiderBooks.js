// 优雅的书籍爬虫实现
import axios from "axios";
import cheerio from "cheerio";
import moment from "moment";
import Books from "../models/book.js";

const doubanLink = "https://book.douban.com/latest";

const getBookList = async (pageNo = 1) => {
  let html = null;
  try {
    const resp = await axios.get(`${doubanLink}?p=${pageNo}`);
    html = resp.data;
    if (!html) {
      throw Error("no book catched");
    }
  } catch (e) {
    return [];
  }

  // 摘取书籍链接列表
  const $ = cheerio.load(html);
  const list = $("#content ul.chart-dashed-list li");
  const linkList = [];
  for (let item of list) {
    const link = $(item).find(".media__img a").attr("href");
    linkList.push(link);
  }

  return linkList;
};

const getBookDetail = async (link) => {
  if (!link) return null;
  let html = null;
  try {
    const resp = await axios.get(link);
    html = resp?.data;
    if (!html) {
      throw Error("nothing catched");
    }
  } catch (e) {
    return null;
  }

  // 处理获取书籍对象
  const $ = cheerio.load(html);
  const mainInfo = $(".article div.subjectwrap > .subject");
  const desc = $(".related_info .intro p").first().text().slice(0, 255);

  const bookInfo = {
    name: $("#wrapper > h1 > span").text(),
    imgUrl: $(mainInfo).find("#mainpic a img").attr("src"),
    intro: desc,
  };

  const publishDate = $(mainInfo)
    .find("#info span")
    .filter((index, elem) => {
      return !!($(elem).text() === "出版年:");
    })[0]
    .next.data.trim();

  const author = $(mainInfo)
    .find("#info span")
    .first(0)
    .find("a")
    .text()
    .replace(/\[.*?\]/, "")
    .trim();

  console.log("date ---> ", publishDate);
  bookInfo.publishDate = moment(publishDate).isValid()
    ? moment(publishDate).format("YYYY-MM-DD")
    : "";
  bookInfo.author = author;

  return bookInfo;
};

const main = async (pageNo = 1) => {
  const links = await getBookList(pageNo);

  const arr = [];
  links.forEach((link) => {
    arr.push(getBookDetail(link));
  });

  // 可能all不太友好
  Promise.all(arr).then(async (list) => {
    console.log("list", list);

    try {
      await Books.bulkCreate(list);
      console.log("sql success");
    } catch (e) {
      console.log("sql failed", e);
    }
  });
};

main();

// await main(2);
// await main(3);
// await main(4);
