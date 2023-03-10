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
    await req.session.logged_in;
    res.render("homepage", {
      // **rb** commented out some code to allow homepage to render **rb**
      // users,
      logged_in: req.session.logged_in    
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
  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});


router.get('/sell', withAuth, async (req, res) => {
  try {
    // get tag names from db
    const tagsData = await Tag.findAll({ attributes: ['id','tag_name'] });

    // 404 if nothing found
    if (!tagsData) {
      res.status(404).json('No tags found');
    };
    // if getting all: map array then get({plain: true}) before rendering
    const tags = tagsData.map((tag) => tag.get({ plain: true }));
    // console.log(tags);
    // render form with tags
    res.render('sell', { 
      image_path: null,
      tags, 
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
