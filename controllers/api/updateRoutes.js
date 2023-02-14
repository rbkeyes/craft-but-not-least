// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
// for user to buy products and contact seller
const router = require('express').Router();
const { Product, User, Tag } = require('../../models');


// update a product by product id
router.put("/:id", async (req, res) => {
    // router.put("/:id", withAuth, async (req, res) => {
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
      } catch (err) {
        res.status(500).json(err);
      }
    });

module.exports = router;
// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨