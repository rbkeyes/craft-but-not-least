// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
// for user to buy products and contact seller
const router = require("express").Router();
const { Product, User, Tag } = require("../../models");
// const withAuth = require('../utils');

// ⤵️ ======== ✅test result: 200 ok ========
// get all products (localhost:3001/api/buy/product)
router.get('/product', async (req, res) => { // ⭐️TODO: add withAuth once login is working
    try {
        const productData = await Product.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Tag,
                    attributes: ['tag_name'],
                },
            ],
        });
        const products = productData.map((product) => product.get({ plain: true }));
        // comment out below after login is working
        res.json(products);
        // ⤴️⚠️⤵️ to run the server needs to comment out this below first, after finished loggin session comment back ⚠️
        // res.render('all-products', { products, logged_in: req.session.logged_in });
    } catch (err) {
        res.status(500).json(err);
    }
});

// ⤵️ ======== ✅test result: 200 ok ========
// get one product by id
router.get('/product/:id', async (req, res) => { //⭐️TODO: add withAuth once login is working
    try {
        const productData = await Product.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Tag,
                    attributes: ['tag_name'],
                },
            ],
        });
        const product = productData.get({ plain: true });
        // ⭐️TODO: comment back below after login is working
        res.json(product);
        // res.render('product', { product, logged_in: req.session.logged_in });
    } catch (err) {
        res.status(500).json(err);
    }
});

// ⤵️ ======== test result: 500 Internal Server Error ========
// get all tags(localhost:3001/api/buy/tag)
router.get("/tag", async (req, res) => {
  try {
    // const tagData = await Tag.findAll();
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    const tags = tagData.map((tag) => tag.get({ plain: true }));
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ⤵️ ========✅function need to be fixed: 200 ok ========
// get all products by tag id
router.get("/tag/:id", async (req, res) => {
  //⭐️TODO: add withAuth once login is working
  try {
    const productData = await Product.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Tag,
          attributes: ["tag_name"],
          where: {
            id: req.params.id,
          },
        },
      ],
    });
    const products = productData.map((product) => product.get({ plain: true }));
    // ⭐️TODO: comment back below after login is working
    res.json(products);
    // res.render('all-products', { products, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

// ⤵️ ======== function need to be fixed: no contact model&seeds =======
// contact seller(localhost:3001/api/buy/contact/:id)
// router.post('/contact/:id', async (req, res) => {
// // router.post('/contact/:id', withAuth, async (req, res) => {
//     try {
//         const newContact = await Contact.create({
//             ...req.body,
//             user_id: req.session.user_id,
//             product_id: req.params.id,
//         });
//         res.status(200).json(newContact);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

// TODO: get user email by user id as user want to contact a seller

module.exports = router;
// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
