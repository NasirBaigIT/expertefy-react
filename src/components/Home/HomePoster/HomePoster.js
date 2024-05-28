import React, { useEffect, useRef } from "react";
import styles from "./HomePoster.scss";

import left from "../../../assets/homePoster/leftBar.png";
import right from "../../../assets/homePoster/rightBar.png";
import main from "../../../assets/homePoster/topMask.png";

const HomePoster = () => {
  const imagesRef = useRef([]);
  const textRef = useRef([]);
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
      textRef.current.forEach((text, index) => {
        setTimeout(() => {
          if (text) {
            text.classList.add("active");
          }
        }, index * 500); // Delay for each image by index * 1000 ms
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
          <div className="mx-auto font-medium text-indigo-500 capitalize leading-[64px] max-w-[300px]">
            <span
              className="text-5xl font-light fading"
              ref={(el) => (textRef.current[0] = el)}
            >
              Your
            </span>{" "}
            <br />
            <span
              className="text-7xl text-indigo-900 fading"
              ref={(el) => (textRef.current[1] = el)}
            >
              Trusted
            </span>
            <br />
            <span
              className="text-6xl font-light text-indigo-500 leading-[56px] fading"
              ref={(el) => (textRef.current[2] = el)}
            >
              Partner{" "}
            </span>
            <span
              className="text-4xl font-light lowercase leading-[56px] fading"
              ref={(el) => (textRef.current[3] = el)}
            >
              for
            </span>
            <br />
            <span
              className="text-7xl text-indigo-900 uppercase fading"
              ref={(el) => (textRef.current[4] = el)}
            >
              Expert
            </span>
            <br />
            <span
              className="text-6xl font-light leading-[54px] fading"
              ref={(el) => (textRef.current[5] = el)}
            >
              Insights
            </span>
            <br />
            <span
              className="mx-auto text-sm font-light fading below-text max-w-[300px]"
              ref={(el) => (textRef.current[6] = el)}
            >
              Connecting consultants and businesses with industry leaders for
              valuable market insights.
            </span>
          </div>
          <div
            className="buttons mx-auto fading"
            ref={(el) => (textRef.current[7] = el)}
          >
            <button className="need-expert">Need An Expert</button>
            <button className="become-expert">Become An Expert</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePoster;
