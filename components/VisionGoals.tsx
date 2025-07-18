import React from 'react';

const VisionGoals: React.FC = () => {
  return (
    <div className="mt-10 p-8 bg-gray-800 rounded-xl text-white shadow-lg shadow-black/40 relative overflow-hidden cursor-pointer group transition-colors duration-400 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-full before:bg-yellow-400 before:transform before:translate-y-full before:transition-transform before:duration-500 before:z-0 before:rounded-xl hover:before:translate-y-0 focus-within:before:translate-y-0">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-5 leading-tight relative z-10 transition-colors duration-500 group-hover:text-gray-900 group-focus-within:text-gray-900">
        Vision & Goals
      </h2>
      <div className="relative z-10 transition-colors duration-500 group-hover:text-gray-900 group-focus-within:text-gray-900">
        <p className="text-base leading-relaxed mb-6">
          My ultimate vision is to become a globally recognized professional model, known for my versatility, professionalism, and ability to bring any creative concept to life. I aspire to work with the most prestigious fashion houses, luxury brands, and renowned photographers across the world.
        </p>
        <p className="text-base leading-relaxed mb-6">
          In the short term, I'm focused on building a diverse portfolio that showcases my range across fashion, commercial, and editorial modeling. I want to establish myself as a reliable and sought-after model in the industry, someone who brands can trust to represent their vision with excellence.
        </p>
        <p className="text-base leading-relaxed mb-6">
          My long-term goals include walking for major fashion weeks in Paris, Milan, New York, and London. I dream of becoming the face of international campaigns for luxury brands and appearing on the covers of prestigious fashion magazines like Vogue, Harper's Bazaar, and Elle.
        </p>
        <p className="text-base leading-relaxed">
          Beyond personal success, I aim to use my platform to inspire young people, especially women, to pursue their dreams fearlessly. I want to be a role model who shows that with dedication, hard work, and authentic self-expression, anything is possible in the modeling industry and beyond.
        </p>
      </div>
    </div>
  );
};

export default VisionGoals;