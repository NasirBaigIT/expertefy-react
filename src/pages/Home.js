import * as React from "react";
import "../index.css";
import HomePoster from "../components/Home/HomePoster/HomePoster";
import Offers from "../components/Home/Offers/offers";
import Form from "../components/Home/Form/form";
import ClientsTestimonials from "../components/Home/Clients/clientsTestimonials";
import ExpertTestimonials from "../components/Home/Experts/expertTestimonails";
import IndustryCapabilities from "../components/Home/Services/industryCapabilities";
import Banner from "../components/Home/Banner/banner";
import Advantage from "../components/Home/Advantage/Advantage";

function Home() {
  return (
    <div className="flex flex-col bg-white shadow-xl">
      <HomePoster />
      <main>
        <Offers />
        <Form />
        <ClientsTestimonials />
        <IndustryCapabilities />
        <ExpertTestimonials />
        <div className="mt-20">
          <Banner />
        </div>
        <Advantage />
      </main>
    </div>
  );
}

export default Home;
