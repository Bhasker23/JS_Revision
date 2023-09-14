import React from "react";
import { useSelector } from "react-redux";

function Child2() {
  const message = useSelector((state) => state.messageReducer.message);

  return (
    <div>
      The Data from Child1 is showing in Child2 by Redux Libraray : {message}
    </div>
  );
}

export default Child2;
