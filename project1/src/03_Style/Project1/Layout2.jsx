import React from "react";
import "./Lstyle.css";
import Header2 from "./Header2";
import Footer from "./Footer";
// import Box1 from "./Box1";


export default function Layout2(){
    return(
   <div>
    {/* header */}
   <Header2 />
   {/* Section1 */}
   <div style={{
          height: "100px",
          alignContent: "center",
          backgroundColor: "lightgray",
          padding: "10px",
          textAlign: "center",
        }}>
      <h2 style={{paddingTop:"40px"}}>
        Header / Banner
      </h2></div><br />
      <div style={{
          height: "100px",
          alignContent: "center",
          backgroundColor: "lightgray",
          padding: "10px",
          textAlign: "center",
        }}>
      <h2 style={{paddingTop:"40px"}}>
        Intro Text Area
      </h2></div><br />
   {/* Box-section */}
       <div style={{ display: "grid",display:"flex",gap:"15px",justifyContent:"space-between",alignItems:"center" }}>
       <div  style={{ height: "400px", width: "350px", backgroundColor: "lightgray" }} >
      <h1 style={{textAlign:"center",paddingTop:"200px"}}>Box1</h1>
    </div>
    <div  style={{ height: "400px", width: "350px", backgroundColor: "lightgray" }} >
      <h1 style={{textAlign:"center",paddingTop:"200px"}}>Box2</h1>
    </div>
    <div  style={{ height: "400px", width: "350px", backgroundColor: "lightgray" }} >
      <h1 style={{textAlign:"center",paddingTop:"200px"}}>Box3</h1>
    </div>
       {/* <Box1 /> */}
       {/* <Box1 /> */}
       {/* <Box1 /> */}
       </div><br />
       <Footer />

   </div>
    )
}
