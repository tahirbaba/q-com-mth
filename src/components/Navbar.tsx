// src/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-green-500 text-black shadow-lg py-8 p-6">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">Mandi To Home</Link>
        </div>
        <div className="flex justify-center py-4 space-x-4">
  <Link
    href="/about"
    className="hover:text-gray-700 transition duration-300 text-lg font-medium mx-4"
  >
    About
  </Link>
  <Link
    href="/cart"
    className="hover:text-gray-700 transition duration-300 text-lg font-medium mx-4"
  >
    Cart
  </Link>
  <Link
    href="/contact"
    className="hover:text-gray-700 transition duration-300 text-lg font-medium mx-4"
  >
    Contact
  </Link>
  <Link
    href="/branches"
    className="hover:text-gray-700 transition duration-300 text-lg font-medium mx-4"
  >
    Branches
  </Link>
</div>
      </div>
    </nav>
  );
};

export default Navbar;
