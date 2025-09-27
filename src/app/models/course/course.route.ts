import express from "express";
import {
    createCourse,
    getAllCourses,
    getCourseById,
    updateCourse,
    deleteCourse
} from "./course.controller.js";

const router = express.Router();

router.post("/course-create", createCourse);
router.get("/courses", getAllCourses);
router.get("/course/:id", getCourseById);
router.put("/course/:id", updateCourse);
router.delete("/course/:id", deleteCourse);

export const CourseRoutes = router;
