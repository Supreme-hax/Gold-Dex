'use client';
import { useEffect, useState } from 'react';
import { api } from '../../../services/api';

export default function AdminSettings() {
  const [settings, setSettings] = useState<any>({});
  useEffect(() => {
    api.get('/admin/settings').then(res => setSettings(res.data.data || {}));
  }, []);
  const update = async () => {
    await api.put('/admin/settings', settings);
    alert('Updated');
  };
  return (
    <div>
      <h1>Settings</h1>
      <pre>{JSON.stringify(settings, null, 2)}</pre>
      <button onClick={update}>Update</button>
    </div>
  );
}
