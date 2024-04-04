import React from "react";
import "./Lstyle.css";
import Header1 from "./Header1";
import Footer from "./Footer";

export default function Layout1() {
  return (
    <div>
     <Header1 /><br />
     <h2
          style={{
            backgroundColor: "lightgray",
            padding: "10px",
            textAlign: "center",
          }}
        >
          Navigation
        </h2>
      <br />
      <div>
      <h2
        style={{
          height: "100px",
          alignContent: "center",
          backgroundColor: "lightgray",
          padding: "10px",
          textAlign: "center",
        }}
      >
        Header / Banner
      </h2></div>
      <br />
        <div style={{display: "flex", gap: "20px",alignItems:"center"}}>
        <div style={{ 
            height: "400px",
            flex: "1",
            justifyContent:"center",
            textAlign:"center",
            backgroundColor: "lightgray",
          }}>
        <h1 style={{paddingTop:"180px"}}>
          Sidebar
        </h1></div>
        <div style={{
            height: "400px",
            flex: "5",
            justifyContent:"center",
            alignItems: "center",
            textAlign: "center",
            backgroundColor: "lightgray",
          }} ><h1 style={{paddingTop:"180px"}}>
          Body Area
        </h1>
        </div>
      </div>
      <br />
      <Footer />
      </div>
      
  );
}
