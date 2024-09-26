import mongoose from "mongoose";

// Store products in the database
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  images: [{ type: String, required: true }], // Array of image paths/URLs
  category: { type: String, required: true },
  new_price: { type: Number, required: true },
  old_price: { type: Number, required: true },
});

// If the model exists, use it; else, create a new model
const productModel =
  mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;
