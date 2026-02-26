import React, { useState, useEffect, useRef } from "react";
import data from "./JsonData.json";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  // next slide
  const nextSlide = () => {
    setIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  // prev slide
  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  // autoplay start
  const startAuto = () => {
    intervalRef.current = setInterval(nextSlide, 2000);
  };

  // autoplay stop
  const stopAuto = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, []);

  return (
    <div
      className="slider-container"
      onMouseEnter={stopAuto}
      onMouseLeave={startAuto}
    >
      <div
        className="slider-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {data.map((item) => (
          <img
            key={item.id}
            src={item.download_url}
            alt="slide"
            className="slide"
          />
        ))}
      </div>

      <button className="slider-btn prev" onClick={prevSlide}>
        &#10094;
      </button>

      <button className="slider-btn next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
