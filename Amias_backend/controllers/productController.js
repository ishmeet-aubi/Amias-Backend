const mongoose = require("mongoose");
const Product = mongoose.model("Product");

exports.createProduct = async (req, res) => {
  const { name, type,brand, ingredient, category, price,product_image } = req.body;

  const nameRegex = /^[A-Za-z\s]+$/;

  if (!nameRegex.test(name)) throw "Product name can contain only alphabets.";

  const productExists = await Product.findOne({ name });

  if (productExists) throw "Product with that name already exists!";

  const product = new Product({
    name,
    type,
    brand,
    ingredient,
    category,
    price,
    userScore,
    user_Id,
    product_image
  });

  await product.save();

  res.json({
    message: "Product created!",
  });
};

exports.getAll = async (req, res) => {
  const products = await Product.find({});

  res.json(products);
};
