import React, { Component } from "react";

export default class ComUnmount extends Component {
  componentWillUnmount() {
    console.log("-----------  component will unmount----------->");
    alert("are you sure to remove this component ?");
  }
  render() {
    return <h1>Component Unmount</h1>;
  }
}