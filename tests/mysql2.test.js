// Get the client
import mysql from "mysql2/promise";
import { readFileSync } from "node:fs";

const pwd = readFileSync("./pwd.txt", "utf-8");

// Create the connection to database
const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: pwd,
  database: "students",
});

/**
 * 有一个别的 students数据库，有一个basic表，对其操作如下
 */

try {
  const res = await connection.query(
    "insert into basic (`name`, age, birthdate, phone, card_id, is_active) values('wplay', 31, '2000-01-01', '12345678901', '112233', 1)"
  );
  console.log("res is", res);
} catch (err) {
  console.log("err here", err);
}

// A simple SELECT query
// try {
//   const [results, fields] = await connection.query(
//     'SELECT * FROM `basic` WHERE `name` = "wplay" AND `age` > 1'
//   );

//   console.log(results); // results contains rows returned by server
//   console.log(fields); // fields contains extra meta data about results, if available
// } catch (err) {
//   console.log(err);
// }

// Using placeholders
// try {
//   const [results] = await connection.query(
//     "SELECT * FROM `basic` WHERE `name` = ? AND `age` > ?",
//     ["Page", 1]
//   );

//   console.log(results);
// } catch (err) {
//   console.log(err);
// }
