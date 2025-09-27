'use client';
import { useEffect, useState } from 'react';
import { api } from '../../../services/api';

export default function AdminDashboard() {
  const [stats, setStats] = useState<any>({});
  useEffect(() => {
    api.get('/admin/dashboard').then(res => setStats(res.data.data || {}));
  }, []);
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <pre>{JSON.stringify(stats, null, 2)}</pre>
    </div>
  );
}
