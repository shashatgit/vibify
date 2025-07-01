import { Router } from "express";
import {getAllAlbum, getAlbumById} from "../controller/album.controller.js"

const router = Router();

router.get("/", getAllAlbum)
router.get("/:albumId", getAlbumById)

export default router;