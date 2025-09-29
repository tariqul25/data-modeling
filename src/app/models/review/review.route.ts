import express from "express";
import { ReviewController } from "./review.controller.js";

const router = express.Router();

router.post("/create-review", ReviewController.CreateReviewController); 
router.get("/", ReviewController.GetAllReviewController); 
router.get("/:id", ReviewController.GetAReviewController); 

export const ReviewRoutes = router;