// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
// for user profile page: edit user info, create a new listing, edit a listing, delete a listing, contact seller
const router = require("express").Router();
const { User, Product, Tag } = require("../../models");

// ⚠️CHECK: get user info by user id
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

// ⚠️CHECK: update user info by user id
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

// ⚠️CHECK: route to create a new product to sell/list
router.post("/sell", async (req, res) => {
  try {
    const newProduct = await Product.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newProduct);
  } catch (err) {
    res.status(400).json(err);
  }
});

// ⚠️CHECK:  route to update user's current selling products/listings
router.put("/update", async (req, res) => {
  try {
    Product.update(
      {
        // products: id, name, description, price, tag
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        tag: req.body.tag,
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

// ⚠️CHECK: route to delete user's current selling products/listings
router.delete("/delete", async (req, res) => {
  try {
    const productData = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!productData) {
      res.status(404).json({ message: "No product found with this id!" });
      return;
    }
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ⚠️CHECK: route to contact seller that user is interested in buying a product
router.post("/contact", async (req, res) => {
  try {
    const newContact = await Contact.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newContact);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
