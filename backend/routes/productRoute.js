import express from "express";
import {
  addProduct,
  listProducts,
  removeProduct,
} from "../controllers/productController.js";
import multer from "multer";

const productRouter = express.Router();

//image storage engine
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage });
//send data on the server
productRouter.post("/add", upload.single("image"), addProduct);
productRouter.get("/list", listProducts);
productRouter.post("/remove", removeProduct);

export default productRouter;
