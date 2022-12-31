import express from "express";
import { createEmployee, getAllEmployees } from "../models/employeeModels.js";

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
