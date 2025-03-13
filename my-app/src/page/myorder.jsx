import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('/api/orders/my-orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders(); 
  }, []);

  if (loading) return <p>Loading your orders...</p>;

  if (orders.length === 0) return <p>No orders yet.</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>
      {orders.map(order => (
        <div key={order._id} className="border rounded-2xl p-4 mb-4 shadow-md">
          <p><strong>Order ID:</strong> {order._id}</p>
          <p><strong>Total Price:</strong> ${order.totalPrice}</p>
          <p><strong>Delivery Address:</strong> {order.deliveryAddress}</p>
          <ul>
            {order.products.map(product => (
              <li key={product._id}>{product.name} - ${product.price} x {product.quantity}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default OrdersPage;
