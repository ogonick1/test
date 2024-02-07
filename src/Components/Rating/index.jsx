import React, { useState } from "react";
import "./index.scss";

const Rating = ({ onRatingClick }) => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [gradientWidth, setGradientWidth] = useState(0);

  const handleHover = (index) => {
    setSelectedRating(index);
    setGradientWidth(((10 - index) / 10) * 100); // Залишок від 100%
  };

  const handleLeave = () => {
    setSelectedRating(null);
    setGradientWidth(0); // Скидаємо ширину градієнта
  };

  const handleClick = (index) => {
    if (onRatingClick) {
      onRatingClick(index);
    }
  };

  const renderRatingItems = () => {
    const ratingItems = [];
    for (let i = 1; i <= 10; i++) {
      ratingItems.push(
        <div
          key={i}
          className={`rating__item ${selectedRating && i > selectedRating ? "active" : ""}`}
          onMouseEnter={() => handleHover(i)}
          onMouseLeave={handleLeave}
          onClick={() => handleClick(i)}
        >
          {i}
        </div>,
      );
    }
    return ratingItems;
  };

  return (
    <div
      className="rating__container"
      style={{
        background: `linear-gradient(270deg, rgba(112, 112, 112, 0.15) ${gradientWidth}%, #fcc539 ${gradientWidth}%, #dc4a19 100%)`,
      }}
    >
      <div className="rating__item">Note</div>
      {renderRatingItems()}
    </div>
  );
};

export default Rating;
