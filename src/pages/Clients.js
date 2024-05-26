import React from "react";
import WhoWeWorkWithBlocks from "../components/Clients/WhoWeWorkWithBlocks";
import HowDoesItWork from "../components/Clients/HowDoesItWork";
import ScreeningProcess from "../components/Clients/ScreeningProcess";
import ClientsTestimonials from "../components/Home/Clients/clientsTestimonials";
import Header from "../components/Clients/Header";

const Clients = () => {
  const title = "Unlock extensive access to specialized market insights.";
  const description =
    "Our clients leverage our exclusive network of subject matter experts and our custom recruitment capabilities to access hard-to-reach market insights and achieve exceptional outcomes.";
  return (
    <>
      <Header title={title} description={description} />
      <WhoWeWorkWithBlocks />
      <HowDoesItWork />
      <ScreeningProcess />
      <ClientsTestimonials />
      <div className="flex flex-col items-center px-5 mb-12">
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
