import React from "react";
import "./index.scss";

const Circle = () => {
  return (
    <div className="circle">
      <svg
        width="86"
        height="86"
        viewBox="0 0 86 86"
        className="circular-progress"
      >
        <circle className="bg"></circle>
        <circle className="fg"></circle>
      </svg>
    </div>
  );
};

export default Circle;
