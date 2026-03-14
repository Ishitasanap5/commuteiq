import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  searchRoute,
  saveRoute,
  getSavedRoutes
} from "../controllers/routeController.js";

const router = express.Router();

router.post("/search", protect, searchRoute);
router.post("/save", protect, saveRoute);
router.get("/saved", protect, getSavedRoutes);

export default router;