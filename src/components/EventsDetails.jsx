import React from 'react';
import { useParams } from 'react-router-dom';
import { eventsDetails } from '../../public/eventsData.js';
import { Link } from 'react-router-dom';

const EventDetails = () => {
  const { id } = useParams();
  const event = eventsDetails.find((event) => event.id === parseInt(id)); // Match event by ID

  if (!event) {
    return (
      <div className="flex flex-col items-center justify-center w-[100vw] h-screen text-center text-red-500">
        <h3 className="text-5xl font-bold">Event not found.</h3>
      </div>
    );
  }

  return (
    <div className="w-[100vw] min-h-screen relative top-8 bg-transparent text-gray-300 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 px-4 md:px-20 py-16">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
          {/* Title and Details */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-cyan-400">{event.title}</h1>
            <p className="text-lg md:text-xl mt-6 text-gray-200">{event.details}</p>
          </div>

          {/* Image with Animated Electric Border */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[30%] mx-auto md:mx-0">
            <div className="absolute inset-0 rounded-[30%] animate-electric border-[4px] border-cyan-400">
              <div className="absolute inset-0 rounded-[30%] border-transparent border-t-cyan-400 border-l-cyan-400 animate-spin-slow"></div>
            </div>
            <img
              src={event.image} // Ensure your event object contains an 'image' property
              alt={event.title}
              className="w-full h-full rounded-[30%] object-cover"
            />
          </div>
        </div>

        {/* Sections */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* General Information */}
          <section>
            <h2 className="text-2xl font-bold text-cyan-400">General Information</h2>
            <ul className="mt-4 list-disc list-inside space-y-2">
              {event.generalInfo.map((info, index) => (
                <li key={index}>{info}</li>
              ))}
            </ul>
          </section>

          {/* Rewards and Prizes */}
          <section>
            <h2 className="text-2xl font-bold text-cyan-400">Rewards and Prizes</h2>
            <ul className="mt-4 list-disc list-inside space-y-2">
              {event.rewards.map((reward, index) => (
                <li key={index}>{reward}</li>
              ))}
            </ul>
          </section>
          {/* Dimensions of Bots */}
          <section>
            <h2 className="text-2xl font-bold text-cyan-400">{event.dimension}</h2>
            <ul className="mt-4 list-disc list-inside space-y-2">
              {event.dimensions.map((dimension, index) => (
                <li key={index}>{dimension}</li>
              ))}
            </ul>
          </section>

          {/* Power Source */}
          <section>
            <h2 className="text-2xl font-bold text-cyan-400">Power Source</h2>
            <ul className="mt-4 list-disc list-inside space-y-2">
              {event.powerSource.map((source, index) => (
                <li key={index}>{source}</li>
              ))}
            </ul>
          </section>

          {/* Track/Arena Details */}
          <section>
            <h2 className="text-2xl font-bold text-cyan-400">Track Details / Arena Details</h2>
            <ul className="mt-4 list-disc list-inside space-y-2">
              {event.trackDetails.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </section>

          {/* Gameplay */}
          <section>
            <h2 className="text-2xl font-bold text-cyan-400">Gameplay</h2>
            <ul className="mt-4 list-disc list-inside space-y-2">
              {event.gameplay.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </section>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 text-center">
          {/* Register Now Button */}
          <Link
          to={'/auth'}
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-lg font-semibold rounded-lg mx-2"
          >
            Register Now
          </Link>

          {/* Learn More Button */}
          <button
            className="px-6 py-3 bg-transparent border border-cyan-400 hover:bg-cyan-400 text-lg font-semibold rounded-lg mx-2"
            onClick={() => window.open('https://drive.google.com/file/d/1GKeP1QqpNzKgwpjWdvlZ8bNApGzp9Qvj/view?usp=sharing', '_blank')}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
