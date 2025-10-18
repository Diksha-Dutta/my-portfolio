"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const lettersTop = ["D", "I", "K", "S", "H", "A"];
const lettersBottom = ["D", "U", "T", "T", "A"];

export default function Hero() {
  const [showSplit, setShowSplit] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      setShowSplit(false);
      const timer = setTimeout(() => setShowSplit(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="relative w-full min-h-screen text-[#1a1a1a] flex items-center justify-center overflow-hidden px-4 md:px-0"
      style={{
        background: "linear-gradient(135deg, #fdfbfb 0%, #f8f4f4 50%, #fef9f9 100%)"
      }}
    >
    
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #AB4E52 0%, transparent 70%)"
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #AB4E52 0%, transparent 70%)"
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <AnimatePresence mode="wait">
        {!showSplit ? (
        
          <motion.div
            key="falling"
            className="flex flex-col items-center justify-center text-center relative z-10"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
      
            <div className="flex gap-2 text-7xl sm:text-6xl md:text-7xl font-extrabold mb-6 sm:mb-8">
              {lettersTop.map((char, i) => (
                <motion.span
                  key={i}
                  className="relative"
                  style={{
                    background: "linear-gradient(135deg, #AB4E52 0%, #d85d61 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(0 4px 6px rgba(171, 78, 82, 0.2))"
                  }}
                  initial={{ y: -200, opacity: 0, rotateX: -90 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  transition={{
                    delay: i * 0.2,
                    type: "spring",
                    stiffness: 120,
                    damping: 12,
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotateZ: [-5, 5, -5, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

        
            <motion.div 
              className="w-48 sm:w-64 md:w-80 mb-6 sm:mb-8 relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#AB4E52] to-[#d85d61] rounded-lg blur-xl opacity-30 scale-105" />
              <img
                src="/images/hero-photo.png"
                alt="Diksha Dutta"
                className="rounded-lg w-full h-auto object-cover shadow-2xl border-4 border-white relative z-10"
                style={{
                  boxShadow: "0 20px 60px rgba(171, 78, 82, 0.3)"
                }}
              />
            </motion.div>

            <div className="flex gap-2 text-6xl sm:text-5xl md:text-6xl font-extrabold mt-4 sm:mt-8">
              {lettersBottom.map((char, i) => (
                <motion.span
                  key={i}
                  className="relative"
                  style={{
                    background: "linear-gradient(135deg, #AB4E52 0%, #d85d61 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(0 4px 6px rgba(171, 78, 82, 0.2))"
                  }}
                  initial={{ x: 200, opacity: 0, rotateY: 90 }}
                  animate={{ x: 0, opacity: 1, rotateY: 0 }}
                  transition={{
                    delay: i * 0.25,
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotateZ: [5, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

          
            <motion.p 
              className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-medium"
              style={{
                background: "linear-gradient(135deg, #AB4E52 0%, #d85d61 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              Full Stack Developer • Designer • Analyst
            </motion.p>
          </motion.div>
        ) : (
       
          <motion.div
            key="split"
            className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full lg:max-w-6xl py-8 md:py-12 md:p-20 md:max-w-3xl relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
           
            <motion.div
              className="flex flex-col justify-center space-y-4 sm:space-y-6 px-8 md:px-0 text-center md:text-left mx-auto"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.span 
                className="text-sm sm:text-base font-semibold uppercase tracking-wide inline-block px-4 py-2 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                  color: "white",
                  boxShadow: "0 4px 15px rgba(16, 185, 129, 0.3)",
                  width: "fit-content",
                  margin: "0 auto"
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                Available for work
              </motion.span>
              
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
                style={{
                  background: "linear-gradient(135deg, #1a1a1a 0%, #AB4E52 50%, #d85d61 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Hi, I&apos;m <br /> Diksha Dutta

              </motion.h1>
              
              <motion.p 
                className="text-sm sm:text-base md:text-lg text-gray-700 max-w-md mx-auto md:mx-0"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                I build seamless digital experiences from design to code —
                blending creativity with functionality. Exploring web, mobile,
                and data-driven solutions.
              </motion.p>
              
              <motion.a
                href="/Diksha_Dutta_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-block"
              >
                <motion.button 
                  className="px-5 py-2 sm:px-6 sm:py-3 text-white font-medium rounded-lg relative overflow-hidden group"
                  style={{
                    background: "linear-gradient(135deg, #AB4E52 0%, #922E34 100%)",
                    boxShadow: "0 4px 15px rgba(171, 78, 82, 0.4)"
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 6px 25px rgba(171, 78, 82, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">View Resume</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </motion.a>
            </motion.div>

         
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 px-4 md:px-0 text-center md:text-left"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div 
                className="w-44 sm:w-48 md:w-60 h-auto shadow-lg rounded-2xl p-4 flex flex-col justify-between mb-4 sm:mb-6 mx-auto md:mx-0 relative overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.5)"
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 30px rgba(171, 78, 82, 0.2)"
                }}
                initial={{ rotateY: -20, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-10"
                  style={{
                    background: "radial-gradient(circle, #AB4E52 0%, transparent 70%)"
                  }}
                />
                <div>
                  <h3 className="font-bold text-base sm:text-lg">Diksha Dutta</h3>
                  <p className="text-xs sm:text-sm text-gray-500">India</p>
                </div>
                <span 
                  className="text-xs sm:text-sm font-medium mt-2"
                  style={{
                    background: "linear-gradient(135deg, #AB4E52 0%, #d85d61 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Think. Build. Beautify. Decode.
                </span>
              </motion.div>

              <motion.div 
                className="w-36 sm:w-44 md:w-52 h-36 sm:h-44 md:h-52 mx-auto relative group"
                whileHover={{ scale: 1.05 }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#AB4E52] to-[#d85d61] rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 scale-105" />
                <img
                  src="/images/hero-photo.png"
                  alt="Diksha Dutta"
                  className="rounded-2xl w-full h-full object-cover shadow-md relative z-10"
                  style={{
                    boxShadow: "0 10px 40px rgba(171, 78, 82, 0.3)"
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}