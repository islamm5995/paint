// src/components/Toolbar.js
import React from "react";
import "./Toolbar.css";

const Toolbar = ({ setColor, setLineWidth }) => {
  return (
    <div className="toolbar">
      <label className="label">
        Цвет кисти:
        <input
          type="color"
          onChange={(e) => setColor(e.target.value)}
          className="color-picker"
        />
      </label>
      <label className="label">
        Толщина кисти:
        <input
          type="range"
          min="1"
          max="20"
          onChange={(e) => setLineWidth(e.target.value)}
          className="slider"
        />
      </label>
    </div>
  );
};

export default Toolbar;
