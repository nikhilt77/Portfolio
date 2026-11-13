"use client";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiHackerrank } from "react-icons/si";

export default function Landing() {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-black min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-32 text-white">
      <div className="max-w-4xl w-full">
        <h1 className="text-red-600 font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 leading-tight">
          Hi,<br />
          I'm Nikhil
        </h1>
        <p className="text-gray-400 text-xl max-w-xl">
          A full-stack developer building clean, fast web apps with React, Next.js &amp; Node.js.
        </p>

        <div className="flex gap-6 mt-8 items-center">
          <a
            href="https://github.com/nikhilt77"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub className="text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/nikhil-tomy-4a5b45254/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a
            href="https://leetcode.com/nikhilt77/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 transition-colors"
          >
            <SiLeetcode className="text-3xl" />
          </a>
          <a
            href="https://www.hackerrank.com/profile/nikhiltomy75"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition-colors"
          >
            <SiHackerrank className="text-3xl" />
          </a>
        </div>

        <div className="flex flex-wrap gap-4 mt-10">
          <button
            onClick={scrollToProjects}
            className="bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            View My Work ↓
          </button>
          <a
            href="/nikhil-tomy-resume.pdf"
            download="nikhil-tomy-resume.pdf"
            className="border border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}
