'use client';
import { useState } from 'react';
import { api } from '../../services/api';

export default function WithdrawPage() {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const submit = async () => {
    try {
      await api.post('/withdrawals', { amount: parseFloat(amount), recipient });
      alert('Withdrawal requested');
    } catch (e: any) {
      alert('Error: ' + e.message);
    }
  };
  return (
    <div>
      <h1>Withdraw</h1>
      <input value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount" />
      <input value={recipient} onChange={e => setRecipient(e.target.value)} placeholder="Recipient" />
      <button onClick={submit}>Submit</button>
    </div>
  );
}
