import React from "react";
import styles from "../scss/Footer.scss";
import ticket from "../assets/footer/Ticket.png";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center self-stretch pt-4 w-full text-white bg-dark-indigo max-md:mt-10 max-md:max-w-full">
      <img
        alt="Expertefy Logo"
        src={ticket}
        className="z-10 mt-0 max-w-full w-[748px] margin-top--5"
      />
      <div className="flex gap-5 items-start justify-center mt-2 max-w-full text-center w-[755px] max-md:flex-wrap">
        <div className="flex gap-2 text-3xl font-medium whitespace-nowrap">
          <img
            alt="Trustpilot Logo"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bde7374a7dae77ec453e5c0a27982f886c4efa113de86123711de2066601277e?apiKey=3756b57bedc84c2cbd55485bb12ec63c&"
            className="shrink-0 aspect-[1.05] fill-emerald-400 w-[37px]"
          />
          <span className="flex-auto mt-3">Trustpilot</span>
        </div>
        <div className="flex flex-auto gap-5 mt-1.5 text-xl">
          <img
            alt="Trustpilot Rating"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b1f48573c2e7c62cb6d8c835a6051c69e29d0ff0053c0076c6bad4a624cd21b?apiKey=3756b57bedc84c2cbd55485bb12ec63c&"
            className="shrink-0 max-w-full aspect-[5.88] w-[212px]"
          />
          <span className="flex-auto self-start mt-2.5">
            Trust Score{" "}
            <span className="text-2xl font-medium text-emerald-400">4.5</span> |{" "}
            <span className="text-2xl font-medium">300</span> reviews
          </span>
        </div>
      </div>
      <h2 className="mt-10 text-xl font-medium text-center uppercase max-md:max-w-full w-[755px]">
        <span className="uppercase">Expertefy</span> - Your Trusted Partner for
        Expert Insights
        <span>
          Connecting you to top-tier professionals across diverse industries.
        </span>
      </h2>
      <div className="flex gap-2 mt-7 text-lg font-medium">
        <img
          alt="Location Icon"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fa874f95b005b2d3bddbf416ee02636c6f8d472c9b0488dc6fcbd5963fd6fbe?apiKey=3756b57bedc84c2cbd55485bb12ec63c&"
          className="shrink-0 w-6 aspect-square"
        />
        <address className="flex-auto max-md:max-w-full">
          12 Swan Close, Washwood Heath Birmingham, B8 2XN United Kingdom
        </address>
      </div>
      <div className="flex gap-5 justify-between mt-6 max-w-full text-lg font-medium whitespace-nowrap w-[715px] max-md:flex-wrap">
        <a href="mailto:info@expertefy.com" className="flex gap-2">
          <img
            alt="Email Icon"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/52d0c2fbaeacc1350cbba37867d7fe9620b457f9049708a97018694992ae984d?apiKey=3756b57bedc84c2cbd55485bb12ec63c&"
            className="shrink-0 w-6 aspect-square"
          />
          <span className="flex-auto underline">info@expertefy.com</span>
        </a>
        <a href="tel:+447360266340" className="flex gap-2">
          <img
            alt="Phone Icon"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8858a441446cf826645dcb794dac7ce8864f1b939fe7ce7c979601b990b6ee2?apiKey=3756b57bedc84c2cbd55485bb12ec63c&"
            className="shrink-0 w-6 aspect-square"
          />
          <span className="flex-auto">+447360266340</span>
        </a>
        <a href="https://expertefy.com" className="flex gap-2">
          <img
            alt="Website Icon"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/91cae5f1c712e4beb31eadb7a45a605f8ba926a24891998d14bac36990aad666?apiKey=3756b57bedc84c2cbd55485bb12ec63c&"
            className="shrink-0 w-6 aspect-square"
          />
          <span className="flex-auto underline">expertefy.com</span>
        </a>
        <img
          alt="LinkedIn Icon"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee0a53010da883e55baf968de0335c00bc3a65e077b43374fcad82878404daf3?apiKey=3756b57bedc84c2cbd55485bb12ec63c&"
          className="shrink-0 w-6 aspect-square"
        />
      </div>
      <div className="flex justify-center items-center self-stretch px-16 py-4 mt-4 w-full text-lg font-medium max-md:px-5 max-md:max-w-full bg-light-indigo">
        <span className="flex gap-2.5">
          <span className="text-center">
            <strong>Copyright</strong>
          </span>
          <img
            alt="Copyright Icon"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a9951ebc6b4a9e2b4526a36ae5de0ecbc73ea5f8c8ba811d5f0e6eb44043fd2?apiKey=3756b57bedc84c2cbd55485bb12ec63c&"
            className="shrink-0 w-5 aspect-square fill-white"
          />
          <span className="flex-auto">
            <strong>2024 expertefy.com</strong>
          </span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
