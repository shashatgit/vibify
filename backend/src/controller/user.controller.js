import { User } from "../models/user.model.js";


export const getAllUsers = async (req,res,next) => {
    try {
        const CurrentUserId = req.auth.userId
        const user = await User.find({clearkId: {$ne: CurrentUserId}})
        res.status(200).json(users);
    }catch (error) {
        next(error)
    }
}