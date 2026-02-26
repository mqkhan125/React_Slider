import React, { useState } from "react";
import data from "./JsonData.json";

const Slider = () => {
  console.log(data[0].download_url);
  
  const [next , setNext] = useState()

 

  return (
    <>
      <div class="container">
        <div class="slider">
          <img src={data[0].download_url} alt="" />
        </div>
        <div class="btns">
          <button class="prevBtn" onclick="nextBtnFunc()">
            {"<"}
          </button>
          <button class="nextBtn" onClick={handleNext}>
            {">"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
