// Task Name : Set Api by Use Effect  
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from 'reactstrap'; 

export default function ApiTask() {
  let [products, setProduct] = useState([]);

  // SetApi
  useEffect(() => {
    axios({
      method: "get",
      url: "https://fakestoreapi.com/products",
    }).then((res) =>{
      setProduct(res.data);
    }).catch((error) =>{
        console.error("Error in this  product data-->:", error.message);
      });
  }, []);

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
          {products?.map((product, index) => (
            <tr key={index} className="table-light" >
              <th scope="row">{index + 1}</th>
              <td><img src={product.image} alt="" style={{ height: "50px" }} /></td>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td>{product.rating.rate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}




