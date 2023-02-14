// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
// for user to buy products and contact seller
const router = require('express').Router();
const { Product } = require('../../models');

// ======== TODO: fix the function: 500 error ===========
// update a product by product id(localhost:3001/api/update/:id)
router.put("/product/:id", async (req, res) => {
    // router.put("/:id", withAuth, async (req, res) => {
      try {
        const productData = await Product.update(
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
        const product = productData.map((product) => product.get({ plain: true }));
        if (!product) {
          res.status(404).json({ message: "No product found with this id!" });
          return;
        }
        res.status(200).json(product);
      } catch (err) {
        res.status(500).json(err);
      }
    });

module.exports = router;
// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨