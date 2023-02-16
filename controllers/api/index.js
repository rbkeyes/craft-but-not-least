// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
const router = require('express').Router();
// Import all of the API routes from /api/index.js
const userLoginRoutes = require('./loginRoutes');
const userProfileRoutes = require('./profileRoutes');
const buyProductRoutes = require('./buyRoutes');
const sellProductRoutes = require('./sellRoutes');
const deleteProductRoutes = require('./deleteRoutes');
const updateProductRoutes = require('./updateRoutes');
// **rb** testing upload
// const uploadRoutes = require('./uploadRoutes')

router.use('/', userLoginRoutes); // ✅
router.use('/profile', userProfileRoutes);
router.use('/buy', buyProductRoutes);
router.use('/sell', sellProductRoutes); // ✅
router.use('/delete', deleteProductRoutes); // ✅
router.use('/update', updateProductRoutes); // ✅
// **rb** testing upload
// router.use('/upload', uploadRoutes);



router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨