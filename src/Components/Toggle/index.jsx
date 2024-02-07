import React from "react";
import "./index.scss";

const Toggle = ({ value, onChange }) => (
  <label className="toggler__switch" htmlFor="toggler">
    <input
      id="toggler"
      type="checkbox"
      onClick={onChange}
      checked={value}
      readOnly
    />
    <span className="toggler__slider" />
    <span className="toggler__wave" />
  </label>
);

export default Toggle;
