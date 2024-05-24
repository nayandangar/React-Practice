import React from 'react'
import "./Index.css"
import { NavLink } from 'reactstrap'
export default function Header() {
  return (
    <div className='d-flex gap-5'>
        <NavLink to={"/"}>HOME PAGE</NavLink>
        <NavLink to={"/About"}>ABOUT</NavLink>
        <NavLink to={"/Contact"}>CONTACT</NavLink>
    </div>
  )
}
