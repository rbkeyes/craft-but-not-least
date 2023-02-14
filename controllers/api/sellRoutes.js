// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
// for user to listing and sell products
const router = require("express").Router();
const { Product, User, Tag } = require("../../models");
// const withAuth = require("../utils");


// create a new product to sell
router.post("/", async (req, res) => {
// router.post("/", withAuth, async (req, res) => {
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


module.exports = router;
// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
