import React, { useState } from "react";
import slides from "../data/ImageCarousel";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Carousel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const forward = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const backward = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="overflow-hidden relative w-1/2 h-1/2">
      <div className="flex flex-row">
        <img src={slides[currentIndex].src} alt={slides[currentIndex].alt} />
      </div>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 cursor-pointer bg-white opacity-30 hover:opacity-65 left-0"
        onClick={backward}
      >
        <IoIosArrowBack size={50} />
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 cursor-pointer bg-white opacity-30 hover:opacity-65 right-0"
        onClick={forward}
      >
        <IoIosArrowForward size={50} />
      </button>
    </div>
  );
};

export default Carousel;
