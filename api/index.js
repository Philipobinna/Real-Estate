import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import authRouter from "./routes/authRoute.js";
import cors from "cors";
import cookieParser from "cookie-parser";



dotenv.config();

mongoose.connect(process.env.MONGO).then(({}) => {
  console.log("Database connection successful")
}).catch((err) => {
  console.log(err)
})

// mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     // Once connected, drop the database
//     return mongoose.connection.db.dropDatabase();
//   })
//   .then(() => {
//     console.log("Database dropped successfully");
//   })
//   .catch((err) => {
//     console.error("Error connecting to the database or dropping it:", err);
//   });

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.listen(3000, () => {
  console.log("Server is live on 3000")
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "An error occurred";
  return res.status(statusCode).json({
    success: false, statusCode, message
  });
})

