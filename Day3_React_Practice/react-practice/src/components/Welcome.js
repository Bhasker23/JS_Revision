import React from "react";

function Welcome() {
  let Welcomestyle = {
    textAlign: "center",
    margin: "2%",
    fontSize: "larger",
    fontFamily: "sans-serif",
    border: "1px solid blue",
    padding: "5px",
  };

  return <div style={Welcomestyle}>Welcome To React Practice App</div>;
}

export default Welcome;
