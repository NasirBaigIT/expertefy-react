import React from "react";
import WhoWeWorkWithBlocks from "../components/Clients/WhoWeWorkWithBlocks";
import HowDoesItWork from "../components/Clients/HowDoesItWork";
import ScreeningProcess from "../components/Clients/ScreeningProcess";
import ClientsTestimonials from "../components/Home/Clients/clientsTestimonials";
import Header from "../components/Clients/Header";
import Reveal from "../components/Reveal";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Clients = () => {
  const navigate = useNavigate();
  const title = "Unlock extensive access to specialized market insights.";
  const description =
    "Our clients leverage our exclusive network of subject matter experts and our custom recruitment capabilities to access hard-to-reach market insights and achieve exceptional outcomes.";
  return (
    <>
      <Header title={title} description={description} />
      <Reveal>
        <WhoWeWorkWithBlocks />
      </Reveal>
      <Reveal>
        <HowDoesItWork />
      </Reveal>
      <Reveal>
        <ScreeningProcess />
      </Reveal>
      <Reveal>
        <ClientsTestimonials />
      </Reveal>
      <div className="flex flex-col items-center px-5 lg:mb-32 max-md:mb-16">
        <button className="justify-center items-center px-16 py-3 mt-12 dark-button max-w-full text-3xl text-center text-white rounded-lg  shadow-xl w-[398px] max-md:px-5 max-md:mt-10 max-md:text-4xl">
          <HashLink smooth to="/#need-an-expert-form">
            Get Started!
          </HashLink>
        </button>
      </div>
    </>
  );
};

export default Clients;
