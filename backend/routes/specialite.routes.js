
import express from 'express';
import { getAllSpecialites } from '../controllers/specialite.controller.js';

const router = express.Router();

router.get('/', getAllSpecialites);

export default router;
