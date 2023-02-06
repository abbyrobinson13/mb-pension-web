import Router from 'express';
import { getAllContent, createContent } from '../models/contentModel.js';

const router = Router();

//This route will get all employees
router.get('/', async (req, res) => {
  try {
    const content = await getAllContent();
    console.log('content sent');
    res.send(content);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/', async (req, res) => {
  const content = req.body;
  try {
    const newContent = await createContent(content);
    res.send(newContent);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

export default router;
