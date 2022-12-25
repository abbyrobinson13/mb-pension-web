import { createEmployee } from "./db/models/employeeModel.js";

import myConfig from "dotenv";

myConfig.config();

const addEmployeeToDatabase = async (employee) => {
  const newEmployee = await createEmployee(employee);

  console.log(newEmployee);
};
const emplyeeSample = {
  firstName: " Mike",
  lastname: "Johnson",
  email: "you@test.com",
};

addEmployeeToDatabase();
