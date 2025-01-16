import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import CountdownTimer from './components/CountdownTimer';
import Footer from './components/Footer';
import Workshops from "./components/Workshops";
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import EventOne from './animation-svg-css/Eventone';

import './App.css';

function App() {
  return (
    <Router>
      <div className="relative bg-gray-900 text-white">
        
        <Routes>
          {/* Route for Workshops */}
          <Route path="/event" element={<Workshops />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/eventone" element={< EventOne />} />

          {/* Route for Home */}
          <Route 
            path="/" 
            element={
              <>
                <Navbar />
                <ParticleBackground />
                <HeroSection />
                <FeaturesSection />
                <CountdownTimer />
                <Footer />
              </>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
