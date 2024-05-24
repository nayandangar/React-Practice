// when i add shape name then give me the resulf of that shape which is given by user and if input data is not any shape name then give the sentance this name is not a shaope name .

import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import { Plus } from "lucide-react";

export default function Task02() {
  let [shape, setShape] = useState("");
  let [shapeData, setShapeData] = useState("");
  let [errorMessage, setErrorMessage] = useState("");

  const shapeMap = {
    circle: <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red" /></svg>,
    square: <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect x="10" y="10" width="80" height="80" stroke="black" strokeWidth="3" fill="blue" /></svg>,
    triangle: <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><polygon points="50,10 10,90 90,90" stroke="black" strokeWidth="3" fill="green" /></svg>,
    star: <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><polygon points="50,10 30,90 90,35 10,35 70,90" stroke="black" strokeWidth="3" fill="yellow" /></svg>,
    heart: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>,
    pentagon: <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><polygon points="50,2.5 97.5,38.5 77.5,97.5 22.5,97.5 2.5,38.5" stroke="black" strokeWidth="3" fill="purple" /></svg>
  };
  let getInputData = () => {
    const trimmedShape = shape.trim().toLowerCase();
    if (isValidShape(trimmedShape)) {
      setShapeData(shapeMap[trimmedShape]);
      setErrorMessage("");
    } else {
      setErrorMessage("Invalid shape name");
    }
    setShape("");
  };

  const isValidShape = (shapeName) => {
    return shapeName.length >= 3 && shapeMap.hasOwnProperty(shapeName);
  };

  return (
    <div className="border border-3  text-center p-4 w-50 rounded-2 m-auto mt-5">
      <h3 className="text-white bg-primary">Shape Viewer</h3>
      <div className="d-flex w-75 alig m-auto">
        <Input
          className="shadow-none rounded-end-0  p-3 fs- w-100 "
          placeholder="Enter shape name (circle, square, triangle, star, heart, pentagon)"
          value={shape}
          onChange={(e) => setShape(e.target.value)}
        />
        <Button
          color="danger"
          className="rounded-start-0 p-4"
          onClick={() => getInputData()}
        >
          <Plus />
        </Button>
      </div>
      <div className="border border-1 mt-4 p-4 rounded-1">
        <h1 className="text-center text-light mb-0">Shape</h1>
        <hr className="mt-0" />
        {errorMessage && (
          <h3 className=" bg-light p-4">{errorMessage}</h3>
        )}
        {!errorMessage && shapeData && (
          <div className="text-success bg-light p-4">
            <h3 className="mb-3">Shape:{shape}</h3>
            {shapeData}
          </div>
        )}
      </div>
    </div>
  );
}



