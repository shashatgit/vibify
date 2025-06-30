import { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware";

const router = Router();

router.get('/', (req,res) => {
    req.auth.userId
    res.send("User with GET method...");
})

export default router;