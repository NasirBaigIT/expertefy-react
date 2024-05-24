// src/components/BurgerMenu.js
import React from 'react';
import '../scss/BurgerMenu.scss'

const BurgerMenu = ({ toggleMenu }) => {
    return (
        <div className="burger-menu" onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
    );
};

export default BurgerMenu;
