// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
const router = require("express").Router();
const { Product, User, Tag } = require("../../models");
// const withAuth = require("../utils");

// get all products by user id
router.get("/user/:id", async (req, res) => {
    try {
      const productData = await Product.findAll({
        where: {
          user_id: req.params.id,
        },
        include: [
          {
            model: User,
            attributes: ["name"],
          },
          {
            model: Tag,
            attributes: ["tag_name"],
          },
        ],
      });
      const products = productData.map((product) => product.get({ plain: true }));
      res.render("all-products", { products, logged_in: req.session.logged_in });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // delete a product by id 
router.delete("/:id", async (req, res) => {
    // router.delete("/:id", withAuth, async (req, res) => {
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

module.exports = router;
// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨