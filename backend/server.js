import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
<<<<<<< HEAD
import employeeRouter from "../routes/employeeRoutes.js";
import myConfig from "dotenv";
=======
import employeeRouter from "./routes/employeeRoutes";
>>>>>>> 3eb88b5f4fbf2491649ec9c906a680ab73d3ef54

const app = express();
app.use(express.json());

app.use("/api/employee", employeeRouter);

myConfig.config();

const PORT = process.env.PORT || 5000;
connectDB();

<<<<<<< HEAD
=======
app.use(express.json());

app.use("/api/employee", employeeRouter);

>>>>>>> 3eb88b5f4fbf2491649ec9c906a680ab73d3ef54
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

<<<<<<< HEAD
// Testing connection to MongoDB
/*function main() {

=======
// employee schema set up

function main() {
>>>>>>> 3eb88b5f4fbf2491649ec9c906a680ab73d3ef54
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

*/
