// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
const Product = require('./Product');
const Tag = require('./Tag');
const User = require('./User');
const ProductTag = require('./ProductTag');
const Image = require('./Image')

//  https://sequelize.org/docs/v6/core-concepts/model-basics/

// Users have many Products
User.hasMany(Product);

// Products belongsTo User
Product.belongsTo(User, {
    foreignKey: 'user_id',
    });

// products have many tags (through ProductTag)
Product.belongsToMany(Tag, {
    through: ProductTag,
    foreignKey: 'product_id',
});

// tags belong to many products (through ProductTag)
Tag.belongsToMany(Product, {
    through: ProductTag,
    foreignKey: 'tag_id',
});

// **rb** adding relationship between product and uploaded images **rb**
Product.hasOne(Image);

Image.belongsTo(Product, {
    onDelete: 'CASCADE'
});

// ⭐️ TODO: relationship between product image & product

module.exports = {
    Product,
    Tag,
    User,
    ProductTag,
};
// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
