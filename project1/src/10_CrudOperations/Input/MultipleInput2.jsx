import React, { useState } from "react";
import { Edit, Trash } from "lucide-react";
import { toast } from "react-toastify";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Table,
} from "reactstrap";
import { Checkbox } from "flowbite-react";

export default function MultiPleInput2() {
  let [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    country: [],
  });
  let [userArr, setUserArr] = useState([]);
  let [index, setIndex] = useState(null);
  let [editedUser, setEditedUser] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();


    if (!user.name.trim() || !user.email.trim() || !user.password.trim() || user.country.length === 0) {
      return toast.error("Please fill out all fields and select at least one country.");
    }
  
      let exist = userArr.some(
      (e) => e.name === e.name && e.email === user.email
    );

    if (!exist) {
      setUserArr([...userArr, user]);
      setUser({ name: "", email: "", password: "", country: [] });
    } else {
      return toast.warning("This Name or Email already used");
    }
  };

  const deleteHandler = (index) => {
    if(window.confirm("Are You Sure to Delete this Iteam ???")){
    let filterData = userArr.filter((e, i) => i !== index);
    setUserArr(filterData);
    toast.success("Task Deleted");
   }
  };

  const editHandler = (value, index) => {
    setUser(value);
    setIndex(index); 
    setEditedUser(value); 
  };

  const updateHandler = () => {
    if (index === null) {
      toast.warning("No user selected for update");
      return;
    }
  
    setUserArr((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers[index] = { ...user }; 
      return updatedUsers;
    });
  
    setIndex(null);
    setUser({ name: "", email: "", password: "", country: [] }); 
    toast.success("Task Updated");
  };

  const checkBoxHandler = (countryName, e) => {
    if (e.target.checked) {
      setUser({ ...user, country: [...user.country, countryName] });
    } else {
      let filterData = user.country.filter((e) => e !== countryName);
      setUser({ ...user, country: filterData });
    }
  };

  return (
    <div className="p-4 border border-black">
      <header>User side Form </header>
      <div className="p-3 bg-primary ">
      <Form onSubmit={(e) => submitHandler(e)}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="Name">Name:</Label>
              <Input
                id="Name"
                placeholder="Enter Your Name Here"
                type="text"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                placeholder="with a placeholder"
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="Password">Password</Label>
              <Input
                id="Password"
                placeholder="password placeholder"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </FormGroup>
          </Col>
          <Col>
            <div className="CheckBoxes">
              <section>
                <h3>Visited Countries</h3>
                <div>
                  <Checkbox
                    id="India"
                    checked={user.country.includes("India")}
                    onChange={(e) => checkBoxHandler("India", e)}
                  />
                  <label htmlFor="India"> India</label>
                </div>
                <Checkbox
                  id="United-State"
                  checked={user.country.includes("United-State")}
                  onChange={(e) => checkBoxHandler("United-State", e)}
                />
                <label htmlFor="United-State"> United-State</label>
                <br />
                <Checkbox
                  id="Germany"
                  checked={user.country.includes("Germany")}
                  onChange={(e) => checkBoxHandler("Germany", e)}
                />
                <label htmlFor="Germany"> Germany</label>
                <br />
                <Checkbox
                  id="Spain"
                  checked={user.country.includes("Spain")}
                  onChange={(e) => checkBoxHandler("Spain", e)}
                />
                <label htmlFor="Spain "> Spain</label>
                <br />
                <Checkbox
                  id="United-Kingdom"
                  checked={user.country.includes("United-Kingdom")}
                  onChange={(e) => checkBoxHandler("United-Kingdom", e)}
                />
                <label htmlFor="India"> United-Kingdom</label>
                <br />
              </section>
            </div>
          </Col>
        </Row>
        <div className="d-flex gap-3" >
        <Button color="danger">Sign in</Button>
        <Button
        color="danger"
        className="rounded"
        onClick={() => updateHandler()}
        >
        Update
        </Button>
        </div>
      </Form>
      </div>
      <br />
      <Table striped style={{textAlign:"center"}}>
        <thead>
          <tr className="table-primary">
            <th>Sr.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Country</th>
            <th>Remove</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {userArr?.map?.((e, i) => {
            return (
              <tr key={i} className="bg-success text-light">
                <th scope="row">{i + 1}</th>
                <td>{e?.name}</td>
                <td>{e?.email}</td>
                <td>{e?.password}</td>
                <td className="flex gap-2 text-center ">
                  {e.country.map((ele, index) => {
                    return (
                      <div
                        key={index}
                        className="p-2 bg-success text-light border border-black rounded-md"
                      >
                        {ele}
                      </div>
                    );
                  })}
                </td>
                <td>
                  <Trash
                    className="cursor-pointer"
                    color="red"
                    onClick={() => deleteHandler(i)}
                  />
                </td>
                <td>
                  {" "}
                  <Edit
                    className="cursor-pointer"
                    color="gray"
                    onClick={() => editHandler(e, i)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
