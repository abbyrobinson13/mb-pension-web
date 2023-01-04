import express from 'express';
import csvtojson from 'csvtojson';
import { Employee } from '../models/employeeModels.js';
import multer from 'multer';
export const csvRouter = express.Router();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
var upload = multer({ storage: storage });

csvRouter.post('/add', upload.single('file'), async (req, res) => {
  const fileName = req.body.fileName;
  console.log(req.file);
  console.log('filename', fileName);
  csvtojson()
    .fromFile('uploads/' + fileName)
    .then((csvData) => {
      console.log(csvData);
      Employee.insertMany(csvData)
        .then(function () {
          console.log('Data inserted');
          res.json({ success: 'success' });
        })
        .catch(function (error) {
          console.log(error);
          res.status(500).send(error);
        });
    });
});
