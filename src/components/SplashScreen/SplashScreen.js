import React from "react";
import "./SplashScreen.css"; // Import the CSS file for styling

import loadingGif from "../../assets/loader/loading.gif";
import frame1 from "../../assets/loader/frame1.png";
import frame2 from "../../assets/loader/frame2.png";

const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <img src={loadingGif} alt="Loading" className="splash-gif" />
    </div>
  );
};

export default SplashScreen;
