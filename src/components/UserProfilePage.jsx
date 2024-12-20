import React from "react";

const UserProfilePage = ({ user, onLogout }) => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Profile</h1>
        <p className="text-gray-600">
          Manage your account information and view your order history.
        </p>
      </div>

      {/* User Details */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Personal Information
        </h2>
        <div className="space-y-4">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Address:</strong> {user.address}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
        </div>
      </div>

      {/* Order History */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Order History
        </h2>
        {user.orders.length > 0 ? (
          <ul className="space-y-4">
            {user.orders.map((order, index) => (
              <li key={index} className="bg-gray-50 p-4 rounded-lg">
                <p>
                  <strong>Order ID:</strong> {order.id}
                </p>
                <p>
                  <strong>Date:</strong> {order.date}
                </p>
                <p>
                  <strong>Total:</strong> ${order.total}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">You have no orders yet.</p>
        )}
      </div>

      {/* Logout Button */}
      <button
        onClick={onLogout}
        className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default UserProfilePage;
