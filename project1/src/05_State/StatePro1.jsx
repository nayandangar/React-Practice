import React, {useState}from 'react'
import { Button } from "reactstrap";

export default function StatePro1() {
  const [index, setindex] = useState(0);
  const color = ["gray","Yellow","blue","green","red","pink","aqua","blueviolet","cadetblue","crimson","chocolate","brown","black","green"]
  const ColorHandler = ()=>{
    if(index+1 >= color.length){
      setindex(0);
    }else{
        setindex(index+1);
    }
   }
    return (
    <div>
        <div className='d-flex flex-column justify-content-center align-items-center' style={{height:"100vh", width:"100wh",backgroundColor:color[index] }}>
            <h1>{index}</h1>
          <Button onClick={()=>ColorHandler()} color="dark" >Change Color</Button>
        </div>
    </div>
  )
}
