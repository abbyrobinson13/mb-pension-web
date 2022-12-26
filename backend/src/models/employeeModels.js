import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please add a name"],
  },
  lastName: {
    type: String,
    required: [true, "Please add a last name"],
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

// create employee
export async function createEmployee(employee) {
  await Employee.create(employee);
}
