// src/components/BurgerMenu.js
import React from "react";
import "../scss/BurgerMenu.scss";

const BurgerMenu = ({ toggleMenu }) => {
  return (
    <div
      className="burger-menu flex mx-5 gap-5 items-center my-auto text-lg"
      onClick={toggleMenu}
    >
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
};

export default BurgerMenu;
