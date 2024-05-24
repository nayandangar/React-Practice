import React from 'react'
import { Button } from 'reactstrap'

export default function LocalStorageEx() {


    // Add, remove , update and delete   Any Data in Local Storage   
    const addName = ()=> {
     localStorage.setItem("name","Nayan Dangar");
    }
   const addAge = ()=> {
        localStorage.setItem("Age",JSON.stringify({"age":"25"}))
    } 
    // get data from Local Storage
    const GetAge = ()=> {
        localStorage.getItem("Age")
    }
    // Update Age from Local Storage    
    const updateAge = ()=> {    
        localStorage.setItem("Age",JSON.stringify({"Age":"50"}))
    }
    // Delete Age
    const DeleteAge = ()=>{
        localStorage.removeItem("Age")
    }
    // Delete All
        const DeleteAll = ()=>{
            localStorage.clear("Age")
        }
    return (
    <div className='d-grid gap-5 p-4 bg-secondary w-50 m-auto mt-5' >
        <div><h1 className='text-center'>Hello User</h1></div>
        <div className='d-flex gap-5 justify-between'>   
        <Button className='bg-danger' onClick={addName}>Add Name </Button>
        <Button className='bg-success' onClick={addAge}>Add Age </Button>
        <Button className='bg-warning' onClick={GetAge}>Get Age </Button>
        <Button className='bg-Primary' onClick={updateAge}>Update Age </Button>
        <Button className='bg-Secondary' onClick={DeleteAge}>Delete Age </Button>
        <Button className='bg-Secondary' onClick={DeleteAll}>Clear Age </Button>
        <Button className='bg-Secondary' onClick={DeleteAll}>Clear Age </Button>
        </div>
    </div>
  )
}
