import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Import menu icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/50 backdrop-blur-lg shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link className="text-2xl font-extrabold hover:text-cyan-400" to={'/'}>
          TF'25
        </Link>

        {/* Hamburger Icon */}
        <button
          className="text-2xl text-cyan-400 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:space-x-6 text-lg flex-grow flex flex-col md:flex-row justify-center items-center md:static w-full md:w-auto bg-gray-900/90 md:bg-transparent shadow-lg md:shadow-none p-4 md:p-0`}
        >
          <Link
            to={'/events'}
            className="block md:inline-block hover:text-cyan-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Events
          </Link>
          <Link
            to={'/teams'}
            className="block md:inline-block hover:text-cyan-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Teams
          </Link>
          <Link
            to={'/competitions'}
            className="block md:inline-block hover:text-cyan-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Competitions
          </Link>
          <Link
            to={'/about'}
            className="block md:inline-block hover:text-cyan-400 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </div>

        {/* Right Side Buttons */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex space-x-4 mt-3 md:mt-0`}
        >
          <Link
            to={'/login'}
            className="text-black px-4 py-2 bg-cyan-500/80 hover:bg-cyan-400 rounded-lg transition"
          >
            Login
          </Link>
          <Link
            to={'/auth'}
            className="text-black px-4 py-2 bg-cyan-500/80 hover:bg-cyan-400 rounded-lg transition"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
