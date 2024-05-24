import { Button } from 'reactstrap';
import React from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
  let [Cookies, setCookies,removieCookies ] = useCookies(["user"])
  const navigate = useNavigate();
  const logoutHandler =()=>{
      removieCookies("user")
      navigate("/")
  }

  return (
   
   <div>
   <h1>Profile</h1>
   <Button onClick={()=>logoutHandler() }>Logout</Button> 
   </div>
  )
}
