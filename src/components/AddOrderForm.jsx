import { useState } from 'react';

export default function AddOrderForm({ onAdd }) {
  const [orderID, setOrderID] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [status, setStatus] = useState('Pending'); // Default status
  const [total, setTotal] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      OrderID: orderID || Date.now().toString(), // id otomatis jika kosong
      CustomerName: customerName,
      Status: status,
      Total: parseFloat(total),
      Date: date,
    };
    onAdd(newOrder);
    // Reset form
    setOrderID('');
    setCustomerName('');
    setStatus('Pending');
    setTotal('');
    setDate('');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md mb-8">
      <h2 className="text-2xl font-semibold mb-4">Tambah Order Baru</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Order ID (Kosongkan jika otomatis)"
          value={orderID}
          onChange={(e) => setOrderID(e.target.value)}
          className="border rounded-lg p-2"
        />
        <input
          type="text"
          placeholder="Nama Customer"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
          className="border rounded-lg p-2"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border rounded-lg p-2"
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <input
          type="number"
          placeholder="Total Price"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
          required
          className="border rounded-lg p-2"
        />
        <input
          type="date"
          placeholder="Order Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="border rounded-lg p-2"
        />

        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg transition"
        >
          Tambahkan Order
        </button>
      </form>
    </div>
  );
}