import React, { useState,useEffect } from "react";
import { Button } from "reactstrap";
import Loder2 from "./Loder2";
import Loader from "../Loader";

export default function Task1() {
  const [userType, setUserType] = useState("Admin");
  let [isLoading, setIsLoading] = useState(true);
      useEffect(() => {
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 5000); 

	 return ()=> clearTimeout(timeout);
    }, []); 
    if(isLoading){
    return (<Loder2 />)
  }
  return (
    <div>
    <h1>User Type: {userType}</h1>
      {userType === "Admin" && <h2 className="p-5 bg-info w-50">Admin Data</h2>}
      {(userType === "Employee" || userType === "Admin")&&           <h2>Employee Data</h2>} 
      <h2>User Data</h2>
    
      <Button onClick={() => setUserType("Admin")}>Admin Login</Button>
      <Button onClick={() => setUserType("Employee")}>Employee Login</Button>
      <Button onClick={() => setUserType("User")}>User Login</Button>
    </div>
  );
}
