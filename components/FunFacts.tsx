import React from 'react';

const FunFacts: React.FC = () => {
  const facts = [
    {
      icon: '💃',
      text: 'I love dancing, which helps me stay graceful and confident on the runway.'
    },
    {
      icon: '📸',
      text: 'I enjoy experimenting with different styles and looks for photoshoots.'
    },
    {
      icon: '🌟',
      text: 'Modeling has taught me discipline, resilience, and the power of self-expression.'
    },
    {
      icon: '🌍',
      text: 'I dream of walking in Paris Fashion Week and collaborating with global designers.'
    },
    {
      icon: '🎨',
      text: 'I have a keen eye for fashion and often help style shoots I work on.'
    },
    {
      icon: '🏃‍♀️',
      text: 'I maintain my fitness through yoga, pilates, and regular cardio workouts.'
    },
    {
      icon: '📚',
      text: 'I\'m constantly learning about the fashion industry, following trends and studying iconic models.'
    },
    {
      icon: '✈️',
      text: 'I love traveling and experiencing different cultures, which influences my modeling style.'
    }
  ];

  return (
    <div className="mt-10 p-8 bg-gray-800 rounded-xl text-white shadow-lg shadow-black/40 relative overflow-hidden cursor-pointer group transition-colors duration-400 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-full before:bg-yellow-400 before:transform before:translate-y-full before:transition-transform before:duration-500 before:z-0 before:rounded-xl hover:before:translate-y-0 focus-within:before:translate-y-0">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-5 leading-tight relative z-10 transition-colors duration-500 group-hover:text-gray-900 group-focus-within:text-gray-900">
        A Few Fun Facts
      </h2>
      <ul className="pl-5 list-none relative z-10 transition-colors duration-500 group-hover:text-gray-900 group-focus-within:text-gray-900">
        {facts.map((fact, index) => (
          <li key={index} className="mb-4 flex items-start">
            <span className="text-yellow-400 font-bold mr-2 text-lg align-middle group-hover:text-yellow-600 group-focus-within:text-yellow-600 transition-colors duration-500">
              {fact.icon}
            </span>
            <span className="text-base leading-relaxed">{fact.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FunFacts;