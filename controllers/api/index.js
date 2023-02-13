// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
const router = require('express').Router();
// ⚠️ Import all of the API routes from /api/index.js
const homeRoutes = require('./profileRoutes');
const productRoutes = require('./productRoutes');
const sellProductRoutes = require('../sellProductRoutes');

router.use('/', homeRoutes);
router.use('/products', productRoutes);
router.use('/sell', sellProductRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨