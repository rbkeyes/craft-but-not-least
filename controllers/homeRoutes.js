// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
// ====== to be discussed =======    
// for user profile page, includes user info, user's products, user's orders after login

const router = require('express').Router();
const { User, Product, Tag } = require('../models');
// const homeRoutes = require('');

// get route to render homepage (be sure to name handlebars template "homepage" in order to render);
router.get('/', async (req, res) => {
    res.render('homepage');
});

module.exports = router;













module.exports = router;
// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨