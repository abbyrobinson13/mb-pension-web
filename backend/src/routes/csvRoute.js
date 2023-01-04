import express from 'express';
import csvtojson from 'csvtojson';
import { Employee } from '../models/employeeModels.js';

export const csvRouter = express.Router();

csvRouter.post('/add', async (req, res) => {
  csvtojson()
    .fromFile('EmployeeTemplateSample1.csv')
    .then((csvData) => {
      console.log(csvData);
      Employee.insertMany(csvData)
        .then(function () {
          console.log('Data inserted');
          res.json({ success: 'success' });
        })
        .catch(function (error) {
          console.log(error);
        });
    });
});
