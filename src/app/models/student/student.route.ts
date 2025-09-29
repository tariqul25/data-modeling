import express from "express";
import { StudentController } from "./student.controller.js";

const router = express.Router();

router.post("/create-student", StudentController.CreateStudentController); 
router.get("/", StudentController.GetAllStudentController); 
router.get("/:id", StudentController.GetAStudentController); 

export const StudentRoutes = router;
