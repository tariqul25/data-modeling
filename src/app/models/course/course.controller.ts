import { Request, Response } from "express";
import { CourseModel } from "./course.model.js";

// Create Course
export const createCourse = async (req: Request, res: Response) => {
    try {
        const course = new CourseModel(req.body);
        await course.save();
        res.status(201).json({ message: "Course created", course });
    } catch (error) {
        res.status(500).json({ message: "Failed to create course", error });
    }
};

export const getAllCourses = async (req: Request, res: Response) => {
    try {
        const courses = await CourseModel.find().populate("mentor").populate("category");
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch courses", error });
    }
};

export const getCourseById = async (req: Request, res: Response) => {
    try {
        const course = await CourseModel.findById(req.params.id).populate("mentor").populate("category");
        if (!course) return res.status(404).json({ message: "Course not found" });
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch course", error });
    }
};

export const updateCourse = async (req: Request, res: Response) => {
    try {
        const updatedCourse = await CourseModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCourse) return res.status(404).json({ message: "Course not found" });
        res.status(200).json({ message: "Course updated", course: updatedCourse });
    } catch (error) {
        res.status(500).json({ message: "Failed to update course", error });
    }
};


export const deleteCourse = async (req: Request, res: Response) => {
    try {
        const deletedCourse = await CourseModel.findByIdAndDelete(req.params.id);
        if (!deletedCourse) return res.status(404).json({ message: "Course not found" });
        res.status(200).json({ message: "Course deleted" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete course", error });
    }
};
