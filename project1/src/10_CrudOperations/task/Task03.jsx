import { Label, Radio } from "flowbite-react";
import React, { useState } from "react";
import { Button } from "reactstrap";

export default function Task03() {
  const [car, setCar] = useState("");
  const [carImg, setCarImg] = useState(""); 

  const carImages = {
    "Mercedes S- Class": "https://imgd.aeplcdn.com/1280x720/n/cw/ec/48067/s-class-exterior-right-front-three-quarter-9.jpeg?isig=0&q=80",
    "BMW i5 S-60": "https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/all-models/i-series/i4/2021/bmw-i4-edrive-40-modelfinder-890x501.png",
    "Lexus RX 350H": "https://imgcdn.zigwheels.ph/large/gallery/exterior/19/2895/lexus-es-2021-front-angle-low-view-934678.jpg",
    "Bentley Mulliner": "https://cdn.motor1.com/images/mgl/E6PO8R/s3/bentley-batur-mulliner-personalization.jpg",
    "Rolls-Royce": "https://cdn.antaranews.com/cache/1200x800/2022/01/28/1_Phantom-Orchid-Front-3_4.jpg",
    "PORSCHE panamera": "https://imgd.aeplcdn.com/664x374/cw/ec/39232/Porsche-992-911-Right-Front-Three-Quarter-154381.jpg?wm=0&q=80"
  };

  const handleCarChange = (selectedCar) => {
    setCar(selectedCar);
    setCarImg(carImages[selectedCar]);
    localStorage.setItem(setCarImg);
  };

  return (
    <div className="bg-primary  border-2 d-flex w-75 p-3 m-auto" >
      <div className="w-100 flex items-center  fs-3 text-light">
        <h1>Your Car Name Is : {car}</h1>
        <hr />
        <fieldset className="flex max-w-md gap-4">
          <legend className="mb-4">Choose your favorite car</legend>
          <div className="flex items-center gap-2">
            <Radio
              id="Mercedes"
              checked={car === "Mercedes S- Class"}
              onChange={() => handleCarChange("Mercedes S- Class")}
            />
            <Label htmlFor="Mercedes">Mercedes S- Class</Label>
          </div>
          <div className="gap-2">
            <Radio
              id="BMW"
              checked={car === "BMW i5 S-60"}
              onChange={() => handleCarChange("BMW i5 S-60")}
            />
            <Label htmlFor="BMW">BMW i5 S-60</Label>
          </div>
          <div className=" gap-2">
            <Radio
              id="Lexus"
              checked={car === "Lexus RX 350H"}
              onChange={() => handleCarChange("Lexus RX 350H")}
            />
            <Label htmlFor="Lexus">Lexus RX 350H</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio
              id="Bentley"
              checked={car === "Bentley Mulliner"}
              onChange={() => handleCarChange("Bentley Mulliner")}
            />
            <Label htmlFor="Bentley">Bentley Mulliner</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio
              id="Rolls-Royce"
              checked={car === "Rolls-Royce"}
              onChange={() => handleCarChange("Rolls-Royce")}
            />
            <Label htmlFor="Rolls-Royce">Rolls-Royce CULLINAN</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio
              id="PORSCHE"
              checked={car === "PORSCHE panamera"}
              onChange={() => handleCarChange("PORSCHE panamera")}
            />
            <Label htmlFor="PORSCHE">PORSCHE panamera</Label>
          </div>
      <Button className="btn btn-danger">Confirm Car</Button>
        </fieldset>
      </div>
      {carImg && <img src={carImg} alt="Car"className="img-fluid " style={{height:"400px",width:"600px"}} />} {}
    </div>
  );
}
