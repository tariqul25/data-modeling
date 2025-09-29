import { IStudent } from "./student.interface.js";
import { StudentModel } from "./student.model.js";

const CreateStudentService= async(payLoad: IStudent)=>{
    const student= StudentModel.create(payLoad);
    return student;
}

const GetAllStudentService= async()=>{
    const student= StudentModel.find({});
    return student;
}

const GetAStudentService= async(id:string)=>{
    const student= StudentModel.findById(id);
    return student;
}

export const StudentServices={
    CreateStudentService,
    GetAllStudentService,
    GetAStudentService
}