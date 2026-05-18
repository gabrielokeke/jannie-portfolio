/* eslint-disable @next/next/no-img-element */
"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaCamera } from "react-icons/fa";

const images = [
  "/45.jpg",
  "/50.jpg",
  "/44.jpg",
  "/53.jpg",
  "/54.jpg",
  "/52.jpg",
  "/46.jpg",
  "/51.jpg",
  "/56.jpg",
  "/57.jpg",
];

const ImageSection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="flex-shrink-0 w-full lg:w-[35%] min-w-[280px]">
      <Slider {...settings}>
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative">
              <img
                src={src}
                alt={`Model image ${index + 1}`}
                className="w-full rounded-2xl object-cover shadow-lg shadow-black/50 block"
              />
              {/* Optional overlay icon */}
              <FaCamera className="absolute top-3 right-3 text-yellow-400 text-xl" />
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSection;
