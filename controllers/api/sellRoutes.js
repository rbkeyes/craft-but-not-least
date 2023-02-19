// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
// for user to listing and sell products
const router = require("express").Router();
const path = require('path');
const { Product, Image } = require("../../models");
const withAuth = require('../../utils/auth');

// **rb** I wasn't sure if there was a better place to put storage and upload - maybe in a helper file?
const multer = require('multer');
// **rb** sets storage to disk storage
var storage = multer.diskStorage({
  destination: function (req, file, cb) {

    // Uploads is the Upload_folder_name
    cb(null, "./public/uploads")
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + ".jpg")
  }
});
// **rb** sets upload to use storage, single file only
const upload = multer({ storage: storage }).single('image_file');

// ⤵️============ ✅tested with json object input: 200 ok =================
// create a new product to sell ((localhost:3001/api/sell)
// router.post("/", withAuth, async (req, res) => {
//   try {
//     const newProduct = await Product.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });
//     // comment out below after login is working
//     res.status(200).json({
//       message: "Product has been successfully added!",
//       product: req.body,
//     });
//     res.render('new-listing');
//     // ⭐️TODO: add login session once login is working⤵️
//     // res.render('new-Product', { products, logged_in: req.session.logged_in });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

router.post('/', async (req, res) => {
  const product = await Product.create({
    ...req.body,
    user_id: req.session.user_id
  });
  console.log(product);
  })

router.post('/upload', upload, async (req, res) => {
  try {
    console.log(req.file);
    const newImage = Image.create({
      file_name: req.file.filename,
      path: req.file.path 
    });
    console.log(newImage);
  } catch (err) {
    console.error(err);
  }  
});


module.exports = router;
// ☆•:*´¨`*:•.☆•:*´¨`*:•.Mengxue☆•:*´¨`*:•.☆•:*´¨`*:•.☆•:*´¨
