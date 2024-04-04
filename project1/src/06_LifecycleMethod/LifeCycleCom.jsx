import axios from "axios";
import { Plus } from "lucide-react";
import React, { Component } from "react";
import { Button, Table } from "reactstrap";

export default class LifeCycleCom extends Component {
  constructor() {
    super();
    console.log("-----------constructor------->");
    this.state = { count: 1, productData:[] };
  }

  componentDidMount() {
    console.log("-----------  componentDidMount----------->");
    this.fetchProductData(this.state.count);
  }

  componentDidUpdate(oldProps, oldState) {
    console.log("-----------  componentDidUpdate----------->");
    if (oldState.count !== this.state.count && this.state.count) {
      this.fetchProductData(this.state.count);
    }
  }

  fetchProductData = (count) => {
    axios({
      method: "get",
      url: `https://fakestoreapi.com/products/${count}`,
    }).then((res) => {
      const updatedProductData = [...this.state.productData];
      updatedProductData[count - 1] = res.data;
      this.setState({ productData: updatedProductData });
    });
  };

  fetchNextProduct = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("-----------render-------->");
    return (
      <div>
        <div className="d-flex align-items-center justify-content-center border border-3 bg-danger" >
         <div style={{height:"400px",padding:"50px",backgroundColor:"transparent",cursor:"pointer"}}>
          <img src="https://www.dealsshutter.com/uploads/giftcard/stores/11507642302132-3864-p96540jpg-1550656416.jpg" className="rounded" alt="" style={{height:"400px", width:"80%"}} /></div> 
         <div style={{padding:"30px"}}>
          <img src="https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-94303674/94303674.jpg" className="rounded"  alt="" style={{height:"400px", width:"80%",cursor:"pointer"}} />
        <h2 className="text-light">Number Of Product {this.state.count}</h2>
        <Button className="fs-5 text-center" color="primary" onClick={this.fetchNextProduct}>
         <Plus />Add Product
        </Button>
        </div>
        </div>
        <hr />
        <Table hover>
          <thead>
            <tr className="table-dark text-center">
              <th>No.</th>
              <th>Title</th>
              <th>Image</th>
              <th>Price</th>
              <th>category</th>

            </tr>
          </thead>
          <tbody>
            {this.state.productData.map((product, index) => (
              <tr key={index} className=" text-center">
                <th scope="row">{index + 1}</th>
                <td>{product.title}</td>
                <td>
                  <img
                    src={product.image}
                    style={{ height: "60px" }}
                    alt={product.title}
                  />
                </td>
                <td>{product.price}</td>
                <td>{product.category}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
