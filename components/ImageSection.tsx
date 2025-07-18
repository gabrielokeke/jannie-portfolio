/* eslint-disable @next/next/no-img-element */
"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

const images = [
  "/rose1.jpg",
  "/40.jpg",
  "/08.jpg",
  "/04.jpg",
  "/27.jpg",
  "/12.5.jpg",
  "/29.jpg",

];

const ImageSection: React.FC = () => {
const settings = {
  dots: true,
  infinite: true,
  speed: 500,         // Transition animation speed in ms
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,     // Enable automatic slide change
  autoplaySpeed: 2000 // Time between slides in ms (3000ms = 3 seconds)
};

  return (
    <div className="flex-shrink-0 w-full lg:w-[35%] min-w-[280px]">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Model image ${index + 1}`}
              className="w-full rounded-2xl object-cover shadow-lg shadow-black/50 block"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSection;
