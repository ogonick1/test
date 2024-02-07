import React from "react";
import "./index.scss";

const Hamburger = ({ setIsMenuOpen, isMenuOpen }) => {
  return (
    <div
      className={`icon-one ${isMenuOpen ? "active-one" : ""}`}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <div className="hamburger hamburger-one "></div>
    </div>
  );
};

export default Hamburger;
