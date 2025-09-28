import { Request, Response } from "express";
import { CourseServices } from "./course.services.js";


const CreateCourseController = async (req: Request, res: Response) => {
    try {
        const course = await CourseServices.CreateCourseService(req.body);
        res.status(201).json({
            success: true,
            message: "Course created successfully", 
            data: course 
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to create course", error });
    }
};

const GetAllCourseController = async (req: Request, res: Response) => {
    try {
        const allCourse = await CourseServices.GetAllCourseService();
        res.status(201).json({
            success: true,
            message: "Find All Course successfully", 
            data: allCourse 
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to create course", error });
    }
};

const GetACourseController = async (req: Request, res: Response) => {
    try {
        const singleCourse = await CourseServices.GetACourseService(req.params.id as string);
        res.status(201).json({
            success: true,
            message: "Find A Course successfully", 
            data: singleCourse 
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to create course", error });
    }
};

export const CourseController = {
    CreateCourseController,
    GetAllCourseController,
    GetACourseController
}