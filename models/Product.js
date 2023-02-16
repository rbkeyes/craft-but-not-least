// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Sequelize = require('sequelize')

class Product extends Model { }

// products: id, name, description, price, tag
// 💥 **rb** Had to change the keys to be camel case so that the object created by handler would work in the POST. PLEASE KEEP AS CAMEL CASE **rb** 💥

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    product_tag: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        return this.getDataValue('product_tag').split(';')
      },
      set(val) {
        this.setDataValue('product_tag', val.join(';'));
      },
    },
  
  // ⭐️ TODO: Add the product_image column
  // OR a new model for images only/& build relationships in index
  // product_image: {
  // },

  // MAY NEED: ⚠️ user has many products : TO BE CHECKED
  // ⛔️ **rb** commented out for now while testing form submit **rb** ⛔️
  user_id: {
  type: DataTypes.INTEGER,
  allowNull: false,
  references: {
    model: "user",
    key: "id",
  },
},
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
