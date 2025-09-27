import express from 'express';
import { prisma } from '../utils/database';

const router = express.Router();

router.get('/health', async (req, res) => {
  try {
    await prisma.$queryRaw\`SELECT 1\`;
    res.json({ status: 'ok', db: 'connected' });
  } catch {
    res.status(500).json({ status: 'error', db: 'disconnected' });
  }
});

export default router;
