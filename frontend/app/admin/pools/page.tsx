'use client';
import { useEffect, useState } from 'react';
import { api } from '../../../services/api';

export default function AdminPools() {
  const [pools, setPools] = useState<any[]>([]);
  useEffect(() => {
    api.get('/admin/pools').then(res => setPools(res.data.data || []));
  }, []);
  return (
    <div>
      <h1>Pools</h1>
      <ul>
        {pools.map(p => (
          <li key={p.id}>{p.name} - {p.status}</li>
        ))}
      </ul>
    </div>
  );
}
