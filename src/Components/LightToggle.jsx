import React from "react";

const LightToggle = ({ data, setTextColor, setColor }) => {
  return (
    <div
      style={{
        backgroundColor: data.textColor,
        color: data.color,
        padding: "1rem",
        border: "1px solid #ccc",
        cursor: "pointer",
      }}
      onClick={() => {
        setColor(data.color);
        setTextColor(data.textColor);
      }}>
      {data.title}
    </div>
  );
};

export default LightToggle;
