import axios from "axios";
import React, { Component } from "react";
import { Table } from "reactstrap";

export default class Task extends Component {
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
    }).catch((error) =>{
      console.error("Error in this  product data-->:", error.message);
    });
    
  }
  render() {
    console.log("----data----", this?.state?.products);
    return (
      <div>
        <Table striped>
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Image</th>
              <th>Title</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((e, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>
                    <img
                      style={{ height: "50px" }}
                      src={e.image}
                      alt=""
                      srcset=""
                    />
                  </td>
                  <td>{e.title}</td>
                  <td>{e.rating.rate}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

