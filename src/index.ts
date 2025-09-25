import express, { type Application, type Request, type Response } from "express";
import cors from 'cors';
import { CourseRoutes } from "./app/models/course/course.route";

const app: Application = express()

app.use(express.json());
app.use(cors());

app.use("api/coursers", CourseRoutes)
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app;