import React, { useState } from "react";
import { Button, CloseButton, Input } from "reactstrap";
import { Plus } from "lucide-react";

export default function ColorTask2() {
    let [color, setColor] = useState("Black");
    let [colorArr, setColorArr] = useState([]);
    
    const addColor = () => {
      if (color.trim() === "") {
          alert("You Can Use Defaul Color Only Frist Time...!!!");
          return;
        }
      setColorArr([...colorArr, color]);
      setColor("");
    };
    return (
        <div className="m-auto p-5 mt-5 bg-warning rounded-3 w-50 border border-3 ">
        <h3 className="mb-1 text-center text-white">Choose Any Color </h3>
        <div className="d-flex w-100 align-items-center justify-content-center ">
          <Input
          style={{height:"50px"}}
            className=" rounded-end-0 "
            value={color}
            onChange={(e) => setColor(e.target.value)}
            type="color"
          />
          <Button
          style={{height:"50px"}}
            color="danger"
            className="rounded-start-0"
            onClick={()=> addColor()}>
            <Plus />
          </Button>
        </div>
        <div className=" bg-light border border-1 mt-4 p-4 rounded-1">
        <h3 className={colorArr.length == 0 ? "border px-2 py-1" : "m-0"}>
                  {colorArr.length == 0 ? "Your Array is Empty" : ""}
                </h3>
          <hr className="mt-0" />
          {colorArr.map((e, i) => {
            return (
              <div className="d-flex" key={i}>
                <div style={{backgroundColor:e}} className=" text-light border mt-2 p-3  rounded-2 " >{i + 1}
                </div>
                <div style={{backgroundColor:e,display:"flex",justifyContent:"space-between"}} className="w-100 border mt-2 px-2 py-1 rounded-2">
                    <h5 className="text-light"> Color Name(Code) :{e} 
                    </h5>
                    <div className="d-flex gap-2 ">
                    <button className="bg-gray w-100 text-danger hover:bg-black">Edit</button>
                    <CloseButton className="p-3 bg-success" />
                    </div>
                  </div>
               </div> 
            );
          })}
        </div>
      </div>
  )
}
