import React from "react";
import "./Index.css";

export default function StyleCom() {
  let color = "black";
  return (
    <div>
      <div style={{ backgroundColor: "red", height: "100px" }}>Header</div>
      <br />
      <div className="bodyDiv">Body</div><br />
      <div style={{  backgroundColor: color, height: "100px"}}>Footer</div>
    </div>
  );
}
