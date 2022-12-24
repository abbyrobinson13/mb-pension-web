import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
});

//CRUD functions for MongoDB should be Async
const Employee = new mongoose.model("Employee", employeeSchema);

export const createEmployee = async (employee) => {
  const newEmployee = await Employee.create(employee);

  return newEmployee;
};

// posting a sample to Database
// const employee = new Employee({
//   firstName: "Afshin",
//   lastName: "Sharifnia",
//   email: " afshin.sharifnia@gmail.com",
// });

// console.log("Employee info sent to database");

// employee.save();
