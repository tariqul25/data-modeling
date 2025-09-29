import { IMentor } from "./mentor.interface.js";
import { MentorModel } from "./mentor.model.js";

const CreateMentorService= async(payLoad: IMentor)=>{
    const mentor = MentorModel.create(payLoad);
    return mentor;
}

const GetAllMentorService= async()=>{
    const mentor= MentorModel.find({});
    return mentor;
}

const GetAMentorService= async(id:string)=>{
    const mentor= MentorModel.findById(id);
    return mentor;
}

export const MentorServices={
    CreateMentorService,
    GetAllMentorService,
    GetAMentorService
}