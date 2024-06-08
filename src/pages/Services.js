import React from "react";

import image1 from "../assets/services/1.png";
import image2 from "../assets/services/2.png";
import image3 from "../assets/services/3.png";
import image4 from "../assets/services/4.png";
import ServiceBlocks from "../components/Services/blocks";

const Services = () => {
  return (
    <>
      <div className="flex flex-col items-center self-stretch px-5 pb-5 w-full bg-dark-indigo max-md:max-w-full">
        <div className="mt-9 text-5xl font-medium leading-10 text-center text-white capitalize w-[765px] max-md:max-w-full">
          Harness the power of expert insights to propel your business forward
        </div>
        <div className="mt-5 text-lg text-center text-white w-[936px] max-md:max-w-full">
          Our network prioritizes quality and depth, serving as your gateway to
          unparalleled expertise. Utilize insights from our network to make
          informed decisions, gain a competitive advantage, and stay abreast of
          industry trends.
        </div>
        <div className="flex-wrap justify-center content-start mt-6 max-w-full w-[817px]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow py-0.5 text-lg font-medium text-center text-white capitalize max-md:mt-6">
                <img
                  loading="lazy"
                  src={image1}
                  className="self-center aspect-square w-[84px] shadow-xl"
                />
                <div className="mt-4">Access to top-tier expertise</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow py-0.5 text-lg font-medium text-center text-white capitalize max-md:mt-6">
                <img
                  loading="lazy"
                  src={image2}
                  className="self-center aspect-square w-[84px] shadow-xl"
                />
                <div className="mt-4">Customized & targeted research</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow py-0.5 text-lg font-medium text-center text-white capitalize max-md:mt-6">
                <img
                  loading="lazy"
                  src={image3}
                  className="self-center aspect-square w-[84px] shadow-xl"
                />
                <div className="mt-4">
                  list of available experts for review in 24h
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow py-0.5 text-lg font-medium text-center text-white capitalize max-md:mt-6">
                <img
                  loading="lazy"
                  src={image4}
                  className="self-center aspect-square w-[84px] shadow-xl"
                />
                <div className="mt-4">Confidentiality & anonymity</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServiceBlocks />
    </>
  );
};

export default Services;
