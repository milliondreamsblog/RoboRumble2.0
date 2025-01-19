import React from 'react';
import EventCard from './EventCard';
import { events } from '../../public/eventsData';

const EventList = () => {
  return (
    <section className="relative w-[100vw]  py-20 bg-transparent text-center">
      <h2 className="text-7xl font-extrabold text-cyan-400 glitch-text">Events</h2>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto">
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </section>
  );
};

export default EventList;
