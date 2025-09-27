'use client';
import { useState } from 'react';
import { api } from '../../services/api';

export default function DepositPage() {
  const [amount, setAmount] = useState('');
  const submit = async () => {
    try {
      await api.post('/deposits', { amount: parseFloat(amount) });
      alert('Deposit requested');
    } catch (e: any) {
      alert('Error: ' + e.message);
    }
  };
  return (
    <div>
      <h1>Deposit</h1>
      <input value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount" />
      <button onClick={submit}>Submit</button>
    </div>
  );
}
