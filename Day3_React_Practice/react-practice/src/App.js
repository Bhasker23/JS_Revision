import React from "react";
import "./App.css";
import Card from "./components/Card";
import Welcome from "./components/Welcome";
import Form from "./components/Form";
import UseEffectHook from "./components/UseEffectHook";

function App() {
  return (
    <div>
      <Welcome />
      <Card />
      <Form />
      <UseEffectHook />
    </div>
  );
}

export default App;
