// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Product extends Model {}

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
    },
    // ⭐️ TODO: Add the product_image column
    // OR a new model for images only/& build relationships in index
    // product_image: {
    // },

   // MAY NEED: ⚠️ user has many products : TO BE CHECKED
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
