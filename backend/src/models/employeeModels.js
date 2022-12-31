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
  gender: {
    type: String,
    required: [true, "Please add a gender"],
  },
  birthDate: {
    type: String,
    required: [true, "Please add a birthdate"],
  },
  department: {
    type: String,
    required: [true, "Please add a department"],
  },
  position: {
    type: String,
    required: [true, "Please add a position"],
  },
  employmentDate: {
    type: String,
    required: [true, "Please add a start date of employment"],
  },
  dependents: {
    type: String,
    required: [true, "Please add the number of dependents"],
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    unique: true,
  },
  mobile: {
    type: String,
    required: [true, "Please add a mobile number"],
  },
  street: {
    type: String,
    required: [true, "Please add a street name"],
  },
  postalCode: {
    type: String,
    required: [true, "Please add a postal code"],
  },
  city: {
    type: String,
    required: [true, "Please add a city"],
  },
  province: {
    type: String,
    required: [true, "Please add a province"],
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

// create employee
export const createEmployee = async (employee) => {
  const newEmployee = await Employee.create(employee);
  return newEmployee;
};
