import Router from 'express';
import { getAllBenefits, createBenefits } from '../models/benefitsModel.js';

const router = Router();


router.get('/', async (req, res) => {
  try {
    const benefits = await getAllBenefits();
    console.log('benefits sent');
    res.send(benefits);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/', async (req, res) => {
  const benefits = req.body;
  try {
    const newBenefits = await createBenefits(benefits);
    res.send(newBenefits);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

export default router;
