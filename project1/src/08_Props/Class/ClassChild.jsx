import React, { Component } from 'react'
import {Button} from "reactstrap"

export default class ClassChild extends Component {
  constructor() {
    super();
    this.state = {
      name: this?.props?.name,
    };
  }
  componentDidMount(){
    console.log("-----props-------->",this.props);
    this.setState({name:this?.state?.name})
  }
  render() {
    return (
      <div>
        <h1>hello ,Good morning {this.props.name}</h1>
        <h2>My Age is : {this.props.age}</h2>
        <Button onClick={()=>this.state.name}>Change Name</Button>
      </div>
    )
  }
}
