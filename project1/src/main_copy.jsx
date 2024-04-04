import React from "react";
import ReactDOM from "react-dom/client";
import reactLogo from "./assets/react.svg";
import App from "./App.jsx";
import "./index.css";
import { render } from "react-dom";

let head = <h1>hello User</h1>;
let section1 = <h1>This is React Application </h1>;

let elements = ReactDOM.createRoot(document.getElementById("root"));
let studentsData = [
  {
    name: "Latesh ",
    age: 23,
    add: "surat",
  },
  {
    name: "Dharmik",
    age: 24,
    add: "Bigri,Navsari",
  },
  {
    name: "Nayan",
    age: 25,
    add: "Bhavnagar",
  },
  {
    name: "Nimesh",
    age: 21,
    add: "Ahemdabad",
  },
];

elements.render(
  <div>
    <div className="class1">
      <a href="" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <br />
      <h1>React Js</h1>
    </div>
    <a href="" target="_blank">
      <img
        src="https://englishtribuneimages.blob.core.windows.net/gallary-content/2020/6/2020_6$largeimg_2106819729.jpg"
        className="reactimg"
        alt="React logo"
      />
      <img
        src="https://1.bp.blogspot.com/-l66HEPUGL7E/XU5xTuHLCkI/AAAAAAAAZ9g/SuENbsLjEPMgI49-44m2pEu4FYTrS4VQwCEwYBhgL/w1200-h630-p-k-no-nu/The%2BComplete%2BFront-End%2BWeb%2BDevelopment%2BCourse%2Bbest%2BUdemy%2Bcourse.jpg"
        className="reactimg"
        alt=""
      />
    </a>
    <div>
      <button>About us</button>
    </div>
    {head}
    {section1}
    <div className="student">
      <h1>This is Students Detais </h1>
    {studentsData.map((e, i) => {
        return (
          <div key={i}>
            <h2>
              {i} Student Name is :{e.name}{" "},
                  Age is :{e.age}{" "},
                 address is :{e.add}{" "}
            </h2>
          </div>
        );
      })}
    </div>
  </div>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
