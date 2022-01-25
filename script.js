import express from "express";
import mongoose from "mongoose";
import router from "./router/routes.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

app.listen(3000, () => {
  console.log("Listening to localhost: 3000!");

  const mongooseConnect = async () => {
    await mongoose.connect("mongodb://localhost:27017/personal-blog");
  };

  mongooseConnect();
});
