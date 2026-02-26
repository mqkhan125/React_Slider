import React, { useEffect, useRef, useState } from "react";
import data from "./JsonData.json";

const Slider = () => {
  const [next, setNext] = useState(0);
  const intervalRef = useRef(null);

  // start autoplay
  const startSlider = () => {
    intervalRef.current = setInterval(() => {
      setNext((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    },2000);
  };

  // stop autoplay
  const stopSlider = () => {
    clearInterval(intervalRef.current)
  }

  const handleNext = () => {
    setNext((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setNext((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  useEffect(() => {
    startSlider();
    return(() => {
        clearInterval(intervalRef.current)
    })
  }, []);

  return (
    <div
      className="slider-container"
      onMouseEnter={stopSlider}
      onMouseLeave={startSlider}
    >
      <div className="slider-wrapper">
        <img
          src={data[next]?.download_url}
          alt="slider"
          className="slider-image"
        />

        <button className="slider-btn prev" onClick={handlePrev}>
          &#10094;
        </button>

        <button className="slider-btn next" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Slider;
