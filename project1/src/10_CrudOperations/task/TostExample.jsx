import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function TostExample(){
  const notify = () => toast("You have a New Notification !");
  const notification = () =>toast("Your Status is Updated Successfully")

  return (
    <div style={{display:"grid",justifyContent:"center",height:"500px" ,width:"100%", gap:"20px",padding:"50px"
    ,backgroundColor:"black"}}>
      <button onClick={notify} className='btn btn-danger h-100 w-100'>Notify !</button>
      <button className='btn btn-success h-100 w-100' onClick={notification} >Update </button>
      <ToastContainer />
    </div>
  );
}