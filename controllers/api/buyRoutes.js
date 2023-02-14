// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
// for user to buy products and contact seller
const router = require('express').Router();
const { Product, User, Tag } = require('../../models');
// const withAuth = require('../utils');

// get all products
router.get('/products', async (req, res) => { // TODO: add withAuth once login is working
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
        res.json(products);
        // ⚠️ to run the server needs to comment out this below first, after finished loggin session comment back ⚠️
        // res.render('all-products', { products, logged_in: req.session.logged_in });
    } catch (err) {
        res.status(500).json(err);
    }
});

// get all tags
router.get('/tags', async (req, res) => {
    try {
        const tagData = await Tag.findAll({
            include: [
                {
                    model: Product,
                    attributes: ['name', 'price', 'description'],
                },
            ],
        });
        const tags = tagData.map((tag) => tag.get({ plain: true }));
        res.json(tags);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get one product by id
router.get('/:id', async (req, res) => {
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
        res.render('product', { product, logged_in: req.session.logged_in });
    } catch (err) {
        res.status(500).json(err);
    }
});

// get all products by tag id
router.get('/tag/:id', async (req, res) => {
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
                    where: {
                        id: req.params.id,
                    },
                },
            ],
        });
        const products = productData.map((product) => product.get({ plain: true }));
        res.render('all-products', { products, logged_in: req.session.logged_in });
    } catch (err) { 
        res.status(500).json(err);
    }
});

// contact seller
router.post('/contact/:id', async (req, res) => {
// router.post('/contact/:id', withAuth, async (req, res) => {
    try {
        const newContact = await Contact.create({
            ...req.body,
            user_id: req.session.user_id,
            product_id: req.params.id,
        });
        res.status(200).json(newContact);
    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;
// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨