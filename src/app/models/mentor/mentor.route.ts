import express from "express";
import { createMentor, getAllMentors, getMentorById, updateMentor, deleteMentor } from "./mentor.controller.js";

const router = express.Router();

router.post("/mentor-create", createMentor);
router.get("/mentors", getAllMentors);
router.get("/mentor/:id", getMentorById);
router.put("/mentor/:id", updateMentor);
router.delete("/mentor/:id", deleteMentor);

export const MentorRoutes = router;
