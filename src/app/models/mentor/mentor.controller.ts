import { Request, Response } from "express";
import { MentorModel } from "./mentor.model.js";

export const createMentor = async (req: Request, res: Response) => {
  try {
    const mentor = new MentorModel(req.body);
    await mentor.save();
    res.status(201).json(mentor);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getAllMentors = async (req: Request, res: Response) => {
  try {
    const mentors = await MentorModel.find();
    res.status(200).json(mentors);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getMentorById = async (req: Request, res: Response) => {
  try {
    const mentor = await MentorModel.findById(req.params.id);
    if (!mentor) return res.status(404).json({ message: "Not found" });
    res.status(200).json(mentor);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updateMentor = async (req: Request, res: Response) => {
  try {
    const updatedMentor = await MentorModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedMentor) return res.status(404).json({ message: "Not found" });
    res.status(200).json(updatedMentor);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteMentor = async (req: Request, res: Response) => {
  try {
    const deletedMentor = await MentorModel.findByIdAndDelete(req.params.id);
    if (!deletedMentor) return res.status(404).json({ message: "Not found" });
    res.status(200).json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ error });
  }
};
