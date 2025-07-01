import { Router } from "express";
import { getAllSong, getFeaturedSongs, getMadeForYouSongs, getTrendingSongs } from "../controller/song.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/",protectRoute, requireAdmin, getAllSong)
router.get("/featured", getFeaturedSongs)
router.get("/made-for-you", getMadeForYouSongs)
router.get("/trending", getTrendingSongs)

export default router;