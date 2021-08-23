import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import { Form,Button } from 'react-bootstrap'
export const Contact = () => {
const [name,setName]=useState('');

const handleSubmit=(e)=>{
e.preventDefault();
if(name===''){
    console.log('null')
}
else{
    toast.warn(`Hello ${name} we received your order!`);
}
}

    return (<>
        <div className='container my-5'>
            <div className="row">

            <div className="col  d-flex justify-content-center ">
                
            <Form className='form-width form '>
            <h5 className='text-center'>Billing Details</h5>
      
  <Form.Group className="mb-3 my-2" controlId="formBasicEmail" >
    <Form.Label>Full Name*</Form.Label>
    <Form.Control type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter your name..." required/>
  </Form.Group>

  <Form.Group className="mb-3 my-2" controlId="formBasicEmail">
    <Form.Label>Mobile Number*</Form.Label>
    <Form.Control type="number" placeholder="Enter your number" required/>
  </Form.Group>

  <Form.Group className="mb-3 my-2" controlId="formBasicEmail">
    <Form.Label>Delivery Address*</Form.Label>
    <Form.Control type="text" placeholder="Enter Delivery Address" required/>
  </Form.Group>
  <Form.Label>Shipping area</Form.Label>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Outside Dhaka (120Tk)" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Dhaka city (60Tk)" />
  </Form.Group>
  <div className="button d-flex justify-content-center">
  <Button variant="danger" onClick={handleSubmit} type="submit">
   PLACE ORDER
  </Button>
  </div>
</Form>

            </div>
            </div>
           
        </div>
        <ToastContainer position="top-left" />
        </>
    )
}
