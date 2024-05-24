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

// function Header() {
//   return (
//     <header className="flex gap-5 justify-between self-center w-full max-w-[1120px] max-md:flex-wrap max-md:max-w-full">
//       <div className="flex gap-2 px-5 text-xl font-semibold text-indigo-500 whitespace-nowrap">
//         <img
//           alt="Expertefy Logo"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/7be36607d5c66be3bfb7649f4b238274d4d8c5f2273844d07bd86d5bbdf2a4f3?apiKey=3756b57bedc84c2cbd55485bb12ec63c&"
//           className="shrink-0 aspect-[1.04] w-[57px]"
//         />
//         <span className="flex-auto my-auto">EXPERTEFY</span>
//       </div>
//       <nav className="flex gap-5 items-center px-5 my-auto text-lg text-indigo-900 max-md:flex-wrap">
//         <a href="#services" className="grow self-stretch my-auto">
//           Services
//         </a>
//         <a href="#clients" className="self-stretch my-auto">
//           Clients
//         </a>
//         <a href="#experts" className="self-stretch my-auto">
//           Experts
//         </a>
//         <a href="#success" className="flex-auto self-stretch my-auto">
//           Success Stories
//         </a>
//         <a href="#about" className="self-stretch my-auto">
//           About Us
//         </a>
//         <a href="#contact" className="self-stretch my-auto">
//           Contact Us
//         </a>
//         <img
//           alt="Menu Icon"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/210be32a2c0f8d8011df312d01652e6db5e2b5404c7b11f4a1be06802cc962d3?apiKey=3756b57bedc84c2cbd55485bb12ec63c&"
//           className="shrink-0 self-stretch w-6 aspect-square"
//         />
//       </nav>
//     </header>
//   );
// }

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
        <Banner />
        <Advantage />
      </main>
    </div>
  );
}

export default Home;
