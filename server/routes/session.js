import express from "express";
import { getSessionData } from "../controllers/sessionController.js";
import { logout } from "../controllers/sessionController.js";
const router = express.Router();

router.get("/me", getSessionData);
router.post("/logout", logout);

export default router;
