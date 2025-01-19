import React from 'react';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white w-full">
      <Navbar />
      <ParticleBackground />
      <main className="w-full">
        <Outlet /> {/* Child routes like Events will render here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
