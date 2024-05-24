import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import { Plus } from "lucide-react";

export default function Task01() {
  let [Task, SetTask] = useState(null);
  let [TaskData,setTaskData]=useState('')

  let getInputData = () => {
    if(typeof Task != "number"){
      SetTask("")
    }if(typeof Task !== "number"){
      setTaskData(Task);  
    }
   };
  return (
    <div className="border-3 bg-secondary text-center p-4 w-50 rounded-2 m-auto mt-5">
      <h3 className="text-white">Odd Even Task</h3>
      <div className="d-flex w-75 alig m-auto">
        <Input
          className="shadow-none rounded-end-0  p-3 fs-3 "
          placeholder="Enter any Number"
         value={Task} 
         onChange={(e) => SetTask(e.target.value)}
        />
        <Button
          color="danger"
          className="rounded-start-0 p-4"
        
          onClick={() => getInputData()}>
          <Plus />
        </Button>
      </div>
      <div className="border border-1 mt-4 p-4 rounded-1">
        <h1 className="text-center text-light mb-0">Task</h1>
        <hr className="mt-0" />
        {TaskData === "" ? (
          <h3 className="text-light">Please Enter Any Number</h3>
        ) : 
          TaskData % 2 === 0 ? (
              <h3 className="text-success bg-light p-4">{TaskData} This Number is Even </h3>
        ) 
        :(
          <h3 className="text-info bg-light p-4">{TaskData} Number is Odd</h3>
        ) 
        }
          </div>
    </div>
  );
}

