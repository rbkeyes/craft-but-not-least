// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
const sequelize = require("../config/connection");
const { User } = require("../models");
const { Product } = require("../models");
const { Tag } = require("../models");

// =====⚠️ TODO: Check file name if matches ⚠️======
const userData = require("./users.json");
const productData = require("./products.json");
const tagData = require("./tags.json");

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

  process.exit(0);
};

seedDatabase();

// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
