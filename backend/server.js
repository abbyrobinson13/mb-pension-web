import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

const app = express();

app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 5000;
connectDB();

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
