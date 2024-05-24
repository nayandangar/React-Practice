import React, {useState} from 'react'
import {Button} from "reactstrap"
export default function FunComChild(props) {
 let [name, setName] = useState(props.name);
  const chnageName = () => {
    setName("User");
  }; 
    return (
    <div>
        <h1>Good morning {name}</h1>
        <h2>age is : {props.age}</h2>
        <Button onClick={() => chnageName(props.name)}>Chnage name</Button>
    </div>

        
  )
}
