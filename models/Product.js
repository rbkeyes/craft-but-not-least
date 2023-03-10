// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Sequelize = require('sequelize')

class Product extends Model { }

// products: id, name, description, price, tag
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
    // **rb** would ultimately like to store images in their own table, adding here for simplicity until I get that set up **rb**
    // image_path: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    product_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    // **rb** joined through ProductTag, don't need product_tag column
    // product_tag: { 
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },

    // ⭐️TODO - future development: add the product_image column
    // OR a new model for images only/& build relationships in index
    // product_image: {
    // },

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
