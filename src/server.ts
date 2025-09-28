

import dotenv from "dotenv"
import mongoose from "mongoose";
import app from "./index.js";



dotenv.config();
const port = process.env.PORT || 3000



async function main() {
  try {
    const mongouri = process.env.DB_URI;

    if (!mongouri) {
      throw new Error("DB_URI is not defined in environment variables");
    }

    await mongoose.connect(mongouri);
    console.log(" MongoDB connected successfully");

    app.listen(port, () => {
      console.log(` Server running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error(" Error connecting to MongoDB or starting server:", error);
  }
}

main();
