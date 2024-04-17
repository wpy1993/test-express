import { DataTypes } from "sequelize";
import sequelize from "./db.js";

const Admin = sequelize.define(
  "Admins",
  {
    loginId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    loginPwd: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    createdAt: "createTime",
    updatedAt: false,
    paranoid: true,
  }
);

// await Admin.sync({ alter: true });
// Admin.drop()
// console.log("success");

export default Admin;
