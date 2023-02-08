const router = require('express').Router();
const listItemRoutes = require('./listItemRoutes');

router.use('/listItem', listItemRoutes);

module.exports = router;
