import React, { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  function updateCount() {
    setCount(count + 1);
    console.log(count);
  }
  return (
    <>
      <p>The value of the count is : {count}</p>
      <button onClick={updateCount}> Increment</button>
    </>
  );
}

export default Counter;
