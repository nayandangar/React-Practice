import React, { useState } from "react";
import { Button } from "reactstrap";
import Loader from "./Loader";
export default function ConditionalRender() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        <Loader />
      </div>
      <h1>Count is {count}</h1>
      {count === 0 ? (
        <h3>Number is Zero</h3>
      ) : count % 2 === 0 ? (
        <h3>Number is Even </h3>
      ) : (
        <h3>Number is Odd</h3>
      )}

      <Button onClick={() => setCount(count + 1)}>Incriment</Button>
    </div>
  );
}

// meaning of conditon 

// {count === 0 ? (zero) : count % 2 === 0 ? (even) : (odd )}