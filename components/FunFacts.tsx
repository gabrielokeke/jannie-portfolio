"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaRunning, FaCamera, FaGlobe, FaStar, FaPaintBrush, FaBook, FaPlane, FaFemale } from "react-icons/fa";

const facts = [
  { icon: <FaFemale />, text: "I love dancing, which helps me stay graceful and confident on the runway." },
  { icon: <FaCamera />, text: "I enjoy experimenting with different styles and looks for photoshoots." },
  { icon: <FaStar />, text: "Modeling has taught me discipline, resilience, and the power of self-expression." },
  { icon: <FaGlobe />, text: "I dream of walking in Paris Fashion Week and collaborating with global designers." },
  { icon: <FaPaintBrush />, text: "I have a keen eye for fashion and often help style shoots I work on." },
  { icon: <FaRunning />, text: "I maintain my fitness through yoga, pilates, and regular cardio workouts." },
  { icon: <FaBook />, text: "I'm constantly learning about the fashion industry, following trends and studying iconic models." },
  { icon: <FaPlane />, text: "I love traveling and experiencing different cultures, which influences my modeling style." },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const FunFacts: React.FC = () => {
  return (
    <motion.div
      className="mt-10 p-8 bg-gray-800 rounded-xl text-white shadow-lg shadow-black/40 relative overflow-hidden cursor-pointer group"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-5 leading-tight relative z-10">
        A Few Fun Facts
      </h2>
      <ul className="pl-5 list-none relative z-10">
        {facts.map((fact, index) => (
          <motion.li
            key={index}
            className="mb-4 flex items-start"
            variants={itemVariants}
          >
            <span className="text-yellow-400 font-bold mr-2 text-lg">
              {fact.icon}
            </span>
            <span className="text-base leading-relaxed">{fact.text}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default FunFacts;
