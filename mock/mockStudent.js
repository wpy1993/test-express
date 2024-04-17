import Mock from "mockjs";
import Students from "../models/student.js";

console.log("time in mock start", Date.now());

const res = Mock.mock({
  "datas|500-700": [
    {
      name: "@cname",
      birthdate: "@date()",
      sex: "@boolean",
      // mobile: '1@string("number", 10)',
      mobile: /1\d{10}/,
      address: "@city(true)",
      "ClassId|1-15": 1,
    },
  ],
}).datas;

console.log("res is", Date.now());
try {
  await Students.bulkCreate(res);
  console.log("success");
} catch (e) {
  console.log("error", e);
}

console.log("time in mock end", Date.now());

// console.log("res", res);

export default null;
