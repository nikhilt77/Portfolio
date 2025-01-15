"use client";
import React from "react";

export default function About() {
  return (
    <div className="min-h-screen p-8 text-white">
      <div className="max-w-3xl mx-2">
        <h1 className="text-4xl font-bold mb-6 text-red-600">About Me</h1>

        <div className="space-y-6 text-gray-300">
          <p className="text-lg">
            Hello! I'm Nikhil, a passionate software developer with a keen
            interest in building stuff :). My journey in technology started with
            curiosity and has evolved into a professional pursuit of building
            new and innovative projects.
          </p>

          <div className="bg-gray-800 bg-opacity-30 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-white">Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-red-900 font-medium mb-2">Frontend</h3>
                <ul className="list-disc list-inside">
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>HTML/CSS</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h3 className="text-red-900 font-medium mb-2">Backend</h3>
                <ul className="list-disc list-inside">
                  <li>Node.js</li>
                  <li>postgreSQL</li>
                  <li>mySQL</li>
                  <li>SpringBoot</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">Education</h2>
            <p className="mb-2">
              Bachelor of Technology in Computer Science
              <br />
              <span className="text-gray-400">
                Govt. Model Engineering College, Thrikkakra, Ernakulam, Kerala,
                India • 2022-2026
              </span>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">What I Do</h2>
            <p className="mb-4">
              I specialize in building responsive and user-friendly web
              applications using modern technologies. My focus is on creating
              clean, efficient, and maintainable code that delivers excellent
              user experiences.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 text-white">Interests</h2>
            <p>
              Beyond coding, I enjoy exploring new technologies, contributing to
              open-source projects, and staying up-to-date with the latest
              trends in web development. When I'm not coding, you can find me
              reading tech blogs or working on personal projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
