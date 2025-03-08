"use client";
import React from "react";

interface SidebarProps {
  activeSection: string;
}

export default function Sidebar({ activeSection }: SidebarProps) {
  const navigationItems = [
    { id: "landing", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
    { id: "profiles", label: "Profiles" },
  ];

  return (
    <div className="bg-auto w-64 absolute top-20 left-12 flex flex-col items-center min-h-screen">
      <h1 className="text-white font-extrabold text-3xl mb-8">Sidebar</h1>

      <ul className="flex flex-col space-y-4 w-full text-white text-xl">
        {navigationItems.map((item) => (
          <li
            key={item.id}
            className={`bg-gray-800 ${
              activeSection === item.id ? "bg-opacity-50" : "bg-opacity-30"
            } p-8 rounded-lg hover:bg-opacity-50 transition-all`}
          >
            <a 
              href={`#${item.id}`} 
              className={`block ${
                activeSection === item.id ? "text-red-500" : "hover:text-red-500"
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
