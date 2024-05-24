import React, { Component } from "react";
import ClassChild from "./ClassChild";
export default class ClassParent extends Component {

  constructor (){
    super()
    this.name = "Nayan"
    this.age = "25"
  }
  render() {
    return (
     <div>
     <ClassChild name={this.name} age={this.age} /> 
     <ClassChild name={"Vimal"} age={29} /> 
     </div> 
  )
}
}
