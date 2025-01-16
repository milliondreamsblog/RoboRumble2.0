import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/70 backdrop-blur-lg shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-cyan-400">RR'24</div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-cyan-400 hover:text-yellow-400 transition"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 text-lg`}
        >
          <Link
            to="/the-vibe"
            className="hover:text-yellow-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            The Vibe
          </Link>
          <Link
            to="/whats-poppin"
            className="hover:text-yellow-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            What's Poppin'
          </Link>
          <Link
            to="/the-squad"
            className="hover:text-yellow-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            The Squad
          </Link>
          <Link
            to="/the-plug"
            className="hover:text-yellow-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            The Plug
          </Link>
        </div>

        {/* Register and Login Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            className="px-4 py-2 bg-cyan-500/80 hover:bg-cyan-400 rounded-lg transition"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
          <button
            className="px-4 py-2 bg-cyan-500/80 hover:bg-cyan-400 rounded-lg transition"
            onClick={() => navigate('/register')}
          >
            Register
          </button>
        </div>
      </div>

      {/* Mobile Buttons */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-3">
          <button
            className="w-full px-4 py-2 bg-cyan-500/80 hover:bg-cyan-400 rounded-lg transition"
            onClick={() => {
              setMenuOpen(false);
              navigate('/login');
            }}
          >
            Login
          </button>
          <button
            className="w-full px-4 py-2 bg-cyan-500/80 hover:bg-cyan-400 rounded-lg transition"
            onClick={() => {
              setMenuOpen(false);
              navigate('/register');
            }}
          >
            Register
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
