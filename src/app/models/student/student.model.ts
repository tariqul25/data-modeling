import { model, Schema } from "mongoose";
import { IStudent } from "./student.interface.js";

const studentSchema = new Schema<IStudent>({
  _id: { type: Schema.Types.ObjectId, required: true },
  id: { type: String, required: true },
  name: { type: String, required: true },
  gender: { type: String, enum: ["male", "female", "other"], required: true },
  dateOfBirth: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contactNo: { type: String, required: true },
  emergencyContact: { type: String, required: true },
  address: { type: String, required: true },
  guardian: { type: String, required: true },
  profileImg: { type: String, required: true },
  courseName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const StudentModel = model<IStudent>("student", studentSchema);
