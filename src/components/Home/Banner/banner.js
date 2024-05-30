import * as React from "react";
import SuccessStoriesSvg from "../../../assets/svg/SuccessStories.svg"; // Assuming your image path

const Banner = () => {
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
                  <button className="justify-center self-center px-16 py-5 mt-20 text-2xl text-center rounded-lg shadow-xl max-md:px-6 max-md:mt-10 dark-button">
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
