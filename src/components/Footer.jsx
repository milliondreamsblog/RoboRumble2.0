import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="container mx-auto px-6 text-center space-y-6">
        {/* Contribution Section */}
        <div>
          <h3 className="text-xl font-bold text-cyan-400">
            Show Some ❤️ & Contribute!
          </h3>
          <p className="mt-2">
            This project is open source. Your contributions are welcome and appreciated.
          </p>
          <a
            href="https://github.com/ad1tyayadav/tech-fest"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 text-lg bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold rounded-lg transition transform hover:scale-105"
          >
            Contribute on GitHub
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 w-4/5 mx-auto"></div>

        {/* Credit Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm space-y-4 md:space-y-0">
          {/* Developer Credits */}
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>Made with 💻 & ☕ by</span>
            <a
              href="https://www.linkedin.com/in/akshat-darshi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-500 transition transform hover:scale-105 flex items-center"
            >
              Akshat
            </a>
            <span>&</span>
            <a
              href="https://github.com/ad1tyayadav"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-500 transition transform hover:scale-105 flex items-center"
            >
              Aditya
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/ad1tyayadav/tech-fest"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition transform hover:scale-125"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://twitter.com/_its_Adi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition transform hover:scale-125"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-yadav-39b20529a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition transform hover:scale-125"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
