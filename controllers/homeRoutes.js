// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
const router = require("express").Router();
const { User } = require("../models");
// const withAuth = require("../utils/withAuth");

router.get("/", async (req, res) => { // TODO: add withAuth
  try {
    // **rb** commented out some code to allow homepage to render **rb**
    // const userData = await User.findAll({
    //   attributes: { exclude: ["password"] },
    //   order: [["name", "ASC"]],
    // });
    // const users = userData.map((user) => user.get({ plain: true }));

    res.render("homepage", {
          // **rb** commented out some code to allow homepage to render **rb**
      // users,
      // logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // if (req.session.logged_in) {
  //   res.redirect("/");
  //   return;
  // }

  // res.render("login");
  // **rb** temp login route added below for use until custom login is done **rb**
  res.render("temp-login");
});


module.exports = router;
// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
