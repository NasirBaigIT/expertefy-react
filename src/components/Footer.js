import React from "react";
import styles from "../scss/Footer.scss";
import ticket from "../assets/footer/Ticket.png";
import trustpilot from "../assets/footer/trustpilot.svg";
import rating from "../assets/footer/rating.svg";
import location from "../assets/footer/location.svg";
import email from "../assets/footer/email.svg";
import phone from "../assets/footer/phone.svg";
import website from "../assets/footer/website.svg";
import linkedIn from "../assets/footer/linkedin.svg";
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
            src={trustpilot}
            className="shrink-0 aspect-[1.05] fill-emerald-400 w-[37px]"
          />
          <span className="flex-auto mt-3">Trustpilot</span>
        </div>
        <div className="flex flex-auto gap-5 mt-1.5 text-xl">
          <img
            alt="Trustpilot Rating"
            src={rating}
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
          src={location}
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
            src={email}
            className="shrink-0 w-6 aspect-square"
          />
          <span className="flex-auto underline">info@expertefy.com</span>
        </a>
        <a href="tel:+447360266340" className="flex gap-2">
          <img
            alt="Phone Icon"
            src={phone}
            className="shrink-0 w-6 aspect-square"
          />
          <span className="flex-auto">+447360266340</span>
        </a>
        <a href="https://expertefy.com" className="flex gap-2">
          <img
            alt="Website Icon"
            src={website}
            className="shrink-0 w-6 aspect-square"
          />
          <span className="flex-auto underline">expertefy.com</span>
        </a>
        <img
          alt="LinkedIn Icon"
          src={linkedIn}
          className="shrink-0 w-6 aspect-square"
        />
      </div>
      <div className="flex justify-center items-center self-stretch px-16 py-4 mt-4 w-full text-lg font-medium max-md:px-5 max-md:max-w-full bg-light-indigo">
        <span className="flex gap-2.5">
          <span className="text-center">
            <strong>Copyright</strong>
          </span>
          &copy;
          <span className="flex-auto">
            <strong>2024 expertefy.com</strong>
          </span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
