"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaChevronRight, FaChevronLeft, FaBars, FaTimes } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import Landing from "../components/Landing";
import About from "../components/About";
import Projects from "../components/Projects";
import Profiles from "../components/Profiles";
import Contact from "../components/Contact";
import Resume from "../components/Resume";

export default function Home() {
  const [isDashboardVisible, setDashboardVisible] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("landing");

  const sectionRefs = {
    landing: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    profiles: useRef(null),
    resume: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const checkViewportSize = () => {
      setIsMobileView(window.innerWidth < 768);
      if (window.innerWidth < 768 && isDashboardVisible) {
        setDashboardVisible(false);
      }
    };

    checkViewportSize();
    window.addEventListener('resize', checkViewportSize);

    return () => {
      window.removeEventListener('resize', checkViewportSize);
    };
  }, [isDashboardVisible]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const toggleDashboard = () => {
    setDashboardVisible(!isDashboardVisible);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const sections = ['landing', 'about', 'projects', 'resume', 'contact', 'profiles'];

  return (
    <div className="bg-black cursor-default min-h-screen relative">
      <button
        onClick={toggleDashboard}
        className={`fixed top-8 left-8 bg-red-900 text-white p-3 rounded-full z-50 transition-all duration-300 hover:bg-red-800 md:block hidden ${
          isDashboardVisible ? "translate-x-56" : "translate-x-0"
        }`}
      >
        {isDashboardVisible ? <FaChevronLeft /> : <FaChevronRight />}
      </button>

      <button
        onClick={toggleMobileMenu}
        className="fixed top-6 right-6 bg-red-900 text-white p-3 rounded-full z-50 md:hidden block hover:bg-red-800"
      >
        {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center md:hidden">
          <nav className="text-center">
            {sections.map((section) => (
              <div 
                key={section}
                onClick={() => handleMobileNavigation(section)}
                className={`py-4 text-xl capitalize cursor-pointer transition-colors
                  ${activeSection === section ? 'text-red-500 font-bold' : 'text-white hover:text-red-500'}`}
              >
                {section}
              </div>
            ))}
          </nav>
        </div>
      )}

      {isDashboardVisible && !isMobileView && (
        <div className="fixed top-0 left-0 h-full">
          <Sidebar activeSection={activeSection} />
        </div>
      )}

      <main
        className={`transition-all duration-300 ${
          isDashboardVisible && !isMobileView ? "md:ml-64" : "ml-0"
        } px-4 md:px-8 lg:px-12`}
      >
        <section id="landing" ref={sectionRefs.landing} className="min-h-screen">
          <Landing />
        </section>

        <section id="about" ref={sectionRefs.about} className="min-h-screen">
          <About />
        </section>

        <section id="projects" ref={sectionRefs.projects} className="min-h-screen">
          <Projects />
        </section>
        
        <section id="resume" ref={sectionRefs.resume} className="min-h-screen">
          <Resume />
        </section>
        
        <section id="contact" ref={sectionRefs.contact} className="min-h-screen">
          <Contact />
        </section>
        
        <section id="profiles" ref={sectionRefs.profiles} className="min-h-screen">
          <Profiles />
        </section>
      </main>
    </div>
  );
}
