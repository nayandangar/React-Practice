import React, { useState, useEffect } from "react";
import { Input, Button } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LocalTask() {
  const [selectedOption, setSelectedOption] = useState("");
  
  const inputHandler = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    localStorage.setItem("selectedOption", selectedValue,);
  };

  useEffect(() => {
    const storedValue = localStorage.getItem("selectedOption");
    if (storedValue) {
      setSelectedOption(storedValue);
    }
  }, []);

  const handleSubmit = () => {
    if (!selectedOption) {
      toast.error('Please select an option!');
      return;
    }
  };

  return (
    <>
      <div>
        <div className="first-section">
          <Input type="color" />
        </div>
        <div className="Second-section d-flex gap-3">
          <label htmlFor="education1">Select Education 1</label>
          <Input
            id="education1"
            type="radio"
            value="It Education"
            checked={selectedOption === "It Education"}
            onChange={inputHandler}
          />
          <select>Education 1 details
            <option value="">B.E</option>
            <option value="">BCA</option>
            <option value="">MCA</option>
          </select>
          <label htmlFor="education2">It Education  </label>
          <Input
            id="education2"
            type="radio"
            value="Non It  Education"
            checked={selectedOption === "Non It  Education "}
            onChange={inputHandler}
          />
              <select>Non It  Education
            <option value="">B.Eed</option>
            <option value="">B.Com</option>
            <option value="">B.A</option>
          </select>
        </div>
      </div>
      <div>
        <Button className="btn btn-warning mt-5 text-light" onClick={handleSubmit}>Submit Here</Button>
      </div>
     <ToastContainer/>  
    </>
  );
}
