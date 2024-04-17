// 创建多个表并建立关系

import sequelize from "./db.js";

import Admin from "./admin.js";
import Classes from "./classes.js";
import Books from "./book.js";
import Students from "./student.js";

import relation from "./relation.js";

await sequelize.sync({ alter: true });

console.log("all sync done!");

export default sequelize;
