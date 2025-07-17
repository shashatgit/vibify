import { User } from "../models/user.model.js";


export const getAllUsers = async (req,res,next) => {
    try {
        const CurrentUserId = req.auth.userId
        const user = await User.find({clarkId: {$ne: CurrentUserId}})
        res.status(200).json(users);
    }catch (error) {
        next(error)
    }
}