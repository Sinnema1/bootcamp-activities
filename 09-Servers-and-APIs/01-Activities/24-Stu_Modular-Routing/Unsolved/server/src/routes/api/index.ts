import feedbackRoutes from './feedbackRoutes.js';
import tipsRoutes from './tipsRoutes.js';
import express from 'express';
const router = express.Router();

router.use('/feedback', feedbackRoutes);
router.use('/tips', tipsRoutes);

export default router;
