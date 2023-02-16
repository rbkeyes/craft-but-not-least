const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Image extends Model { }

// products: id, name, description, price, tag
// 💥 **rb** Had to change the keys to be camel case so that the object created by handler would work in the POST. PLEASE KEEP AS CAMEL CASE **rb** 💥

Image.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    file_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "image",
  }
);

module.exports = Image;