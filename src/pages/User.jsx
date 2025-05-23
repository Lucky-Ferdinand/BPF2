import React, { useEffect, useState } from 'react';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data.users); // Assuming the API returns an object with a 'users' array
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto bg-white p-6 rounded-xl shadow-md mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-center">User  List</h2>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-3 text-left">No</th>
            <th className="border border-gray-300 p-3 text-left">First Name</th>
            <th className="border border-gray-300 p-3 text-left">Last Name</th>
            <th className="border border-gray-300 p-3 text-left">Email</th>
            <th className="border border-gray-300 p-3 text-left">Username</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} className={`hover:bg-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
              <td className="border border-gray-300 p-3">{index + 1}</td>
              <td className="border border-gray-300 p-3">{user.firstName}</td>
              <td className="border border-gray-300 p-3">{user.lastName}</td>
              <td className="border border-gray-300 p-3">{user.email}</td>
              <td className="border border-gray-300 p-3">{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
