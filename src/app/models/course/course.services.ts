import { ICourse } from "./course.interface.js";
import { CourseModel } from "./course.model.js";

const CreateCourseService= async(payLoad: ICourse)=>{
    const course= CourseModel.create(payLoad);
    return course;
}

const GetAllCourseService= async()=>{
    const course= CourseModel.find({});
    return course;
}

const GetACourseService= async(id:string)=>{
    const course= CourseModel.findById(id);
    return course;
}

export const CourseServices={
    CreateCourseService,
    GetAllCourseService,
    GetACourseService
}