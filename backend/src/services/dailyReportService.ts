import { prisma } from '../utils/database';

class DailyReportService {
  async create(date: Date, data: { deposits: number; withdrawals: number; trades: number; income: number }) {
    return prisma.dailyReport.upsert({ where: { date }, update: data, create: { date, ...data } });
  }
  async list(limit = 30) {
    return prisma.dailyReport.findMany({ orderBy: { date: 'desc' }, take: limit });
  }
}

export const dailyReportService = new DailyReportService();
export default dailyReportService;
