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
                  <button className="justify-center self-center px-16 py-5 mt-20 text-2xl text-center rounded-lg shadow-xl max-md:px-6 max-md:mt-10 read-more-button">
                    Read More
                  </button>
                </div>
                <img
                  alt=""
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/11f3ec86e683c4a38112ead59bf5f4e853c6b458731e1c42b6e88a791b9364ee?apiKey=3756b57bedc84c2cbd55485bb12ec63c&"
                  className="shrink-0 self-start aspect-[4.17] fill-gray-200 w-[76px]"
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <img
                alt=""
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/04f7ec9cf316556b0b11a3c14c0ffd99ad05b56b0734d94884aec50a7bf740fd?apiKey=3756b57bedc84c2cbd55485bb12ec63c&"
                className="grow w-full aspect-[0.82] max-md:mt-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
