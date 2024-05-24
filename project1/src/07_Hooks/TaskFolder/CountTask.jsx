// Task Name : When You Add five number then give the alert 

import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

export default function CountTask() {
    let [count, setCount] = useState(0);
    useEffect(() => {
       if (count > 0 && count % 5 === 0 ){
        alert("you have add five")
       }else{
        count
       }
      }, [count]);
    return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{
      backgroundColor:"darkcyan ",height:"700px"}}>
      <h1 className="text-white">Count is {count}</h1>
      <Button color="danger" onClick={() => setCount(++count)}>
        Incriment
      </Button>
    </div>
  )
}
