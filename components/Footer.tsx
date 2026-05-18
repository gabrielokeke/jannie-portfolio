"use client";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      className="bg-yellow-400 text-black py-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto text-center space-y-3">
        <p className="m-0 font-bold">&copy; 2025 - Jannie - All Rights Reserved</p>
        <div className="flex justify-center gap-4 text-black text-xl">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className=" transition-colors duration-300" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className=" transition-colors duration-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className=" transition-colors duration-300" />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
