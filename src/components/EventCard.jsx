import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EventCard = ({ id, title, objective, img }) => {
  return (
    <motion.div
      className="relative bg-transparent p-6 rounded-lg shadow-lg relative group overflow-hidden"
      whileHover={{
        scale: 1.1,
        rotate: 2,
        transition: { duration: 0.5, ease: 'easeInOut' },
      }}
    >
      <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-cyan-400 group-hover:animate-pulse pointer-events-none"></div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-cyan-400 to-blue-500 opacity-0 group-hover:opacity-40 group-hover:blur-md transition duration-500"
        animate={{
          opacity: [0.2, 0.5, 0.2],
          transition: { duration: 3, repeat: Infinity },
        }}
      ></motion.div>
      <img
        src={img}
        alt={title}
        className="rounded-md mb-4 w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <h3 className="text-2xl font-bold text-cyan-400">{title}</h3>
      <p className="mt-4 text-gray-300">{objective}</p>
      <Link
        to={`/event-details/${id}`}
        className="relative mt-6 inline-block bg-cyan-500 hover:bg-cyan-400 text-black text-lg font-semibold py-2 px-6 rounded-lg transition-colors"
      >
        View Details
      </Link>
    </motion.div>
  );
};

export default EventCard;