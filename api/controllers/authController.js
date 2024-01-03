import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  try {
const {username, email, password} = req.body;

const hashedPassword = bcryptjs.hashSync(password, 10)
const newUser = new User({username, email, password: hashedPassword});

   await newUser.save();
  res.status(201).json({msg: "Successfully Registered"})
  
} catch (error) {
 // return res.status(500).json({msg: "Registration failed", error: error.message});
next(error);
// next(errorHandler(500, "Registration failed", error));
 }
};


export const signin = async (req, res, next) => {
const {email, password} = req.body;
try {
  const validUser = await User.findOne({email});
  if(!validUser) return next(errorHandler(404, "User not found!"));
  const validPasssword = bcryptjs.compareSync(password, validUser.password);
  if(!validPasssword) return next(errorHandler(401, "Wrong Credentials!"));
  const token = jwt.sign({ id: validUser._id}, process.env.JWT_SECRET);
  const {password: pass, ...rest} = validUser._doc;
  res.cookie("access_token", token, {httpOnly: true}).status(200).json({msg: "Login successfully", rest});
} catch (error) {
  next(error);
}

}