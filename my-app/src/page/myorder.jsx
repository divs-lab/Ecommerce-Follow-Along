import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('/api/orders/my-orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="space-y-4">
          {orders.map(order => (
            <div key={order._id} className="border p-4 rounded-xl shadow-md bg-white">
              <h2 className="text-lg font-semibold">Order ID: {order._id}</h2>
              <p>Order Date: {new Date(order.createdAt).toLocaleDateString()}</p>
              <p>Total Price: ${order.totalPrice}</p>
              <p>Delivery Address: {order.deliveryAddress}</p>
              <ul className="list-disc pl-5">
                {order.products.map(product => (
                  <li key={product._id}>{product.name} - {product.quantity} pcs</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;