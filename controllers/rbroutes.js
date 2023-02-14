const router = require('express').Router();
const { User, Product, Tag } = require('../models');

router.get('/', async (req, res) => {
    res.render('rbhome');
});

router.get('/form', async (req, res) => {
    try {
        res.render('list-item');
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/list-item', async (req, res) => {
    try {
        // get tag names from db
        const tagsData = await Tag.findAll();

        // 404 if nothing found
        if (!tagsData) {
            res.status(404).json('No tags found');
        };

        // if getting all: map array then get({plain: true}) before rendering
        const tags = tagsData.map((tag) => tag.get({ plain: true }));
        console.log(tags);
        // render form with tags
        res.render('list-item', {tags});
        // logged_in: req.session.logged_in

    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/list-item', async (req, res) => {
    try {
        const newItem = await Product.create({
            product_name: req.body.product_name,
            product_description: req.body.product_description,
            product_price: req.body.product_price,
            product_tag: req.body.product_tag,    
            // user id & email: get from session?
        });
        if (!newItem) {
            res.json("Unable to add item.");
        }
        res.status(202).json(newItem);
    } catch (err) {
        console.err(err);
        res.status(400).json(err);
    }
});

router.get('/products', async (req, res) => {
    try {
        // get tag names from db
        const productsData = await Product.findAll();

        // 404 if nothing found
        if (!productsData) {
            res.status(404).json('No products found');
        };
        // res.json(productsData);

        // if getting all: map array then get({plain: true}) before rendering
        const products = productsData.map((product) => product.get({ plain: true }));
        console.log(products);
        // render form with tags
        res.render('rbproducts', {products});
        // logged_in: req.session.logged_in

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    res.render('login');
});


module.exports = router;