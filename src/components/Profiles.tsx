import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Profiles() {
  const profiles = [
    {
      icon: <FaGithub className="text-3xl" />,
      name: "GitHub",
      link: "https://github.com/nikhilt77",
      color: "hover:text-gray-300",
    },
    {
      icon: <FaLinkedin className="text-3xl" />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/nikhil-tomy-4a5b45254/",
      color: "hover:text-blue-400",
    },
    {
      icon: <FaInstagram className="text-3xl" />,
      name: "Instagram",
      link: "https://www.instagram.com/nikhil._.t77/",
      color: "hover:text-red-400",
    },
  ];

  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center p-8">
      <h1 className="text-red-600 font-extrabold text-4xl mb-12">Profiles</h1>

      <div className="flex flex-wrap justify-center gap-8">
        {profiles.map((profile, index) => (
          <a
            key={index}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div
              className={`flex flex-col items-center space-y-3
                          text-gray-400 ${profile.color} transition-all
                          transform hover:scale-110`}
            >
              {profile.icon}
              <span className="text-sm font-medium">{profile.name}</span>
            </div>
          </a>
        ))}
      </div>

      <p className="text-gray-400 mt-12 text-center max-w-md">
        Feel free to reach out through any of these platforms. I'm always open
        to connecting and discussing new opportunities.
      </p>
    </div>
  );
}
