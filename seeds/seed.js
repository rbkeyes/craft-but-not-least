// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
const sequelize = require("../config/connection");
const { User, Product, Tag, ProductTag } = require("../models");

const userData = require("./users.json");
const productData = require("./products.json");
const tagData = require("./tags.json");
const productTagData = require("./product-tag.json");

// seed database for user, product, tag
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Product.bulkCreate(productData, {
    individualHooks: true,
    returning: true,
  });

  await Tag.bulkCreate(tagData, {
    individualHooks: true,
    returning: true,
  });

  await ProductTag.bulkCreate(productTagData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();

// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
