import express from "express";
import { CourseController } from "./course.controller.js";

const router = express.Router();

router.post("/create-course", CourseController.CreateCourseController); 
router.get("/", CourseController.GetAllCourseController); 
router.get("/:id", CourseController.GetACourseController); 

export const CourseRoutes = router;