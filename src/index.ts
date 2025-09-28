import express, { type Application, type Request, type Response } from "express";
import cors from 'cors';
import { CourseRoutes } from "./app/models/course/course.route.js";
import { MentorRoutes } from "./app/models/mentor/mentor.route.js";
import { StudentRoutes } from "./app/models/student/student.route.js";
import { ReviewRoutes } from "./app/models/review/review.route.js";

const app: Application = express()

app.use(express.json());
app.use(cors());

app.use("api/courses", CourseRoutes)
app.use("api/mentors", MentorRoutes)
app.use("api/students", StudentRoutes)
app.use("api/reviews", ReviewRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app;