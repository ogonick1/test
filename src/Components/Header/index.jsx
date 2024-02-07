import React from "react";
import { ThemeContext, themes } from "../../context/ThemeContext";
import Toggle from "../Toggle";
import logo1 from "../../assets/icon/mobile.svg";
import logo2 from "../../assets/icon/2.svg";
import logo3 from "../../assets/icon/android.svg";
import logo4 from "../../assets/icon/apple.svg";
import icon1 from "../../assets/icon/footer/facebook.svg";
import icon2 from "../../assets/icon/footer/twitter.svg";
import icon3 from "../../assets/icon/footer/instagram.svg";
import icon4 from "../../assets/icon/Subtract.svg";
import icon5 from "../../assets/icon/gogledoc.svg";
import icon6 from "../../assets/icon/Vector.svg";
import facebook from "../../assets/icon/social/facebook.png";
import twitter from "../../assets/icon/social/twitter.png";
import telegram from "../../assets/icon/social/telegram.png";
import picso from "../../assets/icon/social/picso.png";
import robot from "../../assets/icon/social/robot.png";
import heart from "../../assets/icon/social/heart.png";
import "./index.scss";

const Header = () => {
  const socialIconScroll = [
    { id: 1, icon: facebook },
    { id: 2, icon: twitter },
    { id: 3, icon: telegram },
    { id: 4, icon: picso },
    { id: 5, icon: robot },
    { id: 6, icon: heart },
  ];
  const items = [
    { id: 1, title: "Menu item 1", icon: logo1 },
    { id: 2, title: "Menu item 2", icon: logo2 },
    { id: 3, title: "Menu item 3", icon: logo3 },
    { id: 4, title: "Menu item 4", icon: logo4 },
  ];

  const iconsSocial = [
    { id: 1, icon: icon1, alt: "facebook" },
    { id: 2, icon: icon2, alt: "twitter" },
    { id: 3, icon: icon3, alt: "telegram" },
    { id: 4, icon: icon4, alt: "picso" },
    { id: 5, icon: icon5, alt: "robot" },
    { id: 6, icon: icon6, alt: "heart" },
  ];
  return (
    <header className="header">
      <ul className="header__social">
        {socialIconScroll.map((i) => {
          return (
            <li key={i.id} className="header__social-item">
              <a href="#">
                <img src={i.icon} alt={i.alt} />
              </a>
            </li>
          );
        })}
      </ul>
      <div className="header__container">
        <div className="header__menu-items-container">
          {items.map((i) => {
            return (
              <a key={i.id} href="#" className="header__menu-item">
                <img
                  className="header__menu-item-icon"
                  src={i.icon}
                  alt="item icon"
                />
                <span className="header__menu-item-text">{i.title}</span>
              </a>
            );
          })}
        </div>
        <div className="header__links-container">
          <ul className="header__links-icon-container">
            {iconsSocial.map((item) => {
              return (
                <li key={item.id}>
                  <a className="header__links-item" href="#">
                    {" "}
                    <img
                      className="header__links-icon"
                      src={item.icon}
                      alt="social-icon"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="header__switch-button">
            <ThemeContext.Consumer>
              {({ theme, setTheme }) => (
                <Toggle
                  onChange={() => {
                    if (theme === themes.light) setTheme(themes.dark);
                    if (theme === themes.dark) setTheme(themes.light);
                  }}
                  value={theme === themes.dark}
                />
              )}
            </ThemeContext.Consumer>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
