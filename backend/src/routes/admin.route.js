import { Router } from "express";
import { createSong, deleteSong, createAlbum, deleteAlbum, checkAdmin} from "../controller/admin.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";


const router = Router();

router.use(protectRoute, requireAdmin)

router.get("/check", checkAdmin);

router.post("/songs", createSong);
router.post("/albums", createAlbum);

router.delete("/songs/:id", deleteSong);
router.delete("/albums/:id", deleteAlbum);



export default router;