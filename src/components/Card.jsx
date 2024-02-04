import React, { useState } from "react";

export const Card = ({ character }) => {
  const [isRotated, setIsRotated] = useState(false);

  const handleImageClick = () => {
    setIsRotated(!isRotated);
  };

  const rotationStyle = {
    transform: isRotated ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease",
  };

  return (
    <div>
      <img
        src={character.image}
        alt=""
        style={rotationStyle}
        onClick={handleImageClick}
      />
    </div>
  );
};
