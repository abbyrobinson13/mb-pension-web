import { Router } from "express";
import { createEmployee } from "../backend/db/models/employeeModel.js";

const router = Router();

router.post("/", async (request, response) => {
  const employee = request.body;
  try {
    const newEmployee = await createEmployee(employee);

    response.send(newEmployee);
  } catch (error) {
    response.status(500).send(error);
  }
});

export default router;
