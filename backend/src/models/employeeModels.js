import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  gender: {
    type: String
  },
  dateOfBirth: {
    type: String
  },

  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true
  },
  department: {
    type: String
  },
  position: {
    type: String
  },
  employmentDate: {
    type: String
  },
  dependents: {
    type: String
  },
  mobile: {
    type: String
  },
  street: {
    type: String
  },
  postalCode: {
    type: String
  },
  city: {
    type: String
  },
  province: {
    type: String
  },
  policyNumber: {
    type: String
  },
  employeeNumber: {
    type: String
  },
  authId:{
    type: String
  },
  reasonForTreatment: {
    type: String
  },
  areasOfConcern: {
    type: String
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
  console.log('trying to get employee', id);
  const employee = await Employee.findById(id);
  return employee;
};

export const getEmployeeByEmail = async (email) => {
  console.log('trying to get employee', email);
  const employee = await Employee.findOne({ email });
  return employee;
};

//edit/update employee
export const updateEmployee = async (id, employeeValues) => {
  const updatedEmployee = await Employee.findOneAndUpdate(
    { _id: id },
    employeeValues
  );
  return updatedEmployee;
};

//delete an employee
export const deleteEmployee = async (id) => {
  const deletedEmployee = await Employee.findByIdAndDelete(id);
  return deletedEmployee;
};

export const updateByAuthId = async (id, employeeValues) => {
  const updatedEmployee = await Employee.findOneAndUpdate(
    { authid: id },
    employeeValues
  );
  return updatedEmployee;
};

export const updateByEmail = async (emails, employeeValues) => {
  console.log('theemail', emails);
  console.log(typeof emails);
  console.log('the value', employeeValues);
  const updatedEmployee = await Employee.findOneAndUpdate(
    { email: emails },
    employeeValues,
    { new: true }
  );
  console.log('updated employ', updatedEmployee);
  return updatedEmployee;
};
