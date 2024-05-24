import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import { Plus } from "lucide-react";

export default function SingleInput() {
  let [Task, SetTask] = useState("");
  let [TaskArr, setTaskArr] = useState([]);

  const getInputData = (ele) => {
    SetTask(ele.target.value);
  };

  const addTask = () => {
    if (Task.trim() === "") {
      alert("Please enter a value before adding.");
      return;
    }
    setTaskArr([...TaskArr, Task]);
    SetTask("");
  };

  return (
    <div className="m-auto p-5 mt-5 bg-danger rounded-5  w-50 border border-3 ">
      <h3 className="mb-1">Enter Your Task Here</h3>
      <div className="d-flex">
        <Input
          className="shadow-none rounded-end-0  p-3  "
          placeholder="Enter a Task"
          value={Task}
          onChange={(e) => getInputData(e)}
        />
        <Button
          color="danger"
          className="rounded-start-0"
          onClick={() => addTask()}> 
          <Plus />
        </Button>
      </div>
      <div className="border border-1 mt-4 p-4 rounded-1">
        <h1 className="text-center mb-0">Task</h1>
        <hr className="mt-0" />
        {TaskArr.map((e, i) => {
          return (
            <div className="d-flex" key={i}>
              <div className="border mt-2 px-2 py-1 rounded-2 text-light">{i + 1}.</div>
              <div className=" w-100 border mt-2 px-2 py-1 rounded-2 text-light">
                <h5>{e}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};








