// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
const router = require("express").Router();
const { User, Tag } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => { // TODO: add withAuth
  try {
    // **rb** assuming homepage is the one displaying all category cards, will need to find tags & render associated images **rb**
    // **rb** commented out some code to allow homepage to render **rb**
    // const userData = await User.findAll({
    //   attributes: { exclude: ["password"] },
    //   order: [["name", "ASC"]],
      
    // });
    // const users = userData.map((user) => user.get({ plain: true }));

    res.render("homepage", {
      // **rb** commented out some code to allow homepage to render **rb**
    
      // users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  // res.render("login");
  // **rb** temp login route added below for use until custom login is done **rb**
  res.render("temp-login");
});

// **rb** adding new-listing route because I didn't see it anywhere. If it's here and I just missed it feel free to remove mine! **rb**
// **rb** I haven't added withAuth to this route yet, will need it eventually **rb**
router.get('/sell', withAuth, async (req, res) => {
  try {
    // get tag names from db
    const tagsData = await Tag.findAll({ attributes: ['tag_name'] });

    // 404 if nothing found
    if (!tagsData) {
      res.status(404).json('No tags found');
    };
    // if getting all: map array then get({plain: true}) before rendering
    const tags = tagsData.map((tag) => tag.get({ plain: true }));
    // render form with tags
    res.render('sell', { 
      tags, 
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
