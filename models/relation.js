// 建立关联关系
import Classes from "./classes.js";
import Students from "./student.js";

console.log("time in relation start", Date.now());
// navicat半天没成功，实际已经成功了，重启navicate
await Classes.hasMany(Students);
await Students.belongsTo(Classes);
console.log("time in relation end", Date.now());

export default null;
