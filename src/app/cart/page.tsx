"use client"
// src/app/cart/page.tsx
import { useState } from 'react';
import CartItem from '../../components/CartItem';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Apple',
      imageUrl: 'https://images.unsplash.com/photo-1631542206925-d4f518cad9cf?w=500&auto=format&fit=crop&q=60',
      price: 3.0,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Banana',
      imageUrl: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&auto=format&fit=crop&q=60',
      price: 1.5,
      quantity: 3,
    },
  ]);

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleIncreaseQuantity = (id: number) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecreaseQuantity = (id: number) => {
    setCartItems(cartItems.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <Navbar /><br />
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-lg text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              imageUrl={item.imageUrl}
              price={item.price}
              quantity={item.quantity}
              onRemoveItem={handleRemoveItem}
              onIncreaseQuantity={handleIncreaseQuantity}
              onDecreaseQuantity={handleDecreaseQuantity}
            />
          ))}
          <div className="flex justify-between items-center bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800">Total Price</h2>
            <p className="text-2xl font-bold text-gray-800">{`$${getTotalPrice().toFixed(2)}`}</p>
          </div>
          <div className="mt-8 text-center">
          <Link
    href="/checkout">
    <button className="bg-green-600 text-white py-3 px-8 rounded-full text-xl hover:bg-green-700">
              Proceed to Checkout
            </button></Link>
          </div>
        </div>
      )}
      <br />
      <Footer />
    </div>
  );
};

export default Cart;
