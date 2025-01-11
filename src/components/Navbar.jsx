import React from 'react';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/50 backdrop-blur-lg shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-cyan-400">TF'24</div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-lg">
          <a href="#events" className="hover:text-cyan-400 transition">
            Events
          </a>
          <a href="#workshops" className="hover:text-cyan-400 transition">
            Workshops
          </a>
          <a href="#competitions" className="hover:text-cyan-400 transition">
            Competitions
          </a>
          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>
          <button className="px-4 py-2 bg-cyan-500/80 hover:bg-cyan-400 rounded-lg transition">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
