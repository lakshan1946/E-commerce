import mongoose from "mongoose";

//connecting to mongodb
export const db = async () => {
  await mongoose
    .connect(
      "mongodb+srv://lakshan:Lm1946130%40@cluster0.npmbmjh.mongodb.net/e-commerce"
    )
    .then(() => {
      console.log("Connected to MongoDB");
    });
};
