import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CardCom } from "./CardCom";
import { useSearchParams } from "react-router-dom";

export default function Homefile() {
  const [product, setProduct] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    async function fetchData(params) 
    {

      try {
        const response = await axios.get(`https://fakestoreapi.com/products?${params}`);
        setProduct(response.data);
      } catch (error) {
        toast.error("Something  Mistake in code ");
      }
    }

    fetchData(searchParams);
  }, [searchParams]);

  const handleButtonClick = () => {
    setSearchParams({ name: "Nayan Dangar" });
  };

  return (
    <div className="row p-3">
      <button onClick={handleButtonClick}>Click me</button>
      {product.map((e, i) => (
        <div key={i} className="col-3 my-2">
          <CardCom data={e} />
        </div>
      ))}
    </div>
  );
}
