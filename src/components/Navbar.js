import React, { useState } from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import "../scss/Navbar.scss";
import "../scss/BurgerMenu.scss"; // Import the styles for BurgerMenu
import expertefyText from "../assets/svg/expertefy_text.svg";
import expertefyLogo from "../assets/svg/logo.svg";
import LinkdinLogo from "../assets/svg/linkdin.svg";

const Navbar = () => {
  const [isMobile, setIsMobile] = React.useState(6);

  React.useEffect(() => {
    const updateMobile = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      setIsMobile(isMobile);
    };

    // Set initial chunk size
    updateMobile();

    // Add event listener to update chunk size on screen resize
    window.addEventListener("resize", updateMobile);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateMobile);
    };
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`flex gap-5 ${isMobile ? "justify-between items-center" : "justify-center self-center"} max-md:flex-wrap max-md:max-w-full`}
    >
      <div className="flex gap-2 px-5 text-xl font-semibold text-indigo-500 whitespace-nowrap">
        <img
          alt="Expertefy Logo"
          src={expertefyLogo}
          className="shrink-0 aspect-[1.04] w-[57px]"
        />
        <span className="my-auto hidden md:block">
          <img src={expertefyText} alt="Expertefy" />
        </span>
      </div>
      <BurgerMenu toggleMenu={toggleMenu} isOpen={isOpen} />
      <nav
        className={`flex gap-5 items-center my-auto text-lg text-indigo-900 max-md:flex-col max-md:items-start max-md:w-full ${
          isOpen ? "block" : "hidden"
        } md:flex md:gap-5`}
      >
        <Link
          to="/"
          className={`self-stretch my-auto ${isMobile ? "mx-auto" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/services"
          className={`self-stretch my-auto ${isMobile ? "mx-auto" : ""}`}
        >
          Services
        </Link>
        <Link
          to="/clients"
          className={`self-stretch my-auto ${isMobile ? "mx-auto" : ""}`}
        >
          Clients
        </Link>
        <Link
          to="/experts"
          className={`self-stretch my-auto ${isMobile ? "mx-auto" : ""}`}
        >
          Experts
        </Link>
        <Link
          to="/success-stories"
          className={`self-stretch my-auto ${isMobile ? "mx-auto" : ""}`}
        >
          Success Stories
        </Link>
        {/* <Link to="/about-us" className={`self-stretch my-auto`}>
          About Us
        </Link>
        <Link to="/contact-us" className={`self-stretch my-auto`}>
          Contact Us
        </Link> */}
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`self-stretch my-auto ${isMobile ? "mx-auto" : ""}`}
        >
          <img src={LinkdinLogo} alt="LinkedIn" />
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
