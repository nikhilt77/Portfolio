"use client";
import React from "react";

export default function About() {
  return (
    <div className="py-20 px-8 text-white bg-black">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-red-600">About Me</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-gray-300">

          {/* Left col */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg leading-relaxed">
              Hi, I'm Nikhil — a full-stack developer finishing my B.Tech in Computer Science at
              Govt. Model Engineering College (2026). I build fast, clean web apps and enjoy
              working across the whole stack, from database schema to polished UI.
            </p>

            <div className="bg-gray-800 bg-opacity-30 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-5 text-white">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <h3 className="text-red-500 font-medium mb-3">Frontend</h3>
                  <ul className="space-y-1.5 text-sm text-gray-300">
                    {["React.js", "Next.js", "HTML/CSS", "Tailwind CSS"].map(s => (
                      <li key={s} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-red-500 font-medium mb-3">Backend</h3>
                  <ul className="space-y-1.5 text-sm text-gray-300">
                    {["Node.js", "Spring Boot", "Java", "REST APIs"].map(s => (
                      <li key={s} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-red-500 font-medium mb-3">Database</h3>
                  <ul className="space-y-1.5 text-sm text-gray-300">
                    {["PostgreSQL", "MySQL", "SQL"].map(s => (
                      <li key={s} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-red-500 font-medium mb-3">Tools</h3>
                  <ul className="space-y-1.5 text-sm text-gray-300">
                    {["Git", "GitHub", "Postman", "Vercel"].map(s => (
                      <li key={s} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 bg-opacity-30 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-3 text-white">What I Do</h2>
              <p className="leading-relaxed text-sm">
                I specialise in building responsive, user-friendly web applications with modern
                technologies. My focus is clean, maintainable code that delivers real value —
                from CRUD APIs to full production deployments on Vercel.
              </p>
            </div>
          </div>

          {/* Right col */}
          <div className="space-y-6">
            <div className="bg-gray-800 bg-opacity-30 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-white">Education</h2>
              <h3 className="font-medium text-gray-200 mb-1">B.Tech — Computer Science</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Govt. Model Engineering College<br />
                Thrikkakara, Kerala, India
              </p>
              <p className="text-sm text-red-500 font-medium mt-2">2022 – 2026</p>
            </div>

            <div className="bg-gray-800 bg-opacity-30 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-3 text-white">Interests</h2>
              <p className="text-sm leading-relaxed">
                Outside of work I enjoy exploring new tech, contributing to open-source, and
                reading about software architecture and system design.
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-2 text-white">Let's Connect</h2>
              <p className="text-gray-100 text-sm mb-4">
                Open to new opportunities and interesting projects.
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-block bg-white text-red-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm"
              >
                Get in Touch
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
