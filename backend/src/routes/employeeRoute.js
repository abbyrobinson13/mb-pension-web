import express from 'express';
import { Router } from 'express';
import emailNewEmployee from '../../config/emailNewEmployee.js';
import {
  createEmployee,
  deleteEmployee,
  getAllEmployees,
  getEmployeeByEmail,
  getEmployeeById,
  updateByEmail,
  updateEmployee,
  updateByAuthId
} from '../models/employeeModels.js';

const router = Router();

router.post('/', async (req, res) => {
  const employee = req.body;
  try {
    const newEmployee = await createEmployee(employee);
    res.send(newEmployee);
    emailNewEmployee(newEmployee);
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

router.get('/byEmail/:email', async (req, res) => {
  console.log('email check');
  const email = req.params.email;
  console.log(email);
  try {
    const employee = await getEmployeeByEmail(email);
    console.log(employee);
    if (!employee) { 
      return res.status(404).send('Invalid employee email');
    }
    res.send(employee);
  } catch (error) {
    console.log(error);
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

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const employeeValues = req.body;
  try {
    const updatedEmployee = await updateEmployee(id, employeeValues);
    console.log('updatedEmployee is', updateEmployee);
    res.send(updatedEmployee);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const deletedEmployee = await deleteEmployee(id);
    console.log('deletedEmployee is', deleteEmployee);
    res.send(deletedEmployee);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/byAuthId/:id', async (req, res) => {
  console.log('update by Id endpoint reached');
  const id = req.params.id;
  const employeeValues = req.body;
  try {
    const updatedEmployee = await updateByAuthId(id, employeeValues);
    console.log('updatedEmployee is', updatedEmployee);
    res.send(updatedEmployee);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/byEmail/:email', async (req, res) => {
  console.log('update by email endpoint reached');
  const email = req.params.email;
  const employeeValues = req.body;
  console.log(email);
  try {
    const employee = await updateByEmail(email, employeeValues);
    console.log(employee);
    if (employee) {
      res.send(employee);
    } else {
      res.status(500).send('Invalid email');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

export default router;
