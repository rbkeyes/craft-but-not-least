// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
// for user profile page: edit user info, create a new listing, edit a listing, delete a listing, contact seller
const router = require("express").Router();
const { User, Product } = require("../../models");

// ⤵️ ========test result: 
// get user info by user id(localhost:3001/api/profile/:id)
router.get("/:id", async (req, res) => { // ⭐️TODO: add auth middleware 
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          attributes: ["id", "product_name", "product_description", "product_price", "product_tag"],
        },
      ],
    });
    const user = userData.get({ plain: true });
    // ⭐️TODO: delete below once user profile page is ready
    res.render(user);
    // ⭐️TODO: comment back below once user profile page is ready
    // res.render("profile", { user, logged_in: req.session.logged_in });
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
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
