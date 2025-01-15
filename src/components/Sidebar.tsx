"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="bg-auto w-64 absolute top-20 left-12 flex flex-col items-center min-h-screen">
      <h1 className="text-white font-extrabold text-3xl mb-8">Sidebar</h1>

      <ul className="flex flex-col space-y-4 w-full text-white text-xl">
        <li className="bg-gray-800 bg-opacity-30 p-8 rounded-lg hover:bg-opacity-50 transition-all">
          <a href="#landing" className="hover:text-red-900 block">
            Home
          </a>
        </li>

        <li className="bg-gray-800 bg-opacity-30 p-8 rounded-lg hover:bg-opacity-50 transition-all">
          <a href="#about" className="hover:text-red-900 block">
            About
          </a>
        </li>

        <li className="bg-gray-800 bg-opacity-30 p-8 rounded-lg hover:bg-opacity-50 transition-all">
          <a href="#projects" className="hover:text-red-900 block">
            Projects
          </a>
        </li>

        <li className="bg-gray-800 bg-opacity-30 p-8 rounded-lg hover:bg-opacity-50 transition-all">
          <a href="#profiles" className="hover:text-red-900 block">
            Profiles
          </a>
        </li>

        <li className="bg-gray-800 bg-opacity-30 p-8 rounded-lg hover:bg-opacity-50 transition-all">
          <a href="#contact" className="hover:text-red-900 block">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
