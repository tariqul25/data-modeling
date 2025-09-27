import { Request, Response } from "express";
import { StudentModel } from "./student.model.js";

export const createStudent = async (req: Request, res: Response) => {
  try {
    const student = new StudentModel(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getAllStudents = async (req: Request, res: Response) => {
  try {
    const students = await StudentModel.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getStudentById = async (req: Request, res: Response) => {
  try {
    const student = await StudentModel.findById(req.params.id);
    if (!student) return res.status(404).json({ message: "Not found" });
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updateStudent = async (req: Request, res: Response) => {
  try {
    const updatedStudent = await StudentModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedStudent) return res.status(404).json({ message: "Not found" });
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteStudent = async (req: Request, res: Response) => {
  try {
    const deletedStudent = await StudentModel.findByIdAndDelete(req.params.id);
    if (!deletedStudent) return res.status(404).json({ message: "Not found" });
    res.status(200).json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ error });
  }
};
