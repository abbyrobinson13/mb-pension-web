import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
   
  },
  lastName: {
    type: String,
 
  },
  gender: {
    type: String,
    
  },
  DateOfBirth: {
    type: String,
    
  },

  email: {
    type: String,
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

 //get an employee by Id
 export const getEmployeeById = async (id) => {
  const employee = await Employee.findById();
  return employee;
};