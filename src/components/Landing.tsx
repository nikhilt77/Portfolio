"use client";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiHackerrank } from "react-icons/si";

export default function Landing() {
  return (
    <div className="bg-black min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-32 text-white">
      <div className="max-w-4xl w-full">
        <h1 className="text-red-600  font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 leading-tight">
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
            className="text-gray-400 hover:text-blue-500 transition-colors"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a
            href="https://leetcode.com/nikhilt77/"
            className="text-gray-400 hover:text-yellow-400 transition-colors"
          >
            <SiLeetcode className="text-xl" />
          </a>
          <a
            href="https://www.hackerrank.com/profile/nikhiltomy75"
            className="text-gray-400 hover:text-green-400 transition-colors"
          >
            <SiHackerrank className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
