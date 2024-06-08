import * as React from "react";
import SuccessStoriesSvg from "../../../assets/svg/background.svg"; // Assuming your image path
import Person from "../../../assets/svg/person.svg";
import Star from "../../../assets/svg/star.svg";
import Clouds from "../../../assets/svg/clouds.svg";
import { useNavigate } from "react-router-dom";
import styles from "./Banner.scss";

const Banner = () => {
  const navigate = useNavigate();
  const imagesRef = React.useRef([]);
  React.useEffect(() => {
    // Function to add the 'active' class to each image with a delay
    const addActiveClassWithDelay = () => {
      imagesRef.current.forEach((image, index) => {
        setTimeout(() => {
          if (image) {
            image.classList.add("active");
          }
        }, (index + 1) * 3000); // Delay for each image by index * 1000 ms
      });
    };

    addActiveClassWithDelay();
  }, []);
  return (
    <section className="flex flex-col justify-center self-stretch w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-14 w-full min-h-[512px] max-md:px-5 max-md:max-w-full">
        <img
          alt="Background Image"
          src={SuccessStoriesSvg}
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative w-full max-w-[1030px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
              <div className="flex relative gap-3.5 items-start mt-5 text-white max-md:flex-wrap max-md:mt-10">
                <div className="flex flex-col grow shrink-0 self-end mt-6 w-fit max-md:max-w-full">
                  <h2 className="text-5xl font-medium capitalize max-md:max-w-full">
                    Pioneering the way forward to better decision making
                  </h2>
                  <p className="mt-5 text-lg max-md:max-w-full">
                    Expert knowledge and market insights into any industry in
                    every corner of the world
                  </p>
                  <button
                    className="justify-center self-center px-16 py-5 mt-20 text-2xl text-center rounded-lg  shadow-xl max-md:px-6 max-md:mt-10 dark-button"
                    onClick={() => {
                      const element = document.getElementById("page-top");
                      element?.scrollIntoView({
                        behavior: "smooth",
                      });
                      navigate("/success-stories");
                    }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="banner-image-stack">
                <img
                  src={Clouds}
                  alt="Image 1"
                  className="banner-stacked-image"
                  ref={(el) => (imagesRef.current[0] = el)}
                />
                <img
                  src={Person}
                  alt="Image 2"
                  className="banner-stacked-image"
                  ref={(el) => (imagesRef.current[1] = el)}
                />
                <img
                  src={Star}
                  alt="Image 3"
                  className="banner-stacked-image"
                  ref={(el) => (imagesRef.current[2] = el)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
