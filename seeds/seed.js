const sequelize = require('../config/connection');
//  ========⤵️ User can be changed later ===== 
const { User } = require('../models');

const productData = require('./productData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  //  ========⤵️ User can be changed later ===== 
  await User.bulkCreate(productData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();