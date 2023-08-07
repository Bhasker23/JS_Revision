import React, { useEffect, useState } from "react";

function UseEffectHook() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("hello counter is ", counter);
  }, []);

  useEffect(() => {
    console.log("Count is ", counter);
  }, [counter]);
  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default UseEffectHook;
