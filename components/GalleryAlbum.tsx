"use client";
import { motion } from "framer-motion";
import { FaSearchPlus } from "react-icons/fa";
import GalleryItem from "./GalleryItem";

interface Album {
  title: string;
  description: string;
  images: { src: string }[];
}

interface GalleryAlbumProps {
  album: Album;
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const GalleryAlbum: React.FC<GalleryAlbumProps> = ({ album }) => {
  return (
    <section className="mb-12">
      <h2 className="text-4xl text-center font-bold text-yellow-400 mb-4 flex items-center justify-center gap-2">
        {album.title} <FaSearchPlus className="text-yellow-400" />
      </h2>
      <p className="text-center text-gray-300 max-w-4xl mx-auto mb-8">
        {album.description}
      </p>

      <motion.div
        className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {album.images.map((img, i) => (
          <motion.div key={i} variants={itemVariants}>
            <GalleryItem src={img.src} alt={`${album.title} image ${i + 1}`} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default GalleryAlbum;
