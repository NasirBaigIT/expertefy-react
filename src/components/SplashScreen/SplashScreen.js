import React from "react";
import "./SplashScreen.css"; // Import the CSS file for styling

import loadingGif from "../../assets/loading.gif";

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <img src={loadingGif} alt="Loading" className="splash-gif" />
    </div>
  );
};

export default SplashScreen;
