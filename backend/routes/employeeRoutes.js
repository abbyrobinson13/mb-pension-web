import { Router } from "express";
import { createEmployee } from "../models/employeeModels";

const router = Router();

router.post("/", async (req, res) => {
  const employee = req.body;
  try {
    const newEmployee = await createEmployee(employee);
    res.send(newEmployee);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

export default router;
