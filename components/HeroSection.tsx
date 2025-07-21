"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClick = () => {
    router.push("/gallery");
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-cover bg-center md:bg-[url('/model.jpg')] bg-[url('/08.jpg')]">
      <div className="absolute inset-0 bg-transparent bg-gradient-to-b from-black/70 to-black/90" />

      <div className={`relative z-10 pt-32 md:pt-48 lg:pt-48 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <p className={`ml-5 md:ml-20 text-lg md:text-xl lg:text-2xl text-white transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
          Fashion model, Content creator
        </p>

        <h1 className={`ml-5 md:ml-20 text-3xl md:text-6xl lg:text-7xl font-bold text-white transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
          Hi I'm <span className="text-yellow-400">Your Name</span> <br />
          A Runaway model who brings smiles to faces through my aesthetism
        </h1>

        <p className={`ml-5 md:ml-20 mt-5 text-lg md:text-xl lg:text-2xl text-white transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
          With years of runway and studio experience, I turn vision into visuals that move people.
        </p>

        <button
          onClick={handleClick}
          className={`ml-5 md:ml-20 mt-10 bg-yellow-400 py-4 px-8 rounded-full font-bold text-lg shadow-lg hover:scale-105 hover:shadow-yellow-500/50 transition-all duration-700 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Check out my work
        </button>
      </div>
    </div>
  );
}
