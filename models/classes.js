import sequelize from "./db.js";
import { DataTypes } from "sequelize";

const Classes = sequelize.define(
  "Classes",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    openDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    paranoid: true,
  }
);

export default Classes;
