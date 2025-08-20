"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaLightbulb } from "react-icons/fa";

import ImageSection from "@/components/ImageSection";
import AboutContent from "@/components/AboutContent";
import TabSection from "@/components/TabSection";
import VisionGoals from "@/components/VisionGoals";
import FunFacts from "@/components/FunFacts";

const About: React.FC = () => {
  return (
    <div id="about" className="text-white pt-40 py-20 bg-black font-sans">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex justify-between flex-wrap gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <ImageSection />
          <div className="flex-1 min-w-[300px] space-y-6">
            <AboutContent />
            <TabSection />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <h2 className="flex items-center text-4xl font-bold mb-6 gap-3">
            <FaStar className="text-yellow-400" /> Vision & Goals
          </h2>
          <VisionGoals />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="flex items-center text-4xl font-bold mb-6 gap-3">
            <FaLightbulb className="text-yellow-400" /> Fun Facts
          </h2>
          <FunFacts />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
