import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setMessage } from "../reduxFolder/Slice/MessageSlice";

function Child1() {
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    let inputTextValue = inputRef.current.value;
    console.log(inputTextValue);
    dispatch(setMessage(inputTextValue));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Child1;
