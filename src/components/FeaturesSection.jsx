import React from 'react';
import { motion } from 'framer-motion';

function FeaturesSection() {
  const features = [
    {
      title: 'Workshops',
      desc: 'Hands-on experience with cutting-edge tech.',
      img: '/robot.png',
    },
    {
      title: 'Competitions',
      desc: 'Show your skills and win exciting prizes.',
      img: 'https://techfest.org/static/media/Cozmoclench.da96030f9c4bf326375a.jpg',
    },
    {
      title: 'Talks',
      desc: 'Learn from industry experts.',
      img: 'https://lh5.googleusercontent.com/wVxFnvh1dRi_t_j6qFWQMEvwE9su1QXxwbu3ZZeTDYWXoB9739G5Kxn8Y-H5yTku1Bhqb65muKbUys4biumiissTtlLXb2zFyrXcR6Smf53AS-J6EaEOcBiRC-pV31pggrRBpmypEpw=w740',
    },
    {
      title: 'Exhibitions',
      desc: 'Witness the future of technology.',
      img: 'https://lh5.googleusercontent.com/is41NFSZZ7ID2EDj8TriYXnXF7P58ZdL-gh6A7bqiUx6SEzSOby1LJLb-az8IfbLzZhYZdJd41c59grtgpMlgnDhK1vXLFkl03sUYA90TSJpV7ZNNdVcXPmuBetAR9nteC8j0t4hVjI=w615',
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-center">
      <h2 className="text-4xl font-extrabold text-cyan-400 glitch-text">Key Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto">
        {features.map((feature, index) => (
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
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;