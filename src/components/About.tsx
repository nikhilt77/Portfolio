"use client";
import React from "react";

export default function About() {
  return (
    <div className="min-h-screen p-8 text-white bg-black">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-red-600">About Me</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-gray-300">
        
          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="text-lg leading-relaxed">
                Hello! I'm Nikhil, a passionate software developer with a keen
                interest in building stuff :). My journey in technology started with
                curiosity and has evolved into a professional pursuit of building
                new and innovative projects.
              </p>
            </div>

            <div className="bg-gray-800 bg-opacity-30 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-6 text-white">Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-red-500 font-medium mb-4 text-lg">Frontend</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      React.js
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Next.js
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      HTML/CSS
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Tailwind CSS
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-red-500 font-medium mb-4 text-lg">Backend</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      Node.js
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      PostgreSQL
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      MySQL
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      SpringBoot
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 bg-opacity-30 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-white">What I Do</h2>
              <p className="leading-relaxed">
                I specialize in building responsive and user-friendly web
                applications using modern technologies. My focus is on creating
                clean, efficient, and maintainable code that delivers excellent
                user experiences.
              </p>
            </div>
          </div>

         
          <div className="space-y-8">
            <div className="bg-gray-800 bg-opacity-30 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-white">Education</h2>
              <div className="space-y-3">
                <h3 className="font-medium text-gray-200">
                  Bachelor of Technology in Computer Science
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Govt. Model Engineering College, Thrikkakara, Ernakulam, Kerala, India
                </p>
                <p className="text-sm text-red-500 font-medium">
                  2022-2026
                </p>
              </div>
            </div>

            <div className="bg-gray-800 bg-opacity-30 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-white">Interests</h2>
              <p className="leading-relaxed">
                Beyond coding, I enjoy exploring new technologies, contributing to
                open-source projects, and staying up-to-date with the latest
                trends in web development. When I'm not coding, you can find me
                reading tech blogs or working on personal projects.
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-white">Let's Connect</h2>
              <p className="text-gray-100 mb-4">
                I'm always open to discussing new opportunities and interesting projects.
              </p>
              {/* <button className="bg-white text-red-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Get in Touch
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}