import axios from "axios";
import cheerio from "cheerio";
import { writeFile, readFileSync } from "node:fs";

// 抓取书籍列表内容
const getBooksHtml = async () => {
  const res = await axios.get(
    "https://book.douban.com/latest?subcat=%E5%85%A8%E9%83%A8&p=2"
  );
  return res.data;
};

// 获取方法入口
const spiderList = async () => {
  const res = await getBooksHtml();
  writeFile("./book.html", res, (err) => {
    if (err) throw err;

    console.log("file write done");
  });
};

const getBooksList = async () => {
  // const html = await getBooksHtml();

  const html = readFileSync("./bookClean.html");

  const $ = cheerio.load(html);
  const list = $("#content ul.chart-dashed-list li");
  const arr = [];
  for (let item of list) {
    // console.log("---->", $(item).find(".media__body h2 a").text());
    const obj = {
      link: $(item).find(".media__img a").attr("href"),
      logo: $(item).find(".media__img .subject-cover").attr("src"),
      title: $(item).find(".media__body h2 a").text(),
    };
    arr.push(obj);
  }

  console.log("arr is", arr);
};

const getBookDetail = async () => {
  // const html = readFileSync()
  const res = await axios.get("https://book.douban.com/subject/36594961/");
  writeFile("./bookDetail.html", res.data, "utf-8", (err) => {
    if (err) throw err;
    console.log("file write done");
  });
};

// getBooksList();
getBookDetail();

const parseBookDetail = async () => {
  const html = readFileSync("./bookDetail.html");
  const $ = cheerio.load(html);
  const mainInfo = $(".article div.subjectwrap > .subject");
  const desc = $(".related_info .intro p").first().text();

  const obj = {
    title: $("#wrapper > h1 > span").text(),
    imgUrl: $(mainInfo).find("#mainpic a img").attr("src"),
    intro: desc,
  };

  // 通过.next() 拿不到没有标签包裹的兄弟节点，比如<span>1</span>1234<span>2</span>
  // span1 的 next是 span2
  // each方法也拿不到
  // 所以根据对象强行求解 —— [0].next.data
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

  obj.publishDate = publishDate;
  obj.author = author;
  console.log("obj is", obj);
};

// export { getBooksList };
