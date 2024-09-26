import express from "express";
import {
  addProduct,
  listProducts,
  removeProduct,
} from "../controllers/productController.js";
import multer from "multer";

const productRouter = express.Router();

// Image storage engine to store images in the upload/images folder
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    // Use a unique name for each file
    cb(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
  },
});

// Initialize multer with the defined storage
const upload = multer({ storage: storage });

// Send data to the server (handle multiple images)
productRouter.post("/add", upload.array("images", 4), addProduct); // Use "array" to upload multiple files
productRouter.get("/list", listProducts);
productRouter.post("/remove", removeProduct);

export default productRouter;
