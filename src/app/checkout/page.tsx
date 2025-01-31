"use client"
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
// src/app/checkout/page.tsx
import { useState } from 'react';

const Checkout = () => {
  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingDetails({
      ...shippingDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Order placed successfully!');
  };

  return (
    <div className="container mx-auto px-4 py-16">
        <Navbar /><br />
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Order Summary */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Order Summary</h2>
          <div className="space-y-6">
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Subtotal</span>
              <span className="font-medium text-gray-700">$50.00</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Shipping</span>
              <span className="font-medium text-gray-700">$5.00</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Total</span>
              <span className="font-medium text-gray-700">$55.00</span>
            </div>
          </div>
        </div>

        {/* Shipping Information Form */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Shipping Information</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={shippingDetails.name}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-600">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter your address"
                value={shippingDetails.address}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-600">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Enter your city"
                value={shippingDetails.city}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
              />
            </div>
            <div>
              <label htmlFor="zip" className="block text-sm font-medium text-gray-600">
                ZIP Code
              </label>
              <input
                type="text"
                id="zip"
                name="zip"
                placeholder="Enter your zip code"
                value={shippingDetails.zip}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={shippingDetails.phone}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Place Order
            </button>
          </form>
        </div>
      </div> <br />
      <Footer />
    </div>
  );
};

export default Checkout;
