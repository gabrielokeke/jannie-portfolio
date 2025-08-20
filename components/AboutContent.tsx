"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaCamera } from "react-icons/fa";

const AboutContent: React.FC = () => {
  const paragraphs = [
    "I'm a professional fashion and commercial model with experience working on photo shoots, runway shows, and promotional events. I have a strong presence in front of the camera, a versatile look, and a passion for bringing creative visions to life through modeling. I strive to combine confidence, style, and professionalism to deliver impactful and memorable performances.",
    "Over the years, I've walked in numerous fashion shows, collaborated with photographers and brands, and developed a versatile portfolio that highlights my adaptability across different modeling styles. I pride myself on being detail-oriented, resilient, and fully committed to every project I take on.",
    "Beyond modeling, I have a keen eye for styling, enjoy dancing to stay graceful, and constantly explore new trends to elevate my creative expression. My long-term vision includes walking in major fashion weeks across Paris, Milan, New York, and London, as well as appearing in global campaigns and prestigious fashion magazines.",
    "I believe modeling is more than just appearances—it’s storytelling through expression, movement, and style. I aim to inspire aspiring models and young creatives to pursue their dreams fearlessly and embrace their individuality."
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-yellow-400 mb-5 flex items-center gap-2">
        Who Am I? <FaStar className="text-yellow-400" />
      </h1>

      {paragraphs.map((para, idx) => (
        <motion.p
          key={idx}
          className="text-gray-300 text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 * idx, duration: 0.5 }}
        >
          {para}
        </motion.p>
      ))}

      <motion.div
        className="mt-4 flex items-center gap-3 text-yellow-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <FaCamera />
        <span>Capturing moments, telling stories, and creating impact through fashion.</span>
      </motion.div>
    </motion.div>
  );
};

export default AboutContent;
