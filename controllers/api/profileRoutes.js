// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
// for user profile page: edit user info, create a new listing, edit a listing, delete a listing, contact seller
const router = require("express").Router();
const { User, Product } = require("../../models");
// const withAuth = require('../utils');

// ⤵️ ========test result:
// get user info by user id(localhost:3001/api/profile/:id)
router.get("/:id", async (req, res) => {
  // ⭐️TODO: add auth middleware
  try {
    conso
    const userData = await User.findByPk(
      req.session.id, {
      include: [
        {
          model: Product,
          attributes: [
            "id",
            "product_name",
            "product_description",
            "product_price",
            "product_tag",
          ],
        },
      ],
    });
    const user = userData.get({ plain: true });
    res.render("profile-page", { user, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

// ⤵️ ========test result:
// update user info by user id(localhost:3001/api/profile/:id)
router.put("/:id", async (req, res) => {
  try {
    User.update(
      {
        // user: name, email, password
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(userData);
    // ⤵️ update user account info from user profile page
    // ⭐️TODO: add handlebar name in "" once it's created
    // res.render(" ", { user, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
