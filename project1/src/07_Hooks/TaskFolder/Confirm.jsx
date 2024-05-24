// Task Name : Make Conformation Popup and call every 10 second till you give permisson
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";

export default function Confirm() {
  let [products, setProduct] = useState([]);
  let [showPopup, setShowPopup] = useState(false);

  // SetApi
  useEffect(() => {
    axios({
      method: "get",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.error("Error in this  product data-->:", error.message);
      });

    const popupInterval = setInterval(() => {
      setShowPopup(true);
    }, 10000);

    return () => clearInterval(popupInterval);
  }, [showPopup]);

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
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, index) => (
            <tr key={index} className="table-light">
              <th scope="row">{index + 1}</th>
              <td>
                <img src={product.image} alt="" style={{ height: "50px" }} />
              </td>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td>{product.rating.rate}</td>
              <td>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
