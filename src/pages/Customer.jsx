// pages/CustomerList.jsx
import { useState } from 'react';
import Customers from '../assets/Customers.json'; // Pastikan path ini sesuai lokasi file json
import AddCustomerForm from '../components/AddCustomerForm'; // Pastikan path ini sesuai

export default function CustomerList() {
  const [customers, setCustomers] = useState(Customers);
  const [showForm, setShowForm] = useState(false);

  const handleAddCustomer = (newCustomer) => {
    setCustomers([newCustomer, ...customers]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 flex items-center justify-between">
        <h1 className="text-4xl font-bold text-gray-800">Daftar Customer</h1>
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg transition"
          onClick={() => setShowForm(true)}
        >
          Add Data
        </button>
      </div>

      {/* Form tambah customer */}
      {showForm && (
        <div className="max-w-xl mx-auto mb-8">
          <AddCustomerForm
            onAdd={(customer) => {
              handleAddCustomer(customer);
              setShowForm(false);
            }}
            onCancel={() => setShowForm(false)}
          />
        </div>
      )}

      {/* Daftar pelanggan */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {customers.map((item) => (
          <div
            key={item.CustomerID}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition transform hover:-translate-y-1"
          >
            {/* Avatar */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center font-semibold text-xl text-gray-400">
                {item.CustomerName.charAt(0).toUpperCase()}
              </div>
            </div>
            {/* ID dan Nama */}
            <h2 className="text-xl font-semibold text-center mb-2 text-gray-700">
              {item.CustomerID}
            </h2>
            <p className="text-center mb-4 text-gray-600">{item.CustomerName}</p>
            {/* Info Kontak */}
            <div className="divide-y-2 divide-gray-200 py-2">
              <p className="text-sm text-gray-500 mb-2">
                <span className="font-semibold">Email:</span> {item.Email}
              </p>
              <p className="text-sm text-gray-500 mb-2">
                <span className="font-semibold">Telepon:</span> {item.Phone}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Loyalty:</span> {item.Loyalty}
              </p>
            </div>
            {/* Button detail */}
            <div className="flex justify-center mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                Selengkapnya
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}