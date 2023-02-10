const router = require('express').Router();
const { Tags } = require('../../../models');

// 🧶 get tag names and render to listItemTags.handlebars
router.get('/', async (req, res) => {
    try {
        // 🧶 get tag names from db
        const tagsData = await Tags.findAll({
            attributes: ['name'],
        });

        // 🧶 404 if nothing found
        if (!tagsData) {
            res.status(404).json('No tags found');
        };

        // 🧶 map tags, create array of tag names
        const tags = tagsData.map(tag => tag.name);

        // 🧶 render tags to template
        res.render('listItemTags', {
            tags,
            logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

// 🧶 post new item to db
// 🧶 are we adding a withAuth helper for login?
router.post('/', withAuth, async (req,res) => {
    try {
        const newItem = await Item.create({
            ...req.body,
            user_id: req.session.user_id,
            email: req.session.email,
        });
        if (!req.body) {
            req.status(404).json('Form must be completed in order to submit');
        }
        res.status(200).json(newItem);
    } catch (err) {
        res.status(400).json(err);
    };
});

module.exports = router;