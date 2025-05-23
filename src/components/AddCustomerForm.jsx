import { useState } from 'react';

export default function AddCustomerForm({ onAdd }) {
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loyalty, setLoyalty] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCustomer = {
      CustomerID: Date.now().toString(), // contoh ID otomatis
      CustomerName: customerName,
      Email: email,
      Phone: phone,
      Loyalty: loyalty,
    };
    onAdd(newCustomer);
    // Reset form
    setCustomerName('');
    setEmail('');
    setPhone('');
    setLoyalty('');
  };
  
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md mb-8">
      <h2 className="text-2xl font-semibold mb-4">Tambah Customer Baru</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nama Customer"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
          className="border rounded-lg p-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border rounded-lg p-2"
        />
        <input
          type="text"
          placeholder="Telepon"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="border rounded-lg p-2"
        />
        <input
          type="text"
          placeholder="Loyalty"
          value={loyalty}
          onChange={(e) => setLoyalty(e.target.value)}
          className="border rounded-lg p-2"
        />

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition"
        >
          Tambahkan Customer
        </button>
      </form>
    </div>
  );
}