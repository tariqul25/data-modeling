import express from "express";
import { createStudent, getAllStudents, getStudentById, updateStudent, deleteStudent } from "./student.controller.js";

const router = express.Router();

router.post("/student-create", createStudent);
router.get("/students", getAllStudents);
router.get("/student/:id", getStudentById);
router.put("/student/:id", updateStudent);
router.delete("/student/:id", deleteStudent);

export const StudentRoutes = router;
