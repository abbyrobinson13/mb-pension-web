import { Router } from "express";
import { createEmployee } from "../models/employeeModels.js";


const employeeRouter = Router();


employeeRouter.post("/employee", (req, res) => {

  const employee = req.body;

  try {
    const newEmployee = createEmployee(employee);
    
    res.send(newEmployee);

  } catch (error) {
    console.log(error);
    res.status(500).send(error);

  }

});

// app.use("/employee",employeeRouter)

export default employeeRouter



