"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function HeroSection() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/gallery");
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-cover bg-center md:bg-[url('/model.jpg')] bg-[url('/08.jpg')]">
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-transparent bg-gradient-to-b from-black/70 to-black/90" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 pt-32 md:pt-48 lg:pt-48"
      >
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="ml-5 md:ml-20 text-lg md:text-xl lg:text-2xl text-white"
        >
          Fashion model, Content creator
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="ml-5 md:ml-20 text-3xl md:text-5xl lg:text-6xl font-bold text-white"
        >
          Hi I'm <span className="text-yellow-400">Jannie</span> <br />
          A Runaway model who brings smiles to faces through my aesthetism
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="ml-5 md:ml-20 mt-5 text-lg md:text-xl lg:text-2xl text-white"
        >
          With years of runway and studio experience, I turn vision into visuals that move people.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          onClick={handleClick}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 12px rgba(250,204,21,0.7)" }}
          className="ml-5 md:ml-20 mt-10 bg-yellow-400 py-4 px-8 rounded-full font-bold text-black text-lg shadow-lg flex items-center gap-2"
        >
          Check out my work <FaArrowRight className="text-black text-xl" />
        </motion.button>
      </motion.div>
    </div>
  );
}
