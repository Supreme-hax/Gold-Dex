'use client';
import { useEffect, useState } from 'react';
import { api } from '../../../services/api';

export default function AdminApprovals() {
  const [approvals, setApprovals] = useState<any[]>([]);
  useEffect(() => {
    api.get('/admin/approvals').then(res => setApprovals(res.data.data || []));
  }, []);
  return (
    <div>
      <h1>Approvals</h1>
      <ul>
        {approvals.map(a => (
          <li key={a.id}>{a.type} - {a.status}</li>
        ))}
      </ul>
    </div>
  );
}
