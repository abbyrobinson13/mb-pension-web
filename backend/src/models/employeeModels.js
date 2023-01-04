import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please add a name']
  },
  lastName: {
    type: String,
    required: [true, 'Please add a last name']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true
  },
  department: {
    type: String,
    required: [true, 'Please add a place of work ']
  },
  birthDate: {
    type: String,
    required: [true, 'Please add a birthdate']
  }
});

export const Employee = mongoose.model('Employee', employeeSchema);

// create employee
export const createEmployee = async (employee) => {
  const newEmployee = await Employee.create(employee);
  return newEmployee;
};

//list all employees
export const getAllEmployees = async () => {
  const employees = await Employee.find();
  return employees;
};
