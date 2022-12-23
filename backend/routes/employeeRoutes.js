import { Router } from "express";
import { createEmployee } from "../models/employeeModels";

const router = Router();

router.post("/", (req, res) => {
  const employee = req.body;
  const newEmployee = createEmployee(employee);
  res.send(newEmployee);
});

export default router;
