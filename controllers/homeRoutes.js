// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
// for user profile page, includes user info, user's products, user's orders after login
const router = require('express').Router();
const { User, Product, Tag } = require('../models');

// get user info by user id
router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id, {
            include: [
                {
                    model: Product,
                    attributes: ['id', 'name', 'description', 'price', 'tag'],
                },
            ],
        });
        const user = userData.get({ plain: true });
        res.render('profile', { user, logged_in: req.session.logged_in });
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;
// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨