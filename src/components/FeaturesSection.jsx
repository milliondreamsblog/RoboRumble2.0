import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function FeaturesSection() {
  const features = [
    {
      title: 'Workshops',
      desc: 'Hands-on experience with cutting-edge tech.',
      img: '/robot.png',
      route :'/eventone'
    },
    {
      title: 'Workshops',
      desc: 'Hands-on experience with cutting-edge tech.',
      img: '/robot.png',
      route :'/eventtwo'
    },
    {
      title: 'Workshops',
      desc: 'Hands-on experience with cutting-edge tech.',
      img: '/robot.png',
      route :'/eventthree'
    },
    {
      title: 'Workshops',
      desc: 'Hands-on experience with cutting-edge tech.',
      img: '/robot.png',
      route :'/eventfour'
    },
    {
      title: 'Workshops',
      desc: 'Hands-on experience with cutting-edge tech.',
      img: '/robot.png',
      route :'/eventfive'
    },{
      title: 'Workshops',
      desc: 'Hands-on experience with cutting-edge tech.',
      img: '/robot.png',
      route :'/eventsix'
    },
    
    
    
  ];

  return (
    <section className="py-20 bg-gray-900 text-center">
      <h2 className="text-4xl font-extrabold text-cyan-400 glitch-text">Key Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <Link to={feature.route} key={index}>
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg relative group overflow-hidden"
              whileHover={{
                scale: 1.1,
                rotate: 2,
                transition: { duration: 0.5, ease: 'easeInOut' },
              }}
            >
              {/* Glowing Border */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-cyan-400 group-hover:animate-pulse pointer-events-none"></div>

              {/* Animated Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-cyan-400 to-blue-500 opacity-0 group-hover:opacity-40 group-hover:blur-md transition duration-500"
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  transition: { duration: 3, repeat: Infinity },
                }}
              ></motion.div>

              {/* Feature Image */}
              <img
                src={feature.img}
                alt={feature.title}
                className="rounded-md mb-4 w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Title */}
              <h3 className="text-2xl font-bold text-cyan-400">{feature.title}</h3>

              {/* Description */}
              <p className="mt-4 text-gray-300">{feature.desc}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;