import React from 'react'
import Carausol from './Carausol'
import "./style.css"
import Example from './Example'
import TableData from './TableData'

export default function ProjectEx() {
  return (
    <div>
       <div className="navbar">
        <Example/>
       </div>
       <div>
        <Carausol />
       </div> 
       <div className='pt-4'>
        <h1 className='text-danger'>
           # Team Members</h1>
       <TableData/>
       </div>

    </div>
  )
}
