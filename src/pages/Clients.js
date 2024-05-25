import React from "react";
import WhoWeWorkWithBlocks from "../components/Clients/WhoWeWorkWithBlocks";
import HowDoesItWork from "../components/Clients/HowDoesItWork";
import ScreeningProcess from "../components/Clients/ScreeningProcess";
import ClientsTestimonials from "../components/Home/Clients/clientsTestimonials";

const Clients = () => {
  return (
    <>
      <div className="flex flex-col items-center self-stretch px-5 pb-5 w-full bg-indigo-900 max-md:max-w-full">
        <div className="mt-9 text-4xl font-medium leading-10 text-center text-white capitalize w-[765px] max-md:max-w-full">
          Unlock extensive access to specialized market insights.
        </div>
        <div className="mt-5 text-md text-center text-gray-300 w-[936px] max-md:max-w-full">
          Our clients leverage our exclusive network of subject matter experts
          and our custom recruitment capabilities to access hard-to-reach market
          insights and achieve exceptional outcomes.
        </div>
      </div>
      <WhoWeWorkWithBlocks />
      <HowDoesItWork />
      <ScreeningProcess />
      <ClientsTestimonials />
      <div className="flex flex-col items-center px-5">
        <button
          className="justify-center items-center px-16 py-3 mt-12 bg-indigo-500 max-w-full text-3xl text-center text-white rounded-lg shadow-xl w-[398px] max-md:px-5 max-md:mt-10 max-md:text-4xl"
          onClick={() => console.log("clicked")}
        >
          Get Started!
        </button>
      </div>
    </>
  );
};

export default Clients;
