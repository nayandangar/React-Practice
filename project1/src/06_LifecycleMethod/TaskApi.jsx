import axios from 'axios';
import React, { Component } from 'react'

export default class TaskApi extends Component {
    constructor() {
        super();
        this.state = { products: [] };
      }
    componentDidMount(){
        axios({
            method:"get",
            url:"https://fakestoreapi.com/products",
        }).then(()=>{
            this.setState({products: res ?.data})
        })
    }    
  
    render() {
    return (
      <div>

      </div>
    )
  }
}
