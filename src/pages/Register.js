import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
export const Register = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      console.log("null");
    } else {
      toast.warn(`Hello ${name} Your Account created`);
    }
  };

  return (
    <>
      <div className="container my-5 ">
        <div className="row">
          <div className="col  d-flex justify-content-center ">
            <Form className="form-width form ">
              <h5 className="text-center">Create your Account</h5>

              <Form.Group className="mb-3 my-2" controlId="formBasicEmail">
                <Form.Label>Full Name*</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Enter your name..."
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3 my-2" controlId="formBasicEmail">
                <Form.Label>Mobile Number*</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter your number"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3 my-2" controlId="formBasicEmail">
                <Form.Label>Enter your Email*</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your Email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3 my-2" controlId="formBasicEmail">
                <Form.Label>Enter your Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your Password"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3 my-2" controlId="formBasicEmail">
                <Form.Label>Re Type your password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Re Type your password"
                  required
                />
              </Form.Group>

              <div className="button d-flex justify-content-center">
                <Button variant="danger" onClick={handleSubmit} type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <ToastContainer position="top-left" />
    </>
  );
};
