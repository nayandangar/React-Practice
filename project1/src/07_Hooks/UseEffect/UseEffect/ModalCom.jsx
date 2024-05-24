import { ShoppingCart } from 'lucide-react'
import React from 'react'
import {Modal,ModalHeader,ModalBody, Button} from "reactstrap"
export default function ModalCom({modal,toggle,product}) {
 
 return (
   <div>
   <Modal isOpen={modal} toggle={toggle}>
       <ModalHeader toggle={toggle} >Modal Privew</ModalHeader>
        <ModalBody >
          <h2>{product.title}</h2>
          <hr />
          <img style={{ height: "200px",width: "200px",borderRadius:"10px" }} src={product.image} alt="" />
          <span className='fs-2 ps-4 bg-blue'>Offer : 50 % off </span>  <hr />  
          <div className='text-danger  fw-bold  fs-1'>Special Price : ${product.price}
          </div>
          <div className='d-flex gap-3'>
          <button type="button" class="btn btn-warning p-2 w-50 fw-bold ">
           <ShoppingCart/>Add to cart 
          </button>
          <button type="button" class="btn btn-outline-danger w-50 fw-bold fs-3">Buy</button>
          </div>
        </ModalBody>
      </Modal> 
  </div>
  )
}
