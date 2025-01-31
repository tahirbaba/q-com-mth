// src/app/branches/page.tsx
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Branches = () => {
  const branches = [
    { 
      name: 'Gulshan-e-Iqbal Town', 
      location: 'Karachi', 
      address: '123 Gulshan-e-Iqbal, Karachi, Pakistan', 
      contact: '+92 300 1234567'
    },
    { 
      name: 'PECHS', 
      location: 'Karachi', 
      address: '456 PECHS, Karachi, Pakistan', 
      contact: '+92 300 2345678'
    },
    { 
      name: 'Gulistan-e-Johar', 
      location: 'Karachi', 
      address: '789 Gulistan-e-Johar, Karachi, Pakistan', 
      contact: '+92 300 3456789'
    },
    { 
      name: 'DHA', 
      location: 'Karachi', 
      address: '101 DHA, Karachi, Pakistan', 
      contact: '+92 300 4567890'
    },
    { 
      name: 'Lyari Town', 
      location: 'Karachi', 
      address: '112 Lyari Town, Karachi, Pakistan', 
      contact: '+92 300 5678901'
    },
    { 
      name: 'Korangi Town', 
      location: 'Karachi', 
      address: '123 Korangi Town, Karachi, Pakistan', 
      contact: '+92 300 6789012'
    },
    { 
      name: 'Orangi Town', 
      location: 'Karachi', 
      address: '134 Orangi Town, Karachi, Pakistan', 
      contact: '+92 300 7890123'
    },
    { 
      name: 'Landi Town', 
      location: 'Karachi', 
      address: '145 Landi Town, Karachi, Pakistan', 
      contact: '+92 300 8901234'
    },
    { 
      name: 'Shah Faisal Town', 
      location: 'Karachi', 
      address: '156 Shah Faisal Town, Karachi, Pakistan', 
      contact: '+92 300 9012345'
    },
    { 
      name: 'Saadi Town (Head Office)', 
      location: 'Karachi', 
      address: '789 Saadi Town, Karachi, Pakistan', 
      contact: '+92 300 0123456',
      isHeadOffice: true
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
        <br />
        <Navbar />
      <h1 className="text-4xl font-semibold text-center mb-8">Our Branches in Karachi</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {branches.map((branch, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-semibold text-green-600">{branch.name}</h2>
            <p className="text-lg text-gray-600 mt-2">{branch.location}</p>
            <p className="text-sm text-gray-500 mt-2">{branch.address}</p>
            <p className="text-sm text-gray-500 mt-2">Contact: {branch.contact}</p>
            
            {branch.isHeadOffice && (
              <p className="mt-2 text-sm text-red-500 font-semibold">Head Office</p>
            )}

            <Link href="#" className="mt-4 inline-block bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition duration-300">
              Visit Branch
            </Link>
          </div>
        ))}
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default Branches;
