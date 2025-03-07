import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OrderConfirmation = () => {
  const [orderDetails, setOrderDetails] = useState({
    products: [],
    address: {},
    totalPrice: 0
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get('/api/order-details');
        setOrderDetails(response.data);
      } catch (error) {
        console.error('Error fetching order details:', error);
      }
    };

    fetchOrderDetails();
  }, []);

  const handlePlaceOrder = async () => {
    try {
      await axios.post('/api/orders', orderDetails);
      alert('Order placed successfully!');
      navigate('/order-success');
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Order Confirmation</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Products</h2>
        {orderDetails.products.map(product => (
          <div key={product.id} className="border p-2 rounded-lg mb-2">
            <h3 className="font-medium">{product.name}</h3>
            <p>Quantity: {product.quantity}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Delivery Address</h2>
        <p>{orderDetails.address.street}, {orderDetails.address.city}, {orderDetails.address.state}, {orderDetails.address.zip}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Total Price</h2>
        <p className="text-lg font-bold">${orderDetails.totalPrice}</p>
      </div>

      <button 
        onClick={handlePlaceOrder}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
        Place Order
      </button>
    </div>
  );
};

export default OrderConfirmation;

