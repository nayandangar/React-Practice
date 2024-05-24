import { Button } from 'bootstrap';
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Error404() {
  const navigate = useNavigate ();        
    return (
    <div className='d-flex'>
    <h1>Error 404</h1>
    <Button onClick={()=> navigate("/")}> Back to Home </Button>
    <Button onClick={()=> navigate("-1")}> Back </Button>
    </div>
  )
}
