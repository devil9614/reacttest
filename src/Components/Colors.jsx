import React from "react";

const Colors = ({ color, setColor }) => {
  return (
    <div
      style={{
        cursor: "pointer",
        backgroundColor: color,
        padding: "1rem",
        color: "white",
        border: "1px solid #ccc",
      }}
      onClick={() => setColor(color)}>
      {color}
    </div>
  );
};

export default Colors;
