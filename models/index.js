// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
const Product = require('./Product');
const Tag = require('./Tag');
const User = require('./User');
const ProductTag = require('./ProductTag');
const Image = require('./Image')

//  **rb** updated index to properly join Product and Tag in through ProductTag table **rb**
// Products belongsTo Category
Product.belongsTo(User, {
  foreignKey: 'user_id',
});

// Categories have many Products
User.hasMany(Product, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  foreignKey: 'product_id',
  through: {
    model: ProductTag,
    unique: false
  }
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  foreignKey: 'tag_id',
  through: {
    model: ProductTag,
    unique: false
  }
});

// **rb** should we keep paths separate or allow null for Image.product_id and join through ProductTag?
Product.hasMany(Image, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE'
});

Image.belongsTo(Product, {
  foreignKey: "product_id",
});

Tag.hasOne(Image, {
  foreignKey: 'tag_id',
  onDelete: 'CASCADE'
});

Image.belongsTo(Tag, {
  foreignKey: 'tag_id',

})

// //  https://sequelize.org/docs/v6/core-concepts/model-basics/

// // Users have many Products
// User.hasMany(Product);

// // Products belongsTo User
// Product.belongsTo(User, {
//     foreignKey: 'user_id',
//     });

// // products have many tags (through ProductTag)
// Product.belongsToMany(Tag, {
//     through: ProductTag,
//     foreignKey: 'product_id',
// });

// // tags belong to many products (through ProductTag)
// Tag.belongsToMany(Product, {
//     through: ProductTag,
//     foreignKey: 'tag_id',
// });


// ⭐️ TODO - future development: relationship between product image & product

module.exports = {
  Product,
  Tag,
  User,
  ProductTag,
};
// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
