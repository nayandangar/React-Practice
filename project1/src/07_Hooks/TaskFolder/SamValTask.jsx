// Task Name : When You give Amount and Count value same then give me the alert Both Value are same 
import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

export default function SamValTask() {
  let [count, setCount] = useState(0);
  let [amt, setAmt] = useState(0);

  useEffect(() => {
    if (count && amt > 0 && count === amt) {
      alert("Both Value are Same  !!!");
    }
  }, [count, amt]);
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundColor: "darkcyan ",
        height: "700px",
      }}
    >
      <h1 className="text-white">Count is {count}</h1>
      <Button color="danger" onClick={() => setCount(++count)}>
        Add Number
      </Button>
      <hr />
      <h1 className="text-white">Amount is {amt}</h1>
      <Button color="danger" onClick={() => setAmt(++amt)}>
        Add Number
      </Button>
    </div>
  );
}
