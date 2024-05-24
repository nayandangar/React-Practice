import React, { useEffect, useState } from "react";
import { Button, Input } from "reactstrap";
import { Plus, Search } from "lucide-react"; // assuming you have an icon named Search

export default function SearchInput() {
    let [Task, SetTask] = useState("");
    let [TaskArr, setTaskArr] = useState([]);
    let [SearchText, setSearchText] = useState("");

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

    const searchTask = (e) => {
      e.preventDefault(); // Prevent form submission
      let filteredData = TaskArr.filter((task) =>
        task.toLowerCase().includes(SearchText.toLowerCase())
      );
      setTaskArr(filteredData);
    };

    useEffect(() => {
      // Load data from localStorage here if needed
    }, []);

    return (
      <div className="m-auto p-5 mt-5 bg-warning rounded-5  w-50 border border-3 ">
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
            onClick={() => addTask()}
          >
            <Plus />
          </Button>
        </div>
        <div className="border border-1 mt-4 p-4 rounded-1">
          <h1 className="text-center mb-0">Task</h1>
          <form onSubmit={searchTask}>
            <div className="d-flex">
              <Input
                className="shadow-none rounded-end-0 p-2"
                placeholder="Search your text here..."
                value={SearchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button
                type="submit"
                className="bg-light p-2 rounded"
              >
                <Search />
              </button>
            </div>
          </form>
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
}
