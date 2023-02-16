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
    product_tag: { // ⭐️TODO: change the product_tag from number to tag_name(string) in ./seeds/products.json
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },

    // ⭐️ TODO: Add the product_image column
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
