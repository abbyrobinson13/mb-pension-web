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

// employee schema set up

function main() {

  const employeeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
  });

  const Employee = new mongoose.model("Employee", employeeSchema);

  const employee = new Employee({
    firstName: "Afshin",
    lastName: "Sharifnia",
    email: " afshin.sharifnia@gmail.com",
  });
  console.log("hello");
  employee.save();
}
main();
