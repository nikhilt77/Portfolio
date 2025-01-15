"use client";
import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import Landing from "../components/Landing";
import About from "../components/About";
import Projects from "../components/Projects";
import Profiles from "../components/Profiles";
import Contact from "../components/Contact";

export default function Home() {
  const [isDashboardVisible, setDashboardVisible] = useState(false);

  const toggleDashboard = () => {
    setDashboardVisible(!isDashboardVisible);
  };

  return (
    <div className="bg-black cursor-default min-h-screen relative">
      <button
        onClick={toggleDashboard}
        className={`fixed top-8 left-8 bg-red-900 text-white p-3 rounded-full z-50 transition-all duration-300 hover:bg-red-800 ${
          isDashboardVisible ? "translate-x-56" : "translate-x-0"
        }`}
      >
        {isDashboardVisible ? <FaChevronLeft /> : <FaChevronRight />}
      </button>

      {isDashboardVisible && (
        <div className="fixed top-0 left-0">
          <Sidebar />
        </div>
      )}

      <main
        className={`transition-all duration-300 ${
          isDashboardVisible ? "ml-64" : "ml-0"
        }`}
      >
        <section id="landing" className="min-h-screen">
          <Landing />
        </section>

        <section id="about" className="min-h-screen">
          <About />
        </section>

        <section id="projects" className="min-h-screen">
          <Projects />
        </section>
        <section id="profiles" className="min-h-screen">
          <Profiles />
        </section>
        <section id="contact" className="min-h-screen">
          <Contact />
        </section>
      </main>
    </div>
  );
}
