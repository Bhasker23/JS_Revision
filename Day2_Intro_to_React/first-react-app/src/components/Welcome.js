import React, { useState } from "react";

function Welcome(props) {
  let [welcomecount, setWelcomeCount] = useState(1);

  function setCount() {
    setWelcomeCount(welcomecount + 1);
  }

  return <p onLoad={setCount}>Welcome to React App {props.anything} Time </p>;
}

export default Welcome;
