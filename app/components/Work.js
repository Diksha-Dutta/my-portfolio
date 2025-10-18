"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const heroProject = {
  title: "Team Engineers Medical",
  description:
    "A live medical startup website showcasing anesthesia machines, ventilators, and other equipment for Team Engineers.",
  images: [
    "/projects/project1-main.jpg",
    "/projects/project1-1.jpg",
    "/projects/project1-2.jpg",
  ],
  link: "https://www.teamengineersmedical.com",
  tag: "Live Project",
  tech: ["Next.js", "React", "Tailwind CSS"]
};

const reactProjects = [
  {
    title: "Spotify 2.0",
    description:
      "A Spotify 2.0 clone built during a React summer internship, featuring music search, playlists, and live playback using React, Redux, and the Shazam API.",
    image: "/projects/project2-main.jpg",
    tech: ["React", "Redux", "Shazam API"]
  },
  {
    title: "Service Desk App",
    description:
      "A service desk web app with user authentication and payment integration, built using React, Firebase, and Razorpay.",
    image: "/projects/project3-main.jpg",
    tech: ["React", "Firebase", "Razorpay"]
  },
];

const springProjects = [
  {
    title: "Flight Booking Website",
    description:
      "A full-featured flight booking platform built with Spring Boot, Thymeleaf, Hibernate, and MySQL. Features include searching flights, booking tickets, and managing user profiles.",
    image: "/projects/project4-main.jpg",
    tech: ["Spring Boot", "Hibernate", "MySQL"]
  },
  {
    title: "Customer Management App",
    description:
      "A CRUD-based customer management system using Spring MVC, Hibernate, JSP, and Lombok. Allows adding, updating, deleting, and viewing customer records.",
    image: "/projects/project5-main.jpg",
    tech: ["Spring MVC", "Hibernate", "JSP"]
  },
];

export default function Work() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % heroProject.images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const renderProjects = (projects) =>
    projects.map((project, index) => (
      <motion.div
        key={index}
        className="group rounded-2xl overflow-hidden relative"
        style={{
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 244, 244, 0.9) 100%)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(171, 78, 82, 0.1)",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)"
        }}
        whileHover={{ y: -8 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
      >
     
        <div className="relative overflow-hidden h-52 md:h-64">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
          
          <motion.div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, transparent 0%, rgba(171, 78, 82, 0.8) 100%)",
              opacity: 0
            }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          
        
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            {project.tech.slice(0, 2).map((tech, i) => (
              <motion.span
                key={i}
                className="px-2 py-1 text-xs font-medium text-white rounded backdrop-blur-md"
                style={{
                  background: "rgba(171, 78, 82, 0.9)"
                }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

      
        <div className="p-6">
          <motion.h3 
            className="text-xl md:text-2xl font-bold mb-3"
            style={{
              background: "linear-gradient(135deg, #AB4E52 0%, #8B3A3E 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {project.title}
          </motion.h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            {project.description}
          </p>

        
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium text-gray-600 rounded-full"
                style={{
                  background: "rgba(171, 78, 82, 0.1)",
                  border: "1px solid rgba(171, 78, 82, 0.2)"
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white px-4 py-2 rounded-lg font-medium transition-all"
              style={{
                background: "linear-gradient(135deg, #AB4E52 0%, #8B3A3E 100%)",
                boxShadow: "0 4px 15px rgba(171, 78, 82, 0.3)"
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 6px 25px rgba(171, 78, 82, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              View Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          )}
        </div>

     
        <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
          <div className="absolute top-0 right-0 w-full h-full rounded-bl-full"
            style={{
              background: "linear-gradient(135deg, #AB4E52 0%, transparent 70%)"
            }}
          />
        </div>
      </motion.div>
    ));

  return (
    <div className="relative overflow-hidden py-20">
    
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-10 w-96 h-96 rounded-full opacity-5"
          style={{
            background: "radial-gradient(circle, #AB4E52 0%, transparent 70%)"
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.section 
        ref={ref} 
        id="work" 
        style={{ scale, opacity }} 
        className="max-w-3xl mx-auto px-6 relative z-10"
      >
      
        <div className="text-center mb-16">
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold mb-4 inline-block relative"
            style={{
              background: "linear-gradient(135deg, #1a1a1a 0%, #AB4E52 50%, #d85d61 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            Featured Work
            <motion.div
              className="absolute -bottom-2 left-0 h-1 rounded-full"
              style={{
                background: "linear-gradient(90deg, #AB4E52 0%, #d85d61 100%)",
              }}
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: false }}
            />
          </motion.h2>
          <motion.p
            className="text-gray-600 mt-6 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
          >
            A selection of projects showcasing my skills and experience
          </motion.p>
        </div>

      
        <div className="mb-20">
          <motion.div
            className="group rounded-3xl overflow-hidden relative"
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 244, 244, 0.9) 100%)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(171, 78, 82, 0.15)",
              boxShadow: "0 20px 60px rgba(171, 78, 82, 0.15)"
            }}
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
         
            <motion.div
              className="absolute top-4 left-4 z-10 px-4 py-2 rounded-lg text-white font-semibold text-sm backdrop-blur-md"
              style={{
                background: "linear-gradient(135deg, #AB4E52 0%, #8B3A3E 100%)",
                boxShadow: "0 4px 15px rgba(171, 78, 82, 0.4)"
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              ⭐ {heroProject.tag}
            </motion.div>

         
            <div className="relative overflow-hidden h-64 md:h-96">
              <motion.img
                key={carouselIndex}
                src={heroProject.images[carouselIndex]}
                alt={heroProject.title}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
              
       
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {heroProject.images.map((_, i) => (
                  <motion.button
                    key={i}
                    className="w-2 h-2 rounded-full transition-all"
                    style={{
                      background: i === carouselIndex 
                        ? "linear-gradient(135deg, #AB4E52 0%, #8B3A3E 100%)" 
                        : "rgba(255, 255, 255, 0.5)"
                    }}
                    onClick={() => setCarouselIndex(i)}
                    whileHover={{ scale: 1.5 }}
                    animate={{ 
                      width: i === carouselIndex ? "24px" : "8px",
                      height: i === carouselIndex ? "8px" : "8px"
                    }}
                  />
                ))}
              </div>
            </div>

           
            <div className="p-8 md:p-10">
              <motion.h3 
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  background: "linear-gradient(135deg, #AB4E52 0%, #8B3A3E 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {heroProject.title}
              </motion.h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                {heroProject.description}
              </p>

            
              <div className="flex flex-wrap gap-2 mb-6">
                {heroProject.tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1 text-sm font-medium text-gray-700 rounded-full"
                    style={{
                      background: "rgba(171, 78, 82, 0.1)",
                      border: "1px solid rgba(171, 78, 82, 0.2)"
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <motion.a
                href={heroProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                style={{
                  background: "linear-gradient(135deg, #AB4E52 0%, #8B3A3E 100%)",
                  boxShadow: "0 4px 15px rgba(171, 78, 82, 0.3)"
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 6px 25px rgba(171, 78, 82, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Live Site
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
            </div>

          
            <div className="absolute bottom-0 left-0 w-32 h-32 opacity-5">
              <div className="absolute bottom-0 left-0 w-full h-full rounded-tr-full"
                style={{
                  background: "linear-gradient(135deg, transparent 30%, #AB4E52 100%)"
                }}
              />
            </div>
          </motion.div>
        </div>

       
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold"
              style={{
                background: "linear-gradient(135deg, #AB4E52 0%, #8B3A3E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              React Projects
            </motion.h3>
            <div className="flex-1 h-px bg-gradient-to-r from-[#AB4E52] to-transparent opacity-30" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {renderProjects(reactProjects)}
          </div>
        </motion.div>

     
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold"
              style={{
                background: "linear-gradient(135deg, #AB4E52 0%, #8B3A3E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Spring Framework Projects
            </motion.h3>
            <div className="flex-1 h-px bg-gradient-to-r from-[#AB4E52] to-transparent opacity-30" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {renderProjects(springProjects)}
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}