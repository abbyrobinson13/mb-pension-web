import express from 'express';
import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import router from './routes/employeeRoute.js';
import { csvRouter } from './routes/csvRoute.js';
import contentRouter from './routes/contentRoute.js';
import benefitsRouter from './routes/benefitsRoute.js';

dotenv.config();
const app = express();

app.use(express.json());

app.use('/api/employee', router);
app.use('/api/csv', csvRouter);
app.use('/api/content', contentRouter);
app.use('/api/benefits', benefitsRouter);

const PORT = process.env.PORT || 4000;
connectDB();

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
