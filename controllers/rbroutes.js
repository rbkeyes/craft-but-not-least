const router = require('express').Router();
const { User, Product, Tag } = require('../models');

// GET route for getting all of the dishes that are on the menu
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

module.exports = router;