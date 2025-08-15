import express from "express";
import { loginWithSpotify } from "../controllers/authController.js";
const router = express.Router();

router.post("/spotify", loginWithSpotify);

export default router;
