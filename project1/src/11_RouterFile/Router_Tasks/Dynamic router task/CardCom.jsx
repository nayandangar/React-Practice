import { Button, Card } from "flowbite-react";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function CardCom({ data }) {
  const navigate = useNavigate();

  const redirectHandler = () => {
    console.log("id", data.id);
    navigate(`/product/${data.id}`, { state: { name: "Nayan dangar" } });
  };
  return (
    <div  className="py-2 ">
    <Card
      className="max-w-sm p-3"
      imgAlt="There is not a valid image please put any proper image for this code"
    >
      <img 
        onClick={() => redirectHandler()}
        src={data?.image}
        className=" max-h-[100px]  "
        alt=""
        srcset=""
        style={{height:"200px",padding:"0px", width:"200px"}}
      />
      <h4 className="text-2xl font-bold tracking-tight text-gray-900 ">
       This  Noteworthy technology acquisitions 2021
      </h4>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
      <div className="d-flex gap-3  ">
      <button className="btn btn-danger text-white" style={{height:"55px"}}><ShoppingCart/>  Add to Cart </button>
      <button className="btn btn-warning text-white" style={{height:"50px"}}><ShoppingBag /> Buy Now</button>
      </div>
    </Card> 
    </div>
  );
}