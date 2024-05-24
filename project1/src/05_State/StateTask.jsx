//Counter task 
import React from "react";
import { useState } from "react";
import { Button } from "reactstrap";
const colors = ["red", "orange", "yellow", "blue", "black", "gray",'pink'];

export default function BgProjectWithContinueCounter() {
  let [counter, setCounter] = useState(0);
  let [lastColor, setlastColor] = useState(true);
  const ChangeIndex = () => {
    if(colors.length - 1 == counter){
      let continue_confirm = confirm('Do You want to  continue count...?');
      if(continue_confirm){
        setCounter(counter + 1);
        setlastColor(false);
      }else{
        setCounter(0);
      }
    }else{      
      setCounter(counter + 1);
    }
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "grid",
        placeContent: "center",
        backgroundColor: lastColor ? colors[counter] : colors[colors.length - 1],
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <h1>{counter}</h1>
        <Button onClick={ChangeIndex}>Color Change</Button>
      </div>
    </div>
  );
}