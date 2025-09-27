'use client';
import { useState } from 'react';
import { api } from '../../services/api';

export default function TradePage() {
  const [amount, setAmount] = useState('');
  const [side, setSide] = useState<'BUY' | 'SELL'>('BUY');

  const submit = async () => {
    try {
      await api.post('/trades', { amount: parseFloat(amount), side });
      alert('Trade submitted');
    } catch (e: any) {
      alert('Error: ' + e.message);
    }
  };

  return (
    <div>
      <h1>Trade</h1>
      <select value={side} onChange={e => setSide(e.target.value as any)}>
        <option value="BUY">Buy Gold</option>
        <option value="SELL">Sell Gold</option>
      </select>
      <input value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount" />
      <button onClick={submit}>Submit</button>
    </div>
  );
}
