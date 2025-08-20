"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaGraduationCap, FaBriefcase, FaStar } from "react-icons/fa";

const TabSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("skills");

  const tabs = [
    {
      id: "skills",
      label: "Skills",
      icon: <FaStar />,
      content: (
        <ul className="pl-5">
          <li className="list-none my-2.5">
            <span className="text-yellow-400 text-sm font-semibold">Runway Modeling</span>
            <br />Confident walking and posing for live fashion shows
          </li>
          <li className="list-none my-2.5">
            <span className="text-yellow-400 text-sm font-semibold">Photo Shoots</span>
            <br />Expressive posing and working with photographers
          </li>
          <li className="list-none my-2.5">
            <span className="text-yellow-400 text-sm font-semibold">Commercial Modeling</span>
            <br />Promoting brands and products in advertising campaigns
          </li>
        </ul>
      ),
    },
    {
      id: "experience",
      label: "Experience",
      icon: <FaBriefcase />,
      content: (
        <ul className="pl-5">
          <li className="list-none my-2.5">
            <span className="text-yellow-400 text-sm font-semibold">2024</span>
            <br />Featured in local fashion shows and magazine editorials
          </li>
          <li className="list-none my-2.5">
            <span className="text-yellow-400 text-sm font-semibold">2023 - Present</span>
            <br />Collaborated with photographers and brands for commercial campaigns
          </li>
          <li className="list-none my-2.5">
            <span className="text-yellow-400 text-sm font-semibold">2022</span>
            <br />Participated in modeling workshops and training programs
          </li>
        </ul>
      ),
    },
    {
      id: "education",
      label: "Education",
      icon: <FaGraduationCap />,
      content: (
        <ul className="pl-5">
          <li className="list-none my-2.5">
            <span className="text-yellow-400 text-sm font-semibold">2023</span>
            <br />Modeling Course at Fashion Academy
          </li>
          <li className="list-none my-2.5">
            <span className="text-yellow-400 text-sm font-semibold">2022</span>
            <br />Workshops on runway techniques and portfolio building
          </li>
          <li className="list-none my-2.5">
            <span className="text-yellow-400 text-sm font-semibold">Self-taught</span>
            <br />Online courses on posing and personal branding
          </li>
        </ul>
      ),
    },
    {
      id: "personal",
      label: "Personal Info",
      icon: <FaUser />,
      content: (
        <ul className="pl-5">
          <li className="list-none my-2.5">
            <span className="text-yellow-400 text-sm font-semibold">Name</span>
            <br />Jane Onyinyechi
          </li>
          <li className="list-none my-2.5">
            <span className="text-yellow-400 text-sm font-semibold">Height</span>
            <br />5'9"
          </li>
          <li className="list-none my-2.5">
            <span className="text-yellow-400 text-sm font-semibold">Shoe size</span>
            <br />40
          </li>
          <li className="list-none my-2.5">
            <span className="text-yellow-400 text-sm font-semibold">Nationality</span>
            <br />Nigerian
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      {/* Tabs */}
      <div className="flex my-5 mb-10 gap-6 md:gap-10 flex-wrap select-none relative">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 text-lg font-medium cursor-pointer relative pb-1 transition-colors duration-300 whitespace-nowrap flex-shrink-0 ${
              activeTab === tab.id ? "text-yellow-400" : "text-white hover:text-yellow-400"
            }`}
          >
            {tab.icon}
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 -bottom-1 h-0.5 w-full bg-yellow-400 rounded"
              />
            )}
          </button>
        ))}
      </div>

      {/* Animated Tab Content */}
      <AnimatePresence mode="wait">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-gray-300 text-base leading-relaxed"
              >
                {tab.content}
              </motion.div>
            )
        )}
      </AnimatePresence>
    </>
  );
};

export default TabSection;
