// src/app/page.tsx
import React from 'react';
import Link from 'next/link';
import '../styles/global.css';
import Navbar from '@/components/Navbar';
import Footer from '../components/Footer';
import About from './about/page';


const Home = () => {
  return (
    <div className="container mx-auto px-4">
    <Navbar />
      {/* Hero Section */}
      <section
  className="text-center py-16 text-white rounded-lg shadow-lg"
  style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwM3x8fGVufDB8fHx8fA%3D%3D')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
        <h1 className="text-5xl font-extrabold">Welcome to Mandi To Home</h1>
        <p className="mt-4 text-lg">The freshest fruits and vegetables, delivered to your door!</p>
      </section>

      <section className="my-16">
  <h2 className="text-3xl font-bold text-center mb-8">Explore Our Categories</h2>
  <div className="flex flex-wrap justify-center gap-8">
    {/* Fruits Category */}
    <div
  className="w-800 bg-cover bg-center shadow-lg rounded-lg p-20 text-center hover:scale-105 transition duration-300"
  style={{ backgroundImage: "url('https://media.istockphoto.com/id/175176230/photo/fresh-fruits.webp?a=1&b=1&s=612x612&w=0&k=20&c=myYUviF56ZG2u6oOyX9lN-fvzach3eSqWj5ZEWJt2bk=')" }}
>
      <Link href="src/app/category/fruits">
        <div className="space-y-8 bg-yellow-100 bg-opacity-60 p-20 rounded-md">
          <h2 className="text-2xl font-semibold text-green-600">Fruits</h2>
          <p className="text-lg">Fresh and juicy fruits delivered straight to your home.</p>
        <Link href="/category/fruits">
          <button className="bg-green-600 text-white py-2 px-6 rounded-full">Shop Now</button> </Link>
        </div>
      </Link>
    </div>

    {/* Vegetables Category */}
    <div
      className="w-800 bg-cover bg-center shadow-lg rounded-lg p-20 text-center hover:scale-105 transition duration-300"
      style={{ backgroundImage: "url('https://media.istockphoto.com/id/1445991334/photo/hand-of-farmers-carrying-the-wooden-tray-full-of-freshly-pick-organics-vegetables-at-the.webp?a=1&b=1&s=612x612&w=0&k=20&c=4b-krGSBDk1EoifIPIzmzh5d2meJsofjKU5D__5U7dU=')" }}
    >
      <Link href="/category/vegetables">
        <div className="space-y-8 bg-green-100 bg-opacity-60 p-20 rounded-md">
          <h2 className="text-2xl font-semibold text-green-600">Vegetables</h2>
          <p className="text-lg">Fresh, organic vegetables directly to your kitchen.</p>
          <button className="bg-green-600 text-white py-2 px-6 rounded-full">Shop Now</button>
        </div>
      </Link>
    </div>
  </div>
</section>
<Footer />
    </div>
  );
};

export default Home;
