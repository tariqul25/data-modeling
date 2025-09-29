import { Request, Response } from "express";
import { StudentServices } from "./student.services.js";


const CreateStudentController = async (req: Request, res: Response) => {
    try {
        const student = await StudentServices.CreateStudentService(req.body);
        res.status(201).json({
            success: true,
            message: "Student created successfully", 
            data: student 
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to create Student", error });
    }
};

const GetAllStudentController = async (req: Request, res: Response) => {
    try {
        const allStudent = await StudentServices.GetAllStudentService();
        res.status(201).json({
            success: true,
            message: "Find All Student successfully", 
            data: allStudent 
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to create Student", error });
    }
};

const GetAStudentController = async (req: Request, res: Response) => {
    try {
        const singleStudent = await StudentServices.GetAStudentService(req.params.id as string);
        res.status(201).json({
            success: true,
            message: "Find A Student successfully", 
            data: singleStudent 
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to create Student", error });
    }
};

export const StudentController = {
    CreateStudentController,
    GetAllStudentController,
    GetAStudentController
}