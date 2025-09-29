import { Request, Response } from "express";
import { MentorServices } from "./mentor.services.js";


const CreateMentorController = async (req: Request, res: Response) => {
    try {
        const mentor = await MentorServices.CreateMentorService(req.body);
        res.status(201).json({
            success: true,
            message: "Mentor created successfully", 
            data: mentor 
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to create Mentor", error });
    }
};

const GetAllMentorController = async (req: Request, res: Response) => {
    try {
        const allMentor = await MentorServices.GetAllMentorService();
        res.status(201).json({
            success: true,
            message: "Find All Mentor successfully", 
            data: allMentor 
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to create Mentor", error });
    }
};

const GetAMentorController = async (req: Request, res: Response) => {
    try {
        const singleMentor = await MentorServices.GetAMentorService(req.params.id as string);
        res.status(201).json({
            success: true,
            message: "Find A Mentor successfully", 
            data: singleMentor 
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to create Mentor", error });
    }
};

export const MentorController = {
    CreateMentorController,
    GetAllMentorController,
    GetAMentorController
}