import sequelize from "./db.js";
import { DataTypes } from "sequelize";

const Books = sequelize.define(
  "Books",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    publishDate: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    paranoid: true,
  }
);

export default Books;
