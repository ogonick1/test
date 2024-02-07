import React from "react";
import "./index.scss";

const FooterLinks = ({ array, title }) => {
  return (
    <div className="link__container">
      <h6 className="link__title">{title}</h6>
      <ul className="link__wrapper">
        {array.map((i, index) => {
          return (
            <li className="link__item" key={index}>
              <a href={i.href}>{i.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterLinks;
