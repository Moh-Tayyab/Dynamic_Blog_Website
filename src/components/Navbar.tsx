'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useState } from "react";



const Navbar = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  console.log(searchValue);

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <Image
        src="/techtail1.png"
        alt="TechTales"
        width={120} 
        height={100}

        />
      </div>
      
      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-96">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="bg-transparent w-full outline-none text-gray-600"
        />
        <button className="flex items-center justify-center w-8 h-8 bg-pink-500 rounded-full">
          <svg className="text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
            <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2c-5.523 0-10-4.477-10-10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm8.485 3.071a1 1 0 0 1-1.415 0l-4.243-4.243a1 1 0 1 1 1.414-1.414l4.243 4.243a1 1 0 0 1 0 1.414z"/>
          </svg>
       </button>
      </div>

      {/* Menu Items */}
      <div className="flex items-center space-x-6 text-gray-800">
        
        <div className='justify-start items-start flex gap-5'>
        <Link href={'/'} className=' hover:bg-gray-500 rounded-full px-4 py-2'>
        Home
        </Link>
        <Link href={'/articles'} className='hover:bg-gray-500 rounded-full px-4 py-2 '>
        Articles
        </Link>
        <Link href={'/about'} className='hover:bg-gray-500 rounded-full px-4 py-2'>
        About
        </Link>
        </div>  
        <span >Sign up</span>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-full">Log in</button>
      </div>
    </nav>
  );
};

export default Navbar;
