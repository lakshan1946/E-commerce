import express from "express";
import cors from "cors";
import "dotenv/config";

import { db } from "./config/db.js";
import productRouter from "./routes/productRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

//app config
const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(cors());

//db connection
db();

//api endpoints
app.use("/api/product", productRouter);
app.use("/images", express.static("./upload/images")); //to access images from frontend
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

//using get method to check if server is working
app.get("/", (req, res) => {
  res.send("Hello from server");
});

//to run express server
app.listen(port, (error) => {
  if (!error) {
    console.log("Server is running on port: ", port);
  } else {
    console.log("Error: ", error);
  }
});
