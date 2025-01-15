import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-black min-h-screen flex flex-col p-8">
      <h1 className="text-red-600 font-extrabold text-4xl mb-4">
        Let's Connect
      </h1>
      <p className="text-gray-400 text-xl mb-12">
        Feel free to reach out through any of these platforms
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        <div
          className="border-2 border-red-900 rounded-lg p-6 hover:border-red-600
                      transition-all duration-300 bg-gray-900 bg-opacity-40
                      transform hover:scale-[1.02]"
        >
          <div className="flex items-center space-x-4 mb-4">
            <FaEnvelope className="text-3xl text-red-600" />
            <h2 className="text-white font-bold text-xl">Email</h2>
          </div>
          <a
            href="mailto:nikhiltomy.mec@gmail.com"
            className="text-gray-400 hover:text-red-600 transition-colors"
          >
            nikhiltomy.mec@gmail.com
          </a>
        </div>

        <div
          className="border-2 border-red-900 rounded-lg p-6 hover:border-red-600
                      transition-all duration-300 bg-gray-900 bg-opacity-40
                      transform hover:scale-[1.02]"
        >
          <div className="flex items-center space-x-4 mb-4">
            <FaLinkedin className="text-3xl text-red-600" />
            <h2 className="text-white font-bold text-xl">LinkedIn</h2>
          </div>
          <a
            href="https://www.linkedin.com/in/nikhil-tomy-4a5b45254/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-600 transition-colors"
          >
            Connect on LinkedIn
          </a>
        </div>

        <div
          className="border-2 border-red-900 rounded-lg p-6 hover:border-red-600
                      transition-all duration-300 bg-gray-900 bg-opacity-40
                      transform hover:scale-[1.02]"
        >
          <div className="flex items-center space-x-4 mb-4">
            <FaGithub className="text-3xl text-red-600" />
            <h2 className="text-white font-bold text-xl">GitHub</h2>
          </div>
          <a
            href="https://github.com/nikhilt77"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-600 transition-colors"
          >
            View GitHub Profile
          </a>
        </div>

        <div
          className="border-2 border-red-900 rounded-lg p-6 hover:border-red-600
                      transition-all duration-300 bg-gray-900 bg-opacity-40
                      transform hover:scale-[1.02]"
        >
          <div className="flex items-center space-x-4 mb-4">
            <FaPhone className="text-3xl text-red-600" />
            <h2 className="text-white font-bold text-xl">Phone</h2>
          </div>
          <p className="text-gray-400">+91 7306767714</p>
        </div>
      </div>
    </div>
  );
}
