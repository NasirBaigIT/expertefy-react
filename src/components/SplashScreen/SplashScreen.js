import React, { useEffect, useRef } from "react";
import "./SplashScreen.css"; // Import the CSS file for styling

import loadingGif from "../../assets/loader/test2.gif";

const SplashScreen = () => {
  const imagesRef = useRef();
  const divRef = useRef();
  useEffect(() => {
    const timer = setTimeout(() => {
      imagesRef.current.src = null;
      divRef.current.style.backgroundColor = "white";
    }, 2350); // Change the timeout duration as needed
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="splash-screen" ref={(el) => (divRef.current = el)}>
      <img
        src={loadingGif}
        alt=""
        className="splash-gif"
        ref={(el) => (imagesRef.current = el)}
      />
    </div>
  );
};

export default SplashScreen;
