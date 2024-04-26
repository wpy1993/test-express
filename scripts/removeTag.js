// 移除html中的script的标签的尝试

import { readFileSync, writeFileSync } from "node:fs";

const data = readFileSync("./book.html", "utf-8");

/**
 * 一些说明
 * .*?  ? 非贪婪匹配，也就是从最少的量的角度匹配内容
 * \r\n|\r|\n 匹配换行符 原因：.* 是不包含换行符的
 */
const newData = data
  .replace(/\r\n|\r|\n/g, "")
  .replace(/<script.*?<\/script>/g, "");
console.log("new data is", newData);

writeFileSync("./bookClean.html", newData, "utf-8");
