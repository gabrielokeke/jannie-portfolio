/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { FaSearchPlus } from "react-icons/fa";

interface GalleryItemProps {
  src: string;
  alt?: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ src, alt }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative overflow-hidden rounded-md cursor-pointer"
    >
      <img
        src={src}
        alt={alt || ""}
        className="w-full h-auto object-cover rounded-md"
        loading="lazy"
      />
      {/* Optional overlay icon on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 flex items-center justify-center bg-black/30 text-white text-2xl"
      >
        <FaSearchPlus />
      </motion.div>
    </motion.div>
  );
};

export default GalleryItem;
