"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const ref = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setIsSubmitting(true);

    
   emailjs.sendForm(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  form,
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
).then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setIsSubmitting(false);
          setSubmitted(true);
          setTimeout(() => {
            setSubmitted(false);
          }, 10000);
        },
        (error) => {
          console.error("Email sending error:", error.text);
          setIsSubmitting(false);
          alert("Oops! Something went wrong. Please try again.");
        }
      );

    form.reset();
  };

  return (
    <div className="relative overflow-hidden py-20">
 
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-1/4 w-96 h-96 rounded-full opacity-5"
          style={{
            background: "radial-gradient(circle, #AB4E52 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full opacity-5"
          style={{
            background: "radial-gradient(circle, #AB4E52 0%, transparent 70%)",
          }}
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.section
        ref={ref}
        id="contact"
        style={{ scale, opacity }}
        className="max-w-xl mx-auto px-6 text-center relative z-10"
      >
       
        <div className="mb-12">
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold mb-4 inline-block relative"
            style={{
              background:
                "linear-gradient(135deg, #1a1a1a 0%, #AB4E52 50%, #d85d61 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            Let&apos;s Connect
            <motion.div
              className="absolute -bottom-2 left-0 h-1 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #AB4E52 0%, #d85d61 100%)",
              }}
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: false }}
            />
          </motion.h2>

          <motion.p
            className="text-gray-600 mt-6 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
          >
            Have a project in mind or just want to chat? I&apos;m always open to
            discussing new opportunities, creative ideas, or collaborations.
          </motion.p>
        </div>

      
        {!submitted ? (
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 max-w-md mx-auto rounded-3xl shadow-2xl overflow-hidden relative"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 244, 244, 0.9) 100%)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(171, 78, 82, 0.1)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="h-1.5 bg-gradient-to-r from-[#AB4E52] via-[#C08081] to-[#AB4E52]" />

            <div className="p-8 md:p-10 relative">
            
              <InputField label="Your Name" name="user_name" delay={0.3} />
            
              <InputField
                label="Your Email"
                name="user_email"
                type="email"
                delay={0.4}
              />
          
              <TextAreaField label="Your Message" name="message" delay={0.5} />

              <SubmitButton isSubmitting={isSubmitting} />
            </div>
          </motion.form>
        ) : (
          <SuccessMessage />
        )}
      </motion.section>
    </div>
  );
}

function InputField({ label, name, type = "text", delay }) {
  return (
    <motion.div
      className="relative mb-6"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5, delay }}
    >
      <input
        type={type}
        name={name}
        required
        placeholder=" "
        className="peer w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#AB4E52] bg-white/50 backdrop-blur-sm transition-all duration-300 placeholder-transparent"
      />
      <label className="absolute left-4 top-4 text-gray-500 text-sm transition-all duration-300 pointer-events-none
        peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
        peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#AB4E52] peer-focus:bg-white peer-focus:px-2 peer-focus:rounded
        peer-valid:-top-2 peer-valid:left-3 peer-valid:text-xs peer-valid:text-[#AB4E52] peer-valid:bg-white peer-valid:px-2 peer-valid:rounded"
      >
        {label}
      </label>
    </motion.div>
  );
}

function TextAreaField({ label, name, delay }) {
  return (
    <motion.div
      className="relative mb-6"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5, delay }}
    >
      <textarea
        name={name}
        rows="5"
        required
        placeholder=" "
        className="peer w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#AB4E52] bg-white/50 backdrop-blur-sm transition-all duration-300 placeholder-transparent resize-none"
      />
      <label className="absolute left-4 top-4 text-gray-500 text-sm transition-all duration-300 pointer-events-none
        peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
        peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#AB4E52] peer-focus:bg-white peer-focus:px-2 peer-focus:rounded
        peer-valid:-top-2 peer-valid:left-3 peer-valid:text-xs peer-valid:text-[#AB4E52] peer-valid:bg-white peer-valid:px-2 peer-valid:rounded"
      >
        {label}
      </label>
    </motion.div>
  );
}

function SubmitButton({ isSubmitting }) {
  return (
    <motion.button
      type="submit"
      disabled={isSubmitting}
      className="w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
      style={{
        background: "linear-gradient(135deg, #AB4E52 0%, #8B3A3E 100%)",
        boxShadow: "0 4px 15px rgba(171, 78, 82, 0.3)",
      }}
      whileHover={!isSubmitting ? { scale: 1.02 } : {}}
      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
      transition={{ duration: 0.5 }}
    >
      {isSubmitting ? (
        <span className="flex items-center justify-center gap-2">
          <motion.div
            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          Sending...
        </span>
      ) : (
        <>
          Send Message
          <svg
            className="w-5 h-5 ml-2 inline-block"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </>
      )}
    </motion.button>
  );
}

function SuccessMessage() {
  return (
    <motion.div
      className="max-w-2xl mx-auto rounded-3xl shadow-2xl overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 244, 244, 0.9) 100%)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(171, 78, 82, 0.1)",
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="h-1.5 bg-gradient-to-r from-[#AB4E52] via-[#C08081] to-[#AB4E52]" />
      <div className="p-12 text-center">
        <motion.div
          className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, red 0%, brown 50% , black 100%)",
            boxShadow: "0 10px 30px rgba(16, 185, 129, 0.3)",
          }}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
        >
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </motion.div>
        <motion.h3
          className="text-2xl md:text-3xl font-bold mb-3"
          style={{
            background: "linear-gradient(135deg, #AB4E52 0%, #C08081 50%,#AB4E52 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Message Sent Successfully!
        </motion.h3>
        <motion.p
          className="text-gray-600 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Thank you for reaching out. I&apos;ll get back to you as soon as possible.
        </motion.p>
      </div>
    </motion.div>
  );
}
