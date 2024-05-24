import axios from "axios";
import React, { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function ProductDetailPage() {
  let [product, setProduct] = useState([]);

  const data = useParams();
  console.log("-----------  data----------->", data);

  useEffect(() => {
    async function fetchData(params) {
      try {
        let response = await axios.get(
          `https://fakestoreapi.com/products/${data.id}`
        );
        setProduct(response.data);
      } catch (error) {
        toast.error("somthing is mistake");
      }
    }
    fetchData();
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <div className="container  p-12 h-[100vh]">
        <div>
        <ArrowLeft
          size={45}
          role="button"
          color="gray"
          onClick={() => navigate(-1)}
        />
        </div>
     
        <div className="flex">
          <div className="d-flex border p-12 bg-warning">
           <div> 
            <img className="" style={{
              height:"400px",padding:"40px"
            }} src={product?.image} alt="" />
            </div>
            <div>
            <h1 className="pt-5 text-white">Price : ${product?.price}</h1>
            </div>
          </div>
          <div className="border p-12">
            <h1>Title : {product?.title}</h1>
          </div>
        </div>
      </div>
    </>
  );
}