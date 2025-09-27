'use client';
import { useEffect, useState } from 'react';
import { api } from '../../../services/api';

export default function AdminUsers() {
  const [users, setUsers] = useState<any[]>([]);
  useEffect(() => {
    api.get('/admin/users').then(res => setUsers(res.data.data || []));
  }, []);
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.email} - {u.status}</li>
        ))}
      </ul>
    </div>
  );
}
