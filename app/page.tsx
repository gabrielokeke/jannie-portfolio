"use client";

import HeroSection from "@/components/HeroSection";
import AboutContent from "@/components/AboutContent";
import TabSection from "@/components/TabSection";
import VisionGoals from "@/components/VisionGoals";
import FunFacts from "@/components/FunFacts";
import ImageSection from "@/components/ImageSection";
import GalleryAlbum from "@/components/GalleryAlbum";

import { FaInstagram, FaFacebookF, FaTwitter, FaTiktok, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const albums = [
  {
    title: "Red & Blue Court",
    description:
      "Dynamic basketball-inspired editorial series capturing athleticism, style, and motion against urban courts with vivid red and blue tones.",
    images: [
      { src: "/bskt.jpg" },
      { src: "/bskt1.jpg" },
      { src: "/bskt2.jpg" },
      { src: "/bskt3.jpg" },
    ],
  },
  {
    title: "Urban Edge",
    description:
      "Reflects gritty and stylish life of city streets. Bold attitudes meet sleek fashion in this modern, edgy collection.",
    images: [
      { src: "/29.jpg" },
      { src: "/30.jpg" },
      { src: "/31.5.jpg" },
      { src: "/32.jpg" },
    ],
  },
  {
    title: "Power Moves",
    description:
      "Dynamic poses and impactful moments that convey unstoppable energy and drive.",
    images: [
      { src: "/33.jpg" },
      { src: "/34.jpg" },
      { src: "/35.jpg" },
      { src: "/36.jpg" },
    ],
  },
];

export default function HomePage() {
  const socialLinks = [
    { icon: FaInstagram, url: "https://instagram.com/jannie" },
    { icon: FaFacebookF, url: "https://facebook.com/jannie" },
    { icon: FaTwitter, url: "https://twitter.com/jannie" },
    { icon: FaTiktok, url: "https://tiktok.com/@jannie" },
    { icon: FaYoutube, url: "https://youtube.com/jannie" },
  ];

  // Common fade + slide-up animation
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="bg-black text-white ">
      {/* Hero Section */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <HeroSection />
      </motion.div>

      {/* About Section */}
      <div className="md:px-16 lg:px-20 px-4">
      <motion.section id="about" className="pt-40 pb-20 bg-black text-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <div className="flex flex-wrap gap-8 justify-between">
          <ImageSection />
          <div className="flex-1 min-w-[300px]">
            <AboutContent />
          </div>
        </div>
        <VisionGoals />
        <FunFacts />
      </motion.section>

      {/* Portfolio / Gallery */}
      <motion.section id="portfolio" className="py-20 bg-[#0d0d0d]" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <h2 className="text-5xl text-yellow-400 text-center font-bold mb-10">
          Portfolio
        </h2>
        <div className="space-y-16">
          {albums.map((album, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.2 }}>
              <GalleryAlbum album={album} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experience & Achievements */}
      <motion.section id="experience" className="py-20 bg-black text-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 text-center mb-10">
          Experience & Achievements
        </h2>
        <motion.ul className="space-y-6 max-w-3xl mx-auto text-gray-300 list-disc pl-5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.2 } }, hidden: {} }}>
          <motion.li variants={fadeUp}>Runway appearances at Paris and Milan Fashion Weeks.</motion.li>
          <motion.li variants={fadeUp}>Featured in Vogue, Harper's Bazaar, and Elle magazines.</motion.li>
          <motion.li variants={fadeUp}>Commercial campaigns for global fashion brands.</motion.li>
          <motion.li variants={fadeUp}>Multiple cover shoots and editorial spreads.</motion.li>
          <motion.li variants={fadeUp}>Awarded Best Emerging Model of the Year 2024.</motion.li>
        </motion.ul>
      </motion.section>

      {/* Skills & Services */}
      <motion.section id="skills" className="py-20 bg-[#111111] text-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 text-center mb-10">
          Skills & Services
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
          <motion.div className="p-6 bg-gray-900 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" whileHover={{ scale: 1.05 }}>
            <h3 className="font-bold text-xl mb-2">Runway Modeling</h3>
            <p className="text-gray-300">Expert in high fashion runway with professional poise.</p>
          </motion.div>
          <motion.div className="p-6 bg-gray-900 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" whileHover={{ scale: 1.05 }}>
            <h3 className="font-bold text-xl mb-2">Photoshoots</h3>
            <p className="text-gray-300">Editorial, commercial, and lifestyle photography.</p>
          </motion.div>
          <motion.div className="p-6 bg-gray-900 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" whileHover={{ scale: 1.05 }}>
            <h3 className="font-bold text-xl mb-2">Brand Collaborations</h3>
            <p className="text-gray-300">Campaigns and partnerships with global fashion brands.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Social Media Section */}
      <motion.section id="socials" className="py-20 bg-black text-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 text-center mb-10">
          Follow Me
        </h2>
        <div className="flex justify-center gap-8 text-4xl">
          {socialLinks.map((social, i) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.3, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="text-yellow-400 hover:text-yellow-500 transition-colors duration-300"
              >
                <Icon />
              </motion.a>
            );
          })}
        </div>
      </motion.section>
      </div>
    </main>
  );
}
