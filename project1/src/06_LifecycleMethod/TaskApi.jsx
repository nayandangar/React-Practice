import axios from 'axios';
import React, { Component } from 'react';
import { Table } from 'reactstrap';

export default class TaskApi extends Component {
  constructor() {
    super();
    this.state = { products: [] };
  }

  componentDidMount() {
    axios({
      method: "get",
      url: "https://fakestoreapi.com/products",
    }).then((res) => {
      this.setState({ products: res?.data });
    })
  }

  render() {
    console.log("------ data -----", this.state.products);
    return (
      <div>
        <Table hover>
          <thead>
            <tr className="table-dark">
              <th>Sr.</th>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((e, i) => (
              <tr className="table-light">
                <th scope="row">{i + 1}</th>
                <td><img src={e.image} alt="" style={{ height: "50px" }} /></td>
                <td>{e.title}</td>
                <td>{e.price}</td>
                <td>{e.rating.rate}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
