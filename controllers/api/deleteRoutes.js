// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
const router = require("express").Router();
const { Product, User, Tag } = require("../../models");
// const withAuth = require("../utils");

// ⤵️=============test result: 500 Internal Server Error================
// get all products by user id(localhost:3001/api/delete/user/:id)
router.get("/user/:id", async (req, res) => { //TODO: add withAuth
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
      // ⭐️TODO: revise below once login is done
      res.render("all-products", { products });
      //res.render("all-products", { products, logged_in: req.session.logged_in });
    } catch (err) {
      res.status(500).json(err);
    }
  });

// ⤵️=============✅test result: 200 OK================
  // delete a product by id(localhost:3001/api/delete/:id)
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