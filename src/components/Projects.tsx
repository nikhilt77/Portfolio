"use client";
import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "cliMate",
      description:
        "cliMate is a weather app that provides weather information, based on the location passed in by the user.",
      tech: ["Typescript", "Next.js", "Tailwind"],
      link: "https://cli-mate-gamma.vercel.app",
    },
    {
      title: "nextUp",
      description:
        "nextUp is a basic to-do web application that allows users to add,update and delete tasks and keep track of their daily activities.",
      tech: ["HTML", "CSS", "Javascript"],
      link: "https://nextup-eight.vercel.app",
    },
    {
      title: "eduSync",
      description:
        "eduSync is a class management web application for students to access their class schedules, assignments, attendance, and grades.",
      tech: ["Node.js", "Next.js", "PostgreSQL"],
      link: "https://github.com/nikhilt77/eduSync",
    },
    {
      title: "stuDora",
      description:
        "stuDora is a backend project that can be run on Postman or any other API development platform. It is a simple API that allows users to perform CRUD operations on a database.",
      tech: ["Node.js", "PostgreSQL"],
      link: "https://github.com/nikhilt77/Students",
    },
  ];

  return (
    <div className="bg-black min-h-screen flex flex-col p-8 mb-12">
      <h1 className="text-red-600 font-extrabold text-4xl mb-8 mt-10">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border-2 border-red-900 rounded-lg p-6
                     hover:border-red-600 transition-all
                     bg-gray-900 bg-opacity-40 backdrop-blur-sm
                     transform hover:scale-[1.02]"
          >
            <h2 className="text-red-900 font-bold text-2xl mb-3">
              {project.title}
            </h2>

            <p className="text-gray-300 text-lg mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-red-900 bg-opacity-50 px-3 py-1 rounded-full text-sm text-white"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-400 transition-colors inline-flex items-center"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
