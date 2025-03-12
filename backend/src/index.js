import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./lib/db";

//*************************************************** */
dotenv.config();
import authRouter from "./routes/auth.route.js"

const FRONTEND_URL = process.env.FRONTEND_URL;
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ 
    origin: process.env.FRONTEND_URL, 
    credentials: true }));

app.get("/", (req, res) => {
    res.send("<h1> Restful Service for MERN Chat Project </h1>");
  });
  
  app.use("/api/v1/auth", authRouter);

app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT);
    connectDB();
  });