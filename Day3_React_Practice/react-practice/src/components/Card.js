import React, { useState } from "react";

function Card() {
  let cardContainerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gap: "10px",
  };

  let cardStle = {
    border: "1px solid black",
    textAlign: "center",
    padding: " 1em 1em 10em 1em",
    margin: "5%",
    justfyContent: "center",
  };

  let [count, setCount] = useState(0);

  function setCountNumber() {
    count = count + 1;
    setCount(count);
  }
  return (
    <div style={cardContainerStyle}>
      <div style={cardStle}>
        Card Count {count}
        <hr></hr>
        <button onClick={setCountNumber}>Increase Count</button>
      </div>
      <div style={cardStle}>Card</div>
      <div style={cardStle}>Card</div>
      <div style={cardStle}>Card</div>
    </div>
  );
}

export default Card;
