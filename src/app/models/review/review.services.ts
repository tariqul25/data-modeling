import { IReview } from "./review.interface.js";
import { ReviewModel } from "./review.model.js";

const CreateReviewService= async(payLoad: IReview)=>{
    const review = ReviewModel.create(payLoad);
    return review;
}

const GetAllReviewService= async()=>{
    const allReview= ReviewModel.find({});
    return allReview;
}

const GetAReviewService= async(id:string)=>{
    const review= ReviewModel.findById(id);
    return review;
}

export const ReviewServices={
    CreateReviewService,
    GetAllReviewService,
    GetAReviewService
}