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

export const Employee = mongoose.model("Employee", employeeSchema);

//Create a new employee 
export const createEmployee = async (employee) => {

  const newEmployee = await Employee.create(employee);

  return newEmployee;
};
