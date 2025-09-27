'use client';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

export default function ReceiptsPage() {
  const [receipts, setReceipts] = useState<any[]>([]);

  useEffect(() => {
    api.get('/receipts').then(res => setReceipts(res.data.data || []));
  }, []);

  return (
    <div>
      <h1>Receipts</h1>
      <ul>
        {receipts.map(r => (
          <li key={r.id}>
            {r.type} - {r.createdAt}
          </li>
        ))}
      </ul>
    </div>
  );
}
