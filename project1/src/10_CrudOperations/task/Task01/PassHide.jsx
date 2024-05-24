import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Table } from "reactstrap";
import { Eye, EyeOff } from "lucide-react"; 
import ReactClock from "./ReactClock";

export default function PassHide() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userArr, setUserArr] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  const AddDataHandler = () => {
    const newUser = { name, email, password, showPassword: false };
    setUserArr([...userArr, newUser]);
    setName("");
    setEmail("");
    setPassword("");
  };

  const toggleView = (index) => {
    const updatedUser = userArr.map((user, i) => 
      i === index ? { ...user, showPassword: !user.showPassword } : user
    );
    setUserArr(updatedUser);
  };

  return (
    <div>
      <div className="d-flex gap-5 bg-info w-50 p-4 m-auto">
        <div>
        <Form>
          <FormGroup>
            <Label for="name">Name :</Label>
            <Input
              id="name"
              name="name"
              value={name}
              placeholder="Enter Your Name Here.."
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email :</Label>
            <Input
              id="email"
              value={email}
              placeholder="Enter Your Email Here"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password :</Label>
           <div className="d-flex"> 
            <Input
              id="password"
              name="password"
              value={password}
              className=" rounded-end-0"
              placeholder="Enter Your Password"
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button className="rounded-start-0" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOff /> : <Eye />}
            </Button>
            </div>
          </FormGroup>
          <Button color="danger" onClick={AddDataHandler}>Add Data</Button>
        </Form>
        </div>
        <div>
        <ReactClock />
        </div>        
      </div>
      <div>
        <Table hover>
          <thead>
            <tr className="table-primary w-100">
              <th>Sr.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userArr.map((user, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.showPassword ? user.password : "********"}</td>
                <td>
                  <Button onClick={() => toggleView(i)}>
                    {user.showPassword ? <EyeOff /> : <Eye />}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
