import productModel from "../models/productModel.js";
import fs from "fs";

// Add product item
const addProduct = async (req, res) => {
  // Get filenames of uploaded images and store them in an array
  const image_filenames = req.files.map((file) => file.filename);

  const product = new productModel({
    name: req.body.name,
    images: image_filenames, // Store array of image filenames
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

// List all products
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, data: products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error listing products" });
  }
};

// Remove product item
const removeProduct = async (req, res) => {
  try {
    const product = await productModel.findById(req.body.id);

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    // Ensure product.images exists and is an array
    if (Array.isArray(product.images) && product.images.length > 0) {
      product.images.forEach((image) => {
        const filePath = `upload/images/${image}`;

        fs.unlink(filePath, (err) => {
          if (err) {
            console.log(`Error deleting file ${filePath}:`, err);
          } else {
            console.log(`Successfully deleted file ${filePath}`);
          }
        });
      });
    }

    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product removed successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error removing product" });
  }
};

export { addProduct, listProducts, removeProduct };
