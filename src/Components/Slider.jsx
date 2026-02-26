import React, { useState } from "react";
import data from "./JsonData.json";

const Slider = () => {
  const [next, setNext] = useState(0);

  const handleNext = () => {
    setNext(() => next + 1);
  };

  const handlePrev = () => {
    setNext(() => next - 1);
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        <img
          src={data[next].download_url}
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
