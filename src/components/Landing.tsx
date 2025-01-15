"use client";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Landing() {
  return (
    <div className="bg-black min-h-screen flex flex-col justify-center px-8">
      <div className="max-w-2xl">
        <h1 className="text-red-600  font-extrabold text-8xl mb-4">
          Hi,<br></br>
          I'm Nikhil
        </h1>
        <p className="text-gray-400 text-xl">
          A software developer passionate about creating web experiences.
        </p>

        <div className="flex gap-6 mt-8">
          <a
            href="https://github.com/nikhilt77"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub className="text-xl cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/nikhil-tomy-4a5b45254/"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaLinkedin className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
