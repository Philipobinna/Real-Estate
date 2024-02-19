import User from "../models/userModel.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";

export const register = (req, res) => {
    res.send("Welcome")
}


export const updateUser = async (req, res, next) => {
    if(req.user.id !== req.params.id) return next(errorHandler(401, "Unauthorized access"));
    
    try {
        if(req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
        }
    
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: {
                username: req.body.username,
                password: req.body.password,
                email: req.body.email,
                avatar: req.body.avatar
            }
        }, {new: true});
    
        const {password, ...rest} = updatedUser._doc;
    
        return res.status(200).json(rest) 
    } catch (error) {
        next(error)
    }
    }