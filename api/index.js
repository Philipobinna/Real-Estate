import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
  console.log("database connection")
}).catch((err) => {
  console.log(err)
})

const app = express();

app.listen(3000, () => {
  console.log("Server is live on 3000")
})