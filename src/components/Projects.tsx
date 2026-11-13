"use client";
import React from "react";

export default function Projects() {
   const projects = [
    {
      title: "MediLedger",
      description:
        "A blockchain-based Electronic Health Record (EHR) system designed to securely store and manage patient medical records with decentralized access control.",
      tech: ["Blockchain", "Java", "Distributed Systems"],
      link: "https://github.com/Medi-Ledger-FP/MediLedger",
    },
    {
      title: "Quizzero",
      description:
        "Quizzero is a quiz web application that allows users to take quizzes on various topics. It provides a user-friendly interface and tracks user scores.",
      tech: ["Next.js", "Web Scraping", "Tailwind CSS"],
      link: "https://quizzero.vercel.app",
    },
    {
      title: "cliMate",
      description:
        "cliMate is a weather app that provides weather information, based on the location passed in by the user.",
      tech: ["Typescript", "Next.js", "Tailwind CSS"],
      link: "https://cli-mate-gamma.vercel.app",
    },
    {
      title: "WhatNext",
      description:
        "WhatNext is a to-do list web application that helps users manage their tasks efficiently. It allows users to add, edit, and delete tasks.",
      tech: ["Spring Boot", "Tailwind CSS", "Next.js","PostgreSQL"],
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
    {
      title: "Prioriti",
      description:
        "A study planner web application that helps students manage their study schedules based on their curriculum. It provides a user-friendly interface to track progress and set priorities.",
      tech: ["Next.js","Node.js"],
      link: "https://github.com/nikhilt77/prioriti",
    }

  ];

  return (
    <div className="bg-black py-20 px-8">
      <h1 className="text-red-600 font-extrabold text-4xl mb-8">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border-2 border-red-900 rounded-lg p-5
                     hover:border-red-600 transition-all
                     bg-gray-900 bg-opacity-40 backdrop-blur-sm
                     transform hover:scale-[1.02] flex flex-col"
          >
            <h2 className="text-red-500 font-bold text-xl mb-2">
              {project.title}
            </h2>

            <p className="text-gray-300 text-sm mb-4 flex-grow">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-red-900 bg-opacity-50 px-2.5 py-0.5 rounded-full text-xs text-white"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-400 transition-colors inline-flex items-center text-sm"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
