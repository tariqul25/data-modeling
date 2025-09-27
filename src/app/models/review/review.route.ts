import express from "express";
import { createReview, getAllReviews, getReviewById, updateReview, deleteReview } from "./review.controller.js";

const router = express.Router();

router.post("/review-create", createReview);
router.get("/reviews", getAllReviews);
router.get("/review/:id", getReviewById);
router.put("/review/:id", updateReview);
router.delete("/review/:id", deleteReview);

export const ReviewRoutes = router;
