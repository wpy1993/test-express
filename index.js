// import的先后顺序毫无影响
// import * as relation from "./models/relation.js";
// import * as mockStudent from "./mock/mockStudent.js";

import {
  addAdmin,
  deleteAdmin,
  updateAdmin,
  getAdmin,
} from "./services/adminServices.js";

// await addAdmin({
//   loginId: "abcab",
//   loginPwd: "123",
//   name: "test2",
// });

// updateAdmin({
//   loginId: "abcab",
//   loginPwd: "123456",
//   name: "changedName2",
// });

// getAdmin("abcde");
// deleteAdmin("abc");

// import Admin from "./models/admin.js";
// const ins = Admin.build({
//   loginId: "abc",
//   loginPwd: "123",
//   name: "test",
// });

// await ins.save();
// console.log("new an admin success");

// import sync from "./models/sync.js";

// import admin from "./models/admin.js";

// import sequelize from "./models/db.js";

// try {
//   await sequelize.authenticate();
//   console.log("Connection has been established successfully.");
// } catch (error) {
//   console.error("Unable to connect to the database:", error);
// }

// sequelize.close();
