import React, { useState } from "react";
import searchIcon from "../../assets/icon/search.svg";
import logo1 from "../../assets/icon/mobile.svg";
import logo2 from "../../assets/icon/2.svg";
import logo3 from "../../assets/icon/android.svg";
import logo4 from "../../assets/icon/apple.svg";
import "./index.scss";
import Hamburger from "../Hamburger";

const Navigation = () => {
  const itemsNavigation = [1, 2, 3, 4, 5, 6];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const items = [
    { id: 1, title: "Menu item 1", icon: logo1 },
    { id: 2, title: "Menu item 2", icon: logo2 },
    { id: 3, title: "Menu item 3", icon: logo3 },
    { id: 4, title: "Menu item 4", icon: logo4 },
  ];
  return (
    <nav className="navigation__container">
      <div className="navigation__wrapper">
        <div className="navigation__logotype">LOGOTYPE</div>
        <Hamburger setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
        <div className="navigation__items">
          {itemsNavigation.map((i, index) => {
            return (
              <a className="navigation__item" key={index} href="#">
                Item
              </a>
            );
          })}
        </div>
      </div>
      <div className="navigation__input-container">
        <input
          className="navigation__input"
          type="text"
          placeholder="Search for..."
        />
        <img
          className="navigation__search-icon"
          src={searchIcon}
          alt="search icon"
        />
      </div>
      {isMenuOpen && (
        <div className="navigation__input-container-mobile">
          <input
            className="navigation__input-mobile"
            type="text"
            placeholder="Search for..."
          />
          <img
            className="navigation__search-icon"
            src={searchIcon}
            alt="search icon"
          />
        </div>
      )}
      {isMenuOpen && (
        <div className="navigation__mobile-menu">
          <div className="navigation__mobile-items">
            {itemsNavigation.map((i, index) => {
              return (
                <a className="navigation__mobile-item" key={index} href="#">
                  Item
                </a>
              );
            })}
          </div>
          <div>
            <div className="navigation__menu-items-container">
              {items.map((i) => {
                return (
                  <a key={i.id} href="#" className="navigation__menu-item">
                    <img
                      className="navigation__menu-item-icon"
                      src={i.icon}
                      alt="item icon"
                    />
                    <span className="navigation__menu-item-text">
                      {i.title}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
