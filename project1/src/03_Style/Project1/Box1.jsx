import React from "react";

export default function Box1() {
return (
    <div>
    <div style={{display:"flex", flexWrap:"wrap",alignItems:"center",gap:"10px",textAlign:"center"}}>
      {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((e)=>{
        return <div style={{height:"150px",width:"320px",backgroundColor:"lightgray",margin:"20px"}}>{e}</div>
      })}
    </div>
    <div className="bigbox" style={{display:"flex",justifyContent:"space-between",textAlign:"center"}}>
    {[1,2,3].map((e)=>{
      return  <div style={{height:"400px",width:"400px",backgroundColor:"darkgray"}}><h1 style={{paddingTop:"100px"}}>Box</h1>{e}</div>
     })}
    </div>
   </div>
  );
}
