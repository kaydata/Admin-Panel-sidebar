// components/CollapsibleNavbar.jsx
"use client"
import Link from 'next/link';
import { useState } from 'react';

const CollapsibleNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-white text-xl font-bold">Real Estate</a>
          </div>
          <div className="hidden md:block">
            <Link href="#" className="text-white px-3 py-2">Home</Link>
            <Link href="#" className="text-white px-3 py-2">Properties</Link>
            <Link href="#" className="text-white px-3 py-2">About Us</Link>
            <Link href="#" className="text-white px-3 py-2">Contact</Link>
          </div>
          <div className="md:hidden flex">
            <button onClick={toggleNavbar} className="text-white p-2 focus:outline-none">
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <Link href="#" className="block text-white px-3 py-2">Home</Link>
          <Link href="#" className="block text-white px-3 py-2">Properties</Link>
          <Link href="#" className="block text-white px-3 py-2">About Us</Link>
          <Link href="#" className="block text-white px-3 py-2">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default CollapsibleNavbar;