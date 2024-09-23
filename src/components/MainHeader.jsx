import React, { useState } from 'react';
import logo from "../../public/images/logo.png";
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md w-full">
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="#">
            <img src={logo} alt="" className=' w-[40%]' />
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 md:items-center md:text-2xl">
            <NavLink to="/" className={({isActive})=> `${isActive? " duration-200 text-red-500" : "text-black" }` } >Home</NavLink>


            <NavLink to="/about" className={({isActive})=> `${isActive? " duration-200 text-red-500" : "text-black" }` } >About</NavLink>


            <NavLink to="/services" className={({isActive})=> `${isActive? " duration-200 text-red-500" : "text-black" }` } >Services</NavLink>

            <NavLink to="/contact" className={({isActive})=> `${isActive? " duration-200 text-red-500" : "text-black" }` } >Contact</NavLink>

            <a href="#">
            <button className=' bg-red-600 text-white rounded p-3 '>+91 8826961363</button></a>
          
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
           <NavLink to="/" onClick={()=> setIsOpen(false)} className={ ({isActive})=> ` duration-200${isActive? " block duration-200 text-red-500" : "text-black block" }` } >Home</NavLink>


            <NavLink to="/about" onClick={()=> setIsOpen(false)} className={ ({isActive})=> ` duration-200${isActive? " block duration-200 text-red-500" : "text-black block" }` } >About</NavLink>


            <NavLink to="/services" onClick={()=> setIsOpen(false)} className={ ({isActive})=> ` duration-200 ${isActive? " block duration-200 text-red-500" : "text-black block" }` } >Services</NavLink>

            <NavLink to="/contact" onClick={()=> setIsOpen(false)} className={ ({isActive})=> ` duration-200 ${isActive? " block duration-200 text-red-500" : "text-black block" }` } >Contact</NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
