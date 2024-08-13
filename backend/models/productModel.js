import mongoose from "mongoose";

//store products in database
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  new_price: { type: Number, required: true },
  old_price: { type: Number, required: true },
});

//if model exists, use it, else create a new model
const productModel =
  mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;
