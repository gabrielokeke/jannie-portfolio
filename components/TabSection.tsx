"use client"
import React, { useState } from 'react';

const TabSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('skills');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  const tabs = [
    {
      id: 'skills',
      label: 'Skills',
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
      )
    },
    {
      id: 'experience',
      label: 'Experience',
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
      )
    },
    {
      id: 'education',
      label: 'Education',
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
      )
    },
    {
      id: 'personal',
      label: 'Personal Info',
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
      )
    }
  ];

  return (
    <>
      <div className="flex my-5 mb-10 gap-6 md:gap-10 flex-wrap select-none">
        {tabs.map((tab) => (
          <p
            key={tab.id}
            className={`text-lg font-medium cursor-pointer relative text-white pb-1 transition-colors duration-300 whitespace-nowrap flex-shrink-0 hover:text-yellow-400 ${
              activeTab === tab.id ? 'after:w-full' : 'after:w-0'
            } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-yellow-400 after:transition-all after:duration-500`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </p>
        ))}
      </div>

      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`${activeTab === tab.id ? 'block' : 'hidden'} text-gray-300 text-base leading-relaxed`}
        >
          {tab.content}
        </div>
      ))}
    </>
  );
};

export default TabSection;