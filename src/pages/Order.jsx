import { useState } from 'react';
import Orders from '../assets/Orders.json';
import AddOrderForm from '../components/AddOrderForm';

export default function OrderList() {
  const [orders, setOrders] = useState(Orders);
  const [showForm, setShowForm] = useState(false);

  const handleAddOrder = (newOrder) => {
    setOrders([newOrder, ...orders]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 p-8 font-sans">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 flex items-center justify-between">
        <h1 className="text-4xl font-bold text-gray-800">Daftar Pesanan</h1>
        <button
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg transition duration-300"
          onClick={() => setShowForm(true)}
        >
          Tambah Pesanan
        </button>
      </div>

      {/* Form tambah pesanan */}
      {showForm && (
        <AddOrderForm
          onAdd={(order) => {
            handleAddOrder(order);
            setShowForm(false);
          }}
          onCancel={() => setShowForm(false)}
        />
      )}

      {/* Daftar pesanan */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {orders.map((order) => (
          <div
            key={order.OrderID}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 p-6"
          >
            {/* Order ID & Customer */}
            <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">
              Order ID: {order.OrderID}
            </h2>
            <p className="text-center text-gray-600 mb-4">{order.CustomerName}</p>

            {/* Status badge */}
            <div className="flex justify-center mb-4">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  order.Status === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : order.Status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {order.Status}
              </span>
            </div>

            {/* Total Price */}
            <p className="text-center text-lg font-semibold text-gray-800 mb-2">
              $ {order.TotalPrice}
            </p>

            {/* Order Date */}
            <p className="text-center text-sm text-gray-500 mb-4">
              Tanggal: {order.Date}
            </p>

            {/* Button detail */}
            <div className="flex justify-center">
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md transition duration-300">
                Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}