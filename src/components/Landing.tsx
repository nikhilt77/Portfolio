"use client";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Landing() {
  return (
    <div className="bg-black min-h-screen flex flex-col justify-center px-8">
      <div className="max-w-2xl">
        <h1 className="hero-title text-red-600 font-extrabold text-8xl mb-4" style={{opacity: 1}}>
          Hi,<br></br>
          I'm Nikhil
        </h1>
        <p className="hero-subtitle text-gray-400 text-xl" style={{opacity: 1}}>
          A software developer passionate about creating web experiences.
        </p>

        <div className="hero-icons flex gap-6 mt-8" style={{opacity: 1}}>
          <a
            href="https://github.com/nikhilt77"
            className="hover-scale text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub className="text-xl cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/nikhil-tomy-4a5b45254/"
            className="hover-scale text-gray-400 hover:text-white transition-colors"
          >
            <FaLinkedin className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
