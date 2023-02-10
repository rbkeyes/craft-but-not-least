const router = require('express').Router();

// GET route for getting all of the dishes that are on the menu
router.get('/', async (req, res) => {
    res.render('listItemForm');
});

module.exports = router;