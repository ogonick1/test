import React, { useState } from "react";
import face from "../../assets/icon/girl-face.png";
import android from "../../assets/icon/android.svg";
import apple from "../../assets/icon/apple.svg";
import pc from "../../assets/icon/dwnpc.svg";
import Circle from "../Circle";
import Rating from "../Rating";
import "./index.scss";
import Hamburger from "../Hamburger";

const Banner = () => {
  const [rating, setRating] = useState(5);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const btnItems = [
    { icon: android, title: "Android" },
    { icon: apple, title: "IOS" },
    { icon: pc, title: "Download on PC" },
  ];
  const navigation = [
    { title: "Lorem Ipsum is simply dummy" },
    { title: "item" },
    { title: "item" },
    { title: "item" },
    { title: "item" },
  ];
  return (
    <section className="banner__container">
      <div className="banner__prod">
        <div className="banner__wrapper-info">
          <div className="banner__game">
            {" "}
            <img className="banner__game-img" src={face} alt="game-img" />
          </div>
          <div className="banner__wrapper-description">
            <div className="banner__description">
              Lorem Ipsum is simply dummy
            </div>
            <div className="banner__btn-container">
              {btnItems.map((i, index) => {
                return (
                  <button key={index} className="banner__btn">
                    <img
                      width={14}
                      height={14}
                      className="banner__btn-icon"
                      src={i.icon}
                      alt="icon-btn"
                    />
                    {i.title}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="banner__player-wrapper">
          <div className="banner__rating">
            6.4
            <Circle />
          </div>
          <div className="banner__player-info">
            <div className="banner__player-info-title">Players</div>
            <div className="banner__player-info-votes">12 votes</div>
            <div className="banner__player-info-rating">
              {" "}
              Your rating: &nbsp;
              <span className="banner__player-info-rating-gradient">
                {rating}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="hamburger-container">
        <p>More info</p>
        <Hamburger setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      </div>
      {isMenuOpen && (
        <div className="banner__navigation-link-mobile-container">
          <div className="banner__navigation-link-mobile">
            {navigation.map((i, index) => {
              return (
                <a key={index} href="#">
                  {i.title}
                </a>
              );
            })}
          </div>
        </div>
      )}
      <div className="banner__navigation">
        <div className="banner__navigation-link">
          {navigation.map((i, index) => {
            return (
              <a key={index} href="#">
                {i.title}
              </a>
            );
          })}
        </div>
        <Rating onRatingClick={setRating} />
      </div>
    </section>
  );
};

export default Banner;
