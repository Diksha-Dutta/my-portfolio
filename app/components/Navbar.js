"use client";
import { useEffect, useState } from "react";
import { FaUser, FaStar, FaServicestack, FaBriefcase, FaEnvelope } from "react-icons/fa";

export default function FloatingDotNavbar() {
  const links = [
    { name: "About", icon: <FaUser /> },
    { name: "Experience", icon: <FaStar /> },
    { name: "Skills", icon: <FaServicestack /> },
    { name: "Work", icon: <FaBriefcase /> },
    { name: "Contact", icon: <FaEnvelope /> },
  ];

  const [activeSection, setActiveSection] = useState("hero");

 
  useEffect(() => {
    const sections = ["hero", ...links.map((l) => l.name.toLowerCase())];

    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3 }
      );

      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  }, [links]);


  const activeLink = links.find(link => link.name.toLowerCase() === activeSection);

  return (
    <>
   
      {activeLink && (
        <div className="hidden md:flex fixed top-1/3 left-6 transform -translate-y-1/2 flex-col items-center z-50">
          <a
            href={`#${activeLink.name.toLowerCase()}`}
            className="relative group flex items-center justify-center"
          >
         
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#AB4E52] text-white transition-transform duration-300 hover:scale-110">
              {activeLink.icon}
            </div>

         
            <span className="absolute left-16 top-1/2 -translate-y-1/2 bg-[#AB4E52] text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {activeLink.name}
            </span>
          </a>
        </div>
      )}

    
      <nav className="fixed top-0 w-full z-40 bg-[#C08081] backdrop-blur-lg border-b border-[#C08081]/20 text-white shadow-sm md:hidden">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
          <a href="#hero" className="font-bold text-xl px-3 py-2 rounded-md">
            Diksha Dutta
          </a>

      
          <div className="flex space-x-3 md:hidden">
            {links.map((link) => (
              <a
                key={link.name}
                href={`#${link.name.toLowerCase()}`}
                className="px-3 py-2 rounded-md hover:bg-[#AB4E52]/30 transition"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
