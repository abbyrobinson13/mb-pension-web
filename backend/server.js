import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import employeeRouter from "./routes/employeeRoutes";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());

app.use("/api/employee", employeeRouter);

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

  // posting an employee object to MongoDB
  const employee = new Employee({
    firstName: "Afshin",
    lastName: "Sharifnia",
    email: " afshin.sharifnia@gmail.com",
  });
  console.log("Employee info sent to database");
  employee.save();
}
main();
