import productModel from "../models/productModel.js";
import fs from "fs";

//add product item
const addProduct = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  const product = new productModel({
    name: req.body.name,
    image: image_filename,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
  try {
    await product.save();
    res.json({ success: true, message: "Product added successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error adding product" });
  }
};

//all products list
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, data: products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error listing products" });
  }
};

//remove product items
const removeProduct = async (req, res) => {
  try {
    const product = await productModel.findById(req.body.id);
    fs.unlink(`upload/images/${product.image}`, () => {});

    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product removed successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error removing product" });
  }
};
export { addProduct, listProducts, removeProduct };
