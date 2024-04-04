import React from 'react'

export default function Header2() {
  return (
    <div>
      <div className="header" style={{
       height:"60px", display:"flex",alignItems:"center", backgroundColor: "lightgray",}}>
        <h1 style={{flex:"2" ,padding:"20px"}}>Logo</h1>
        <h2 style={{flex:"1",alignContent:"center"}}>
          Navigation</h2>
   </div><br />  
    </div>
  )
}
