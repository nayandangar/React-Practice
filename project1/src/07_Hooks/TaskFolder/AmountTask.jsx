// Task Name : When amount value is 5 then +1 and when we press button then number add +5

import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

export default function AmountTask() {
  let [amount, setamount] = useState(0);
  useEffect(() => {
    if (amount === 5) {
      setamount(amount + 1);
    }
  }, [amount]);
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundColor: "lightpink ",
        height: "700px",
      }}
    >
      <h1 className="text-light">amount is {amount}</h1>
      <Button color="danger" onClick={() => setamount(amount + 10)}>
        Incriment
      </Button>
    </div>
  );
}
