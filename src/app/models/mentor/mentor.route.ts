import express from "express";
import { MentorController } from "./mentor.controller.js";

const router = express.Router();

router.post("/create-mentor", MentorController.CreateMentorController); 
router.get("/", MentorController.GetAllMentorController); 
router.get("/:id", MentorController.GetAMentorController); 

export const MentorRoutes = router;
