import React from 'react';
import ImageSection from '@/components/ImageSection'
import AboutContent from '@/components/AboutContent';
import TabSection from '@/components/TabSection';
import VisionGoals from '@/components/VisionGoals';
import FunFacts from '@/components/FunFacts';

const About: React.FC = () => {
  return (
    <div id="about" className="text-white pt-40 py-20 bg-black font-sans">
      <div className="container mx-auto px-4">
        <div className="flex justify-between flex-wrap gap-8">
          <ImageSection />
          <div className="flex-1 min-w-[300px]">
            <AboutContent />
            <TabSection />
          </div>
        </div>
        
        <VisionGoals />
        <FunFacts />
      </div>
    </div>
  );
};

export default About;