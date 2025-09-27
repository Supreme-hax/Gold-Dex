import express from 'express';
import { authenticateAdmin } from '../middleware/auth';
import dailyReportService from '../services/dailyReportService';

const router = express.Router();

router.get('/reports', authenticateAdmin, async (req, res) => {
  const reports = await dailyReportService.list();
  res.json({ success: true, data: reports });
});

export default router;
