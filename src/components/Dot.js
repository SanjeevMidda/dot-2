import React, { useState } from "react";

const Dot = () => {
  let colors = [
    "red",
    "blue",
    "white",
    "grey",
    "orange",
    "pink",
    "purple",
    "green",
    "brown",
    "black",
    "gold",
    "yellow",
  ];

  let randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  let randomLocation = () => {
    return Math.floor(Math.random() * 90);
  };

  const [color, setColor] = useState([randomColor(), randomColor()]);
  const [location, setLocation] = useState([
    randomLocation(),
    randomLocation(),
  ]);

  let styles = {
    background: `linear-gradient(${color[0]}, ${color[1]})`,
    position: "absolute",
    left: `${location[0]}%`,
    top: `${location[1]}%`,
  };

  return (
    <div
      className="dot"
      style={styles}
      onClick={() => setLocation([randomLocation(), randomLocation()])}
    ></div>
  );
};

export default Dot;
