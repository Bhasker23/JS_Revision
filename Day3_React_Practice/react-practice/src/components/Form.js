import React, { useRef } from "react";

function Form() {
  let nameInputRef = useRef(null);
  let fruitSelectRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    // console.log("helo");
    // console.log(nameInputRef.current);
    let nameInputValue = nameInputRef.current.value;
    let fruitSelectValue = fruitSelectRef.current.value;

    alert(nameInputValue + " likes " + fruitSelectValue + " fruit");
  }

  function handleChange(event) {
    // console.log(event.target.value);
  }
  return (
    <form style={{ padding: "20px", margin: "20px" }}>
      <label htmlFor="name">Name </label>
      <input type="text" ref={nameInputRef} />
      <br></br>
      <select ref={fruitSelectRef} onChange={handleChange}>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>
      <br></br>
      <button onClick={handleSubmit}> Submit</button>
    </form>
  );
}

export default Form;
