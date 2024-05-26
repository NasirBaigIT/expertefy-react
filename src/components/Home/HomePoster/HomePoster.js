import React, { useEffect, useRef } from "react";
import styles from "./HomePoster.scss";

import left from "../../../assets/homePoster/leftBar.png";
import right from "../../../assets/homePoster/rightBar.png";
import main from "../../../assets/homePoster/topMask.png";

const HomePoster = () => {
  const imagesRef = useRef([]);
  useEffect(() => {
    // Function to add the 'active' class to each image with a delay
    const addActiveClassWithDelay = () => {
      imagesRef.current.forEach((image, index) => {
        setTimeout(() => {
          if (image) {
            image.classList.add("active");
          }
        }, index * 1000); // Delay for each image by index * 1000 ms
      });
    };

    addActiveClassWithDelay();
  }, []);
  return (
    <>
      <div className="expert-insights">
        <div className="image-section">
          <div className="image-stack">
            <img
              src={left}
              alt="Image 1"
              className="stacked-image"
              ref={(el) => (imagesRef.current[0] = el)}
            />
            <img
              src={main}
              alt="Image 2"
              className="stacked-image"
              ref={(el) => (imagesRef.current[1] = el)}
            />
            <img
              src={right}
              alt="Image 3"
              className="stacked-image"
              ref={(el) => (imagesRef.current[2] = el)}
            />
          </div>
        </div>
        <div className="text-section">
          <h1>
            Your <span className="highlight">Trusted</span> Partner for{" "}
            <span className="highlight">EXPERT</span> Insights
          </h1>
          <p>
            Connecting consultants and businesses with industry leaders for
            valuable market insights.
          </p>
          <div className="buttons">
            <button className="need-expert">Need An Expert</button>
            <button className="become-expert">Become An Expert</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePoster;
