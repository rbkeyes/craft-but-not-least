// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
// for user to buy products and contact seller
const router = require("express").Router();
const { Product } = require("../../models");

// ⤵️============ ✅tested with json object input: 200 ok =================
// update a product by product id(localhost:3001/api/update/product/:id)
router.put("/product/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.update(
      {
        ...req.body,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (updatedProduct[0] === 0) {
      res.status(404).json({ message: "No product found with this id!" });
      return;
    }
    res
      .status(200)
      .json({
        message: "Product has been successfully updated!",
        product: req.body,
      });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
