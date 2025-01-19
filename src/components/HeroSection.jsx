import React from 'react';

function HeroSection() {
  return (
    <section className="hero-section w-[100vw] h-screen flex flex-col justify-center items-center text-center relative">
      <h1 className="text-6xl md:text-8xl font-extrabold text-yellow-400 glitch-text">
        TECH-FEST'25  
      </h1>
      <p className="text-xl mt-4 text-gray-300">
       20 - 22 January 2025
      </p>
      <div className="mt-8 flex space-x-4">
        <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-lg font-semibold rounded-lg"
        onClick={() => window.open('/auth')}>
          Register Now
        </button>
        <button className="px-6 py-3 bg-transparent border border-cyan-400 hover:bg-cyan-400 text-lg font-semibold rounded-lg"
         onClick={() => window.open('https://drive.google.com/file/d/1GKeP1QqpNzKgwpjWdvlZ8bNApGzp9Qvj/view?usp=sharing', '_blank')}>
          Learn More
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
