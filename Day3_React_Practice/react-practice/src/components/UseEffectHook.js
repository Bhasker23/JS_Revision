import React, { useEffect, useState } from "react";

function UseEffectHook() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Bhasker");

  //  This will render once only, and it the first function of this page when this UseEffectHook function is loaded.
  // at the end of use effect the square bracket uses are called as dependency.
  useEffect(() => {
    console.log("hello Mera name mu mu mu ", counter);
  }, []);

  //  This useEffect will run everytime when any updation will happens on the name varible and for tellig
  // this thing to our application, we use [name] at the end of below useEffect() method.
  useEffect(() => {
    console.log("Count is ", counter);
    console.log("Name is  ", name);
  }, [counter, name]);

  useEffect(() => {
    console.log("no dependency added");
    return () => {
      console.log("unmount");
    };
  });

  return (
    <div>
      <p>{counter}</p>
      <p>{name}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
          setName(name + " Shrimali");
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default UseEffectHook;
