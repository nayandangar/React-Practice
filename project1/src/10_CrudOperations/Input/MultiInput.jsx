import React,{useState} from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

export default function MultiInput() {
  
    let [user, setUser] = useState({
        email: "",
        password: "",
        Number:""
        
      });
    return (
    <div className='w-100  m-auto p-5'>
     <div>
      <Form>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                placeholder="with a placeholder"
                type="email"
                onChange={(e) => setUser({ ...user, email: e?.target?.value })}
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
                onChange={(e) =>
                  setUser({ ...user, password: e?.target?.value })
                }
              />
            </FormGroup>
          </Col>
        
          <Col md={6}>
            <FormGroup>
              <Label for="Password">Conform Password</Label>
              <Input
                id="Password"
                placeholder="password placeholder"
                type="password"
                onChange={(e) =>
                  setUser({ ...user, password: e?.target?.value })
                }
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="Password">Number</Label>
              <Input
                id="Number"
                placeholder="Number placeholder"
                type="number"
                onChange={(e) =>
                  setUser({ ...user, Number: e?.target?.value })
                }
              />
            </FormGroup>
          </Col>
        </Row>
        <Button color="danger">Sign in</Button>
      </Form>
    </div>
    </div>
  )
}
