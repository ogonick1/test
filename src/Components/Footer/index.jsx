import React from "react";
import facebook from "../../assets/icon/footer/facebook.svg";
import twitter from "../../assets/icon/footer/twitter.svg";
import instagram from "../../assets/icon/footer/instagram.svg";
import youtube from "../../assets/icon/footer/youtube.svg";
import union from "../../assets/icon/footer/Union.svg";
import vector from "../../assets/icon/footer/Vector.svg";
import "./index.scss";
import FooterLinks from "../FooterLinks";

const Footer = () => {
  const socialIcons = [
    { icon: facebook, alt: "facebook" },
    { icon: twitter, alt: "twitter" },
    { icon: instagram, alt: "instagram" },
    { icon: youtube, alt: "youtube" },
    { icon: union, alt: "union" },
    { icon: vector, alt: "vector" },
  ];

  const linkItems = [
    { title: "item 1", href: "#" },
    { title: "item 2", href: "#" },
    { title: "item 3", href: "#" },
    { title: "item 4", href: "#" },
    { title: "item 5", href: "#" },
    { title: "item 6", href: "#" },
  ];
  const linkItems2 = [
    { title: "item 1", href: "#" },
    { title: "item 2", href: "#" },
    { title: "item 3", href: "#" },
    { title: "item 4", href: "#" },
    { title: "item 5", href: "#" },
  ];
  const linkItems3 = [
    { title: "link", href: "#" },
    { title: "link", href: "#" },
    { title: "link", href: "#" },
    { title: "link", href: "#" },
    { title: "link", href: "#" },
  ];
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo-wrapper">
          <p className="footer__logo">Logotype</p>
          <p className="footer__logo-description">
            Lorem Ipsum is simply dummy
          </p>
          <p className="footer__logo-description">
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five
          </p>
          <ul className="footer__icons-wrapper">
            {socialIcons.map((i, index) => {
              return (
                <li className="footer__icon" key={index}>
                  <a href="#">
                    {" "}
                    <img
                      width={18}
                      height={18}
                      src={i.icon}
                      alt={i.alt}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer__section-links">
          <div className="footer__section-links-wrapper">
            <FooterLinks title="Category" array={linkItems} />
            <FooterLinks title="Play better" array={linkItems2} />
            <FooterLinks title="Useful links" array={linkItems3} />
          </div>
          <p className="footer__section-links-description">
            Copyright © 2024. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
