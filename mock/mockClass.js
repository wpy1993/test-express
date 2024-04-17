import Mock from "mockjs";
import Classes from "../models/classes.js";

const res = Mock.mock({
  "datas|15": [
    {
      "id|+1": 1,
      name: "班级 @id 班",
      openDate: "@date('yyyy-MM-dd')",
    },
  ],
}).datas;

Classes.bulkCreate(res);
