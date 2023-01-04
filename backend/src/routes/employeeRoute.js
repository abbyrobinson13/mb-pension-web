import express from 'express';
import { Router } from 'express';
import {
  createEmployee,
  getAllEmployees,
  getEmployeeById
} from '../models/employeeModels.js';

const router = Router();

router.post('/', async (req, res) => {
  const employee = req.body;
  try {
    const newEmployee = await createEmployee(employee);
    res.send(newEmployee);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
router.get('/', async (req, res) => {
  try {
    const employees = await getAllEmployees();
    res.send(employees);
  } catch (error) {
    res.status(500).send(error);
  }
});

//identify an employee by ID
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const employee = await getEmployeeById(id);
    if (!employee) {
      return res.status(404).send('Invalid employee id');
    }
    res.send(employee);
  } catch (error) {
    res.status(500).send(error);
  }
});
export default router;
