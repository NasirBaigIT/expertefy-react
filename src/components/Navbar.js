// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import BurgerMenu from './BurgerMenu';
// import '../scss/Navbar.scss';
// import expertefyText from '../assets/svg/expertefy_text.svg';
// import expertefyLogo from '../assets/svg/logo.svg';
// import LinkdinLogo from '../assets/svg/linkdin.svg';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="nav-logo">
//       <img src={expertefyLogo} alt="Logo" />
//         <span><img src={expertefyText} alt="Expertefy" /></span>
//       </div>
//       <ul className={`nav-links ${isOpen ? 'nav-active' : ''}`}>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/services">Services</Link></li>
//         <li><Link to="/clients">Clients</Link></li>
//         <li><Link to="/experts">Experts</Link></li>
//         <li><Link to="/success-stories">Success Stories</Link></li>
//         <li><Link to="/about-us">About Us</Link></li>
//         <li><Link to="/contact-us">Contact Us</Link></li>
//         <li>
//           <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//             <img src={LinkdinLogo} alt="LinkedIn" />
//           </a>
//         </li>
//       </ul>
//       <BurgerMenu toggleMenu={toggleMenu} />
//     </nav>
//   );
// };

// export default Navbar;



// function Header() {
//   return (
//     <header className="flex gap-5 justify-between self-center w-full max-w-[1120px] max-md:flex-wrap max-md:max-w-full">
//       <div className="flex gap-2 px-5 text-xl font-semibold text-indigo-500 whitespace-nowrap">
//         <img
//           alt="Expertefy Logo"
//           src={expertefyLogo}
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


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BurgerMenu from './BurgerMenu';
import '../scss/Navbar.scss';
import expertefyText from '../assets/svg/expertefy_text.svg';
import expertefyLogo from '../assets/svg/logo.svg';
import LinkdinLogo from '../assets/svg/linkdin.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex gap-5 justify-between self-center w-full max-w-[1120px] max-md:flex-wrap max-md:max-w-full">
      <div className="flex gap-2 px-5 text-xl font-semibold text-indigo-500 whitespace-nowrap">
        <img
          alt="Expertefy Logo"
          src={expertefyLogo}
          className="shrink-0 aspect-[1.04] w-[57px]"
        />
        <span className="flex-auto my-auto">
          <img src={expertefyText} alt="Expertefy" />
        </span>
      </div>
      <nav className={`flex gap-5 items-center px-5 my-auto text-lg text-indigo-900 max-md:flex-wrap ${isOpen ? 'nav-active' : ''}`}>
        <Link to="/" className="grow self-stretch my-auto">
          Home
        </Link>
        <Link to="/services" className="self-stretch my-auto">
          Services
        </Link>
        <Link to="/clients" className="self-stretch my-auto">
          Clients
        </Link>
        <Link to="/experts" className="self-stretch my-auto">
          Experts
        </Link>
        <Link to="/success-stories" className="self-stretch my-auto">
          Success Stories
        </Link>
        <Link to="/about-us" className="self-stretch my-auto">
          About Us
        </Link>
        <Link to="/contact-us" className="self-stretch my-auto">
          Contact Us
        </Link>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="self-stretch my-auto">
          <img src={LinkdinLogo} alt="LinkedIn" />
        </a>
        <BurgerMenu toggleMenu={toggleMenu} />
      </nav>
    </header>
  );
};

export default Navbar;

