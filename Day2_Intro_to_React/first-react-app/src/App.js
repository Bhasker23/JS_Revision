import React from "react";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import Notes from "./components/Notes";

const appStyle = {
  border: "1px solid blue",
  padding: "5px",
  margin: "5px",
};
function App() {
  return (
    <div style={appStyle}>
      <Welcome anything={1} />
      <Counter />
      <p></p>
      <Welcome anything={2} />
      <Notes />
    </div>
  );
}

export default App;
