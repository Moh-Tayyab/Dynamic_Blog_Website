'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle menu toggle

  return (
    <header className="bg-white shadow-md">
      {/* Main Navbar */}
      <nav className="flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Image src="/logo3.png" alt="TechTales" width={120} height={100} 
          />     
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-md"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Search Bar */}
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-96">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent w-full outline-none text-gray-600"
            />
            <button className="flex items-center justify-center w-8 h-8 bg-cyan-500  hover:bg-purple-400 rounded-full">
              <svg
                className="text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
              >
                <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2c-5.523 0-10-4.477-10-10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm8.485 3.071a1 1 0 0 1-1.415 0l-4.243-4.243a1 1 0 1 1 1.414-1.414l4.243 4.243a1 1 0 0 1 0 1.414z" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-6 text-gray-800">
            <Link href="/" className="hover:bg-cyan-500 rounded-full px-4 py-2">
              Home
            </Link>
            <Link
              href="/blog"
              className="hover:bg-cyan-500 rounded-full px-4 py-2"
            >
              Articles
            </Link>
            <Link
              href="/"
              className="hover:bg-cyan-500 rounded-full px-4 py-2"
            >
              About
            </Link>
            <span>Sign up</span>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-full">
              Log in
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-2 bg-white px-4 pb-4 shadow-md">
          <Link
            href="/"
            className="text-gray-800 hover:bg-cyan-500 px-4 py-2 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="text-gray-800 hover:bg-cyan-500 px-4 py-2 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Articles
          </Link>
          <Link
            href="/"
            className="text-gray-800 hover:bg-cyan-500 px-4 py-2 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-800 hover:bg-cyan-500 px-4 py-2 rounded-md"
          >
            Sign up
          </button>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="bg-gray-800 text-white px-4 py-2 rounded-full"
          >
            Log in
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
