import mongoose from "mongoose";

//connecting to mongodb
export const db = async () => {
  await mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to MongoDB");
  });
};
