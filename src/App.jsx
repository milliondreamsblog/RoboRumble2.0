import React from 'react';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import CountdownTimer from './components/CountdownTimer';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      <Navbar />
      <ParticleBackground />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CountdownTimer />
      </main>
      <Footer />
    </div>
  );
}

export default App;