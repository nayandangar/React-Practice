import React from 'react'
import "./Lstyle.css";
import Header1 from './Header1';

export default function Layout3() {
  return (
    <div>
        <Header1 />
        <br />
        <div style={{display:"flex",gap:"20px",height:"150px"}}>
            <h2 style={{width:"200px",padding:"25px"}}>Side bar <br /> Navigation</h2>
            <h2 div style={{flex:"2",
          height: "100px",
          paddingTop:"50px",
          backgroundColor: "lightgray",
          textAlign: "center",
        }}>Header / Banner</h2>
        </div>
        <br />
        <div style={{display:"flex",gap:"20px"}}>
            <div style={{height:"400px",width:"250px",padding:"25px"}}></div>
            <div style={{height:"400px", backgroundColor:"lightgray",width:"100%",paddingTop:"20px"}}>
                <h1 style={{textAlign:"center",paddingTop:"150px"}}>Body Area</h1>
            </div>
        </div>
        <Footer />
    </div>
  )
}
