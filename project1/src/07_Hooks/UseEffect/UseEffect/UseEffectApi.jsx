import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { Eye } from "lucide-react";
import ModalCom from "./ModalCom";

export default function UseEffectApi() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios({
      method: "get",
      url: "https://fakestoreapi.com/products",
    }).then((res) => {
      setData(res?.data);
    });
  }, []);

  const toggleModal = (e) => {
    console.log("------toggle---->");
    setProduct(e);
    setModal(!modal);
  };

  return (
    <div>
      <Table hover>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Image</th>
            <th>Title</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>
                  <img
                    style={{ height: "50px" }}
                    src={e.image}
                    alt=""
                    srcSet=""
                  />
                </td>
                <td>{e.title}</td>
                <td>{e.rating.rate}</td>
                <td>
                  <Eye role="button" onClick={() => toggleModal(e)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <ModalCom modal={modal} toggle={toggleModal} product={product} />
    </div>
  );
}

