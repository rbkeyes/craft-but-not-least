// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
// for user profile page: edit user info, create a new listing, edit a listing, delete a listing, contact seller
const router = require("express").Router();
const { User, Product, Tag } = require("../../models");

// ⤵️ ========test result: 500 internal server error =======
// get user info by user id
router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          attributes: ["id", "name", "description", "price", "tag"],
        },
      ],
    });
    const user = userData.get({ plain: true });
    res.render("profile", { user, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

// ⤵️ ========test result: 
// update user info by user id
router.put("/:id", async (req, res) => {
  try {
    User.update(
      {
        // users: id, name, email, password
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
