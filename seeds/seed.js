// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
const sequelize = require('../config/connection');
const { Product } = require('../models');

const productData = require('./productData.json');
const userData = require('./userData.json');

// === not finished yet ===
// seed database with product and user data
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Product.bulkCreate(productData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();

// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨