import express from "express";
import { createEmployee, getAllEmployees, getEmployeeById } from "../models/employeeModels.js";

export const employeeRouter = express.Router();

employeeRouter.post("/", async (req, res) => {
  const employee = req.body;
  try {
    const newEmployee = await createEmployee(employee);
    res.send(newEmployee);
  } catch (error) {
    res.status(500).send(error);
  }
});

employeeRouter.get("/", async (req, res) => {
  try {
    const employees = await getAllEmployees();
    res.send(employees);
  } catch (error) {
    res.status(500).send(error);
  }
});

//identify an employee by ID
employeeRouter.get("/:id", async (req, res) => {
  const id = req.params.id
  try {
    const employee = await getEmployeeById();
    if (!employee){
      return res.status(404).send('Invalid employee id');
    }
    res.send(employee);
  } catch (error) {
    res.status(500).send(error);
  }
});