// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
const router = require('express').Router();
// Import all of the API routes from /api/index.js
const userLoginRoutes = require('./loginRoutes');
const userProfileRoutes = require('./profileRoutes');
const buyProductRoutes = require('./buyRoutes');
const sellProductRoutes = require('./sellRoutes');
const deleteProductRoutes = require('./deleteRoutes');
const updateProductRoutes = require('./updateRoutes');


router.use('/', userLoginRoutes); // ✅
router.use('/profile', userProfileRoutes); // ✅
router.use('/buy', buyProductRoutes); // ✅ res data only for now
router.use('/sell', sellProductRoutes); // ✅ 
router.use('/delete', deleteProductRoutes); // ✅ res data only for now
router.use('/update', updateProductRoutes); // ✅ res data only for now



router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨