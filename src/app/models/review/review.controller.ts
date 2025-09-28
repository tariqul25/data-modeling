import { Request, Response } from "express";
import { ReviewModel } from "./review.model.js";

export const createReview = async (req: Request, res: Response) => {
  try {
    const review = new ReviewModel(req.body);
    await review.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getAllReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await ReviewModel.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getReviewById = async (req: Request, res: Response) => {
  try {
    const review = await ReviewModel.findById(req.params.id);
    if (!review) return res.status(404).json({ message: "Not found" });
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updateReview = async (req: Request, res: Response) => {
  try {
    const updatedReview = await ReviewModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedReview) return res.status(404).json({ message: "Not found" });
    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteReview = async (req: Request, res: Response) => {
  try {
    const deletedReview = await ReviewModel.findByIdAndDelete(req.params.id);
    if (!deletedReview) return res.status(404).json({ message: "Not found" });
    res.status(200).json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ error });
  }
};
