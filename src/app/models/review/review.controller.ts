import { Request, Response } from "express";
import { ReviewServices } from "./review.services.js";


const CreateReviewController = async (req: Request, res: Response) => {
    try {
        const review = await ReviewServices.CreateReviewService(req.body);
        res.status(201).json({
            success: true,
            message: "Review created successfully", 
            data: review 
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to create Review", error });
    }
};

const GetAllReviewController = async (req: Request, res: Response) => {
    try {
        const allReview = await ReviewServices.GetAllReviewService();
        res.status(201).json({
            success: true,
            message: "Find All Review successfully", 
            data: allReview 
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to create Review", error });
    }
};

const GetAReviewController = async (req: Request, res: Response) => {
    try {
        const singleReview = await ReviewServices.GetAReviewService(req.params.id as string);
        res.status(201).json({
            success: true,
            message: "Find A Review successfully", 
            data: singleReview 
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to create Review", error });
    }
};

export const ReviewController = {
    CreateReviewController,
    GetAllReviewController,
    GetAReviewController
}