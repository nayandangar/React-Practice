import React, { useState } from 'react';
import { Button, Input } from "reactstrap";
import { Edit, Plus, Trash } from "lucide-react";
import { toast } from 'react-toastify';

export default function Task1() {
  const [Task, SetTask] = useState("");
  const [TaskArr, setTaskArr] = useState([]);
  const [Index, setIndex] = useState(0);
  
  const getInputData = (ele) => {
    const inputValue = ele.target.value;
    if (TaskArr.length < 10) {
      SetTask(inputValue);
    } else {
      toast.warning("You can set only have up to 10 tasks");
    }
  };


  const addTask = () => {
    if (Task.trim() === "") {
      toast.warning("please enter any value");
    } else {
      setTaskArr([...TaskArr, Task]);
      SetTask("");
    }
  };

  const editHandler = (value, index) => {
    SetTask(value);
    setIndex(index);
  };

  const updateHandler = () => {
    TaskArr.splice(Index, 1, Task);
    setTaskArr([...TaskArr]);
    SetTask("");
    setIndex(null);
    toast.success("Task Updated successfully ..!");
  };
 
  const deleteHandler = (index) => {
    const filterData = TaskArr.filter((e, i) => i !== index);
    setTaskArr(filterData);
    toast.success("Task Deleted Successfully..!");
  };
  
  return (
    <div className="m-auto p-5 mt-5 bg-warning rounded-5  w-50 border border-3 ">
      <h3>Task : 1</h3>
      <div className='d-flex justify-content-center'>
        <Input
          className='shadow-none rounded-end-0 w-70 p-3 fs-4'
          placeholder='Enter any value '
          value={Task}
          onChange={(e)=>getInputData(e)}
        />
        {(Task.length < 10 && (Index || Index === 0)) ? (
          <Button
            color="danger"
            className="rounded-start-0"
            onClick={() => updateHandler()}
          >
            Update
          </Button>
        ) : (
          <Button
            color="danger"
            className="rounded-start-0"
            onClick={() => addTask()}
          >
            <Plus />
          </Button>
        )}
      </div>
      <div className="border border-1 mt-4 p-4 rounded-1 bg-white">
        <h1 className="text-center mb-0">Show Data</h1>
        <hr className="mt-0" />
        {TaskArr.map((e, i) => (
          <div className="d-flex gap-2" key={i}>
            <div className="border mt-2 p-3 rounded-2 fs-5 ">{i + 1}.</div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}} className=" w-100 border mt-2 px-2 py-1 rounded-2 ">
              <h4>{e}</h4>
              <div className='d-flex gap-3'>
                <button className='btn btn-secondary p-2'>
                  <Edit onClick={() => editHandler(e, i)} />
                </button>
                <button className='btn btn-danger p-2'>
                  <Trash onClick={() => deleteHandler(i)} />
                </button> 
              </div>
            </div>
          </div>
        ))}
      </div> 
    </div>
  );
}
