import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB();
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
