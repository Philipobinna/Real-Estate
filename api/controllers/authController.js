import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
const {username, email, password} = req.body;
const hashedPassword = bcryptjs.hashSync(password, 10)
const newUser = new User({username, email, password: hashedPassword});

try {
  
  await newUser.save();
  res.status(201).json({msg: "Registration successful"})
  
} catch (error) {
  return res.status(500).json({msg: "Registration failed", error})
}
};