import { useState } from "react";

function Home() {
  const changeBgColor = () => {
    const colors = [
      "black",
      "blue",
      "red",
      "purple",
      "green",
      "yellow",
      "white",
      "orange",
    ];
    const index = Math.floor(Math.random() * 8);
    console.log(index);
    setbgColor(colors[index]);
  };
  const [bgColor, setbgColor] = useState("");

  return (
    <div
      className="home"
      style={{
        backgroundColor: bgColor,
      }}
    >
      <button onClick={() => changeBgColor()}>
        Click to change the color!
      </button>
    </div>
  );
}

export default Home;
