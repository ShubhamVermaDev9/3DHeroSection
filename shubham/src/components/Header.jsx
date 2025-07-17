import React from 'react';
import 'boxicons/css/boxicons.min.css';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      {/* Logo or Name */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-light m-0">
        Shubham Verma
      </h1>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-12">
        <a className="text-base tracking-wider transition-colors hover:text-gray-500 z-50" href="#">
          HOME
        </a>
        <a className="text-base tracking-wider transition-colors hover:text-gray-500 z-50" href="#">
          PROJECT
        </a>
        <a className="text-base tracking-wider transition-colors hover:text-gray-500 z-50" href="#">
          SKILL
        </a>
        <a className="text-base tracking-wider transition-colors hover:text-gray-500 z-50" href="#">
          CONTACT
        </a>
      </nav>

      {/* Sign In Button (visible on md and up) */}
      <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-0 font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50">
        SIGN IN
      </button>

      {/* Mobile Menu Icon */}
      <button className="md:hidden text-3xl p-2 z-50">
        <i className="bx bx-menu"></i>
      </button>
    </header>
  );
};

export default Header;