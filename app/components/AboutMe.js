"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 }); 
 
  return (
    <motion.section
      ref={ref}
      id="about"
      className="max-w-6xl mx-auto py-20 px-6"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      
        <div className="text-center mb-12">
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold mb-4 inline-block relative"
            style={{
              background: "linear-gradient(135deg, #1a1a1a 0%, #AB4E52 50%, #d85d61 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About Me
            <motion.div
              className="absolute -bottom-2 left-0 h-1 rounded-full"
              style={{
                background: "linear-gradient(90deg, #AB4E52 0%, #d85d61 100%)",
              }}
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            />
          </motion.h2>
        </div>

    

          <motion.div
            className="relative z-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.p
              className="text-lg md:text-xl leading-relaxed text-gray-800 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I&apos;m a <span className="font-semibold text-[#AB4E52]">full-stack developer</span> and <span className="font-semibold text-[#AB4E52]">designer</span> passionate about building seamless, human-centered digital experiences. I thrive on blending code and creativity—whether it&apos;s clean interfaces, smooth interactions, or playful experiments with 3D and animation. Beyond the screen, you&apos;ll often find me singing or getting lost in a good book.
            </motion.p>

          
            <motion.div 
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#AB4E52] to-transparent opacity-30" />
              <div className="w-2 h-2 rounded-full bg-[#AB4E52]" />
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#AB4E52] to-transparent opacity-30" />
            </motion.div>
            
</motion.div>

   
      <motion.div
        className="bg-transparent border-l-4 backdrop-blur-md border-[#AB4E52] px-6 py-4 rounded-md shadow-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        <h3 className="text-xl font-semibold mb-2 text-[#AB4E52]">
          My Mission
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          To bridge the gap between design and technology by building
          experiences that are not just functional, but also delightful.
          Every line of code and every pixel I craft is guided by one vision — 
          making tech human, creative, and impactful.
        </p>
      </motion.div>
    </motion.section>
  );
}
