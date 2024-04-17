import { Sequelize } from "sequelize";
import fs from "node:fs";
import path from "node:path";
// __dirname 在 esmodule中不可用，然后node是在根目录下运行的，所以粗暴认为路径为 ./
const pwd = fs.readFileSync(path.resolve("./pwd.txt"), "utf-8");

const sequelize = new Sequelize("myschooldb", "root", pwd, {
  host: "localhost",
  dialect: "mysql",
  // logging: false,
});

export default sequelize;
