import express from "express";
import {createEmployee} from "../models/employeeModels.js";


export const employeeRouter = express.Router();

employeeRouter.post("/", async (req, res) => {

  const employee = req.body;

  await createEmployee(employee);

  res.send();
});

