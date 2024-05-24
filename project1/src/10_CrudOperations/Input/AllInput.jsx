import React, { useState } from 'react'
import { Form, Input, Row , Col, FormGroup,Label,Button } from 'reactstrap'

export default function AllInput() {
  let[ Name, setName ] = useState("")
  
    return (
    <div>
     <Form>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="email" >Name</Label>
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
        </Row>
        <Button color="danger">Sign in</Button>
      </Form>
    </div>
  )
}
