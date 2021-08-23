import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useCart } from "react-use-cart";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Modal, Form } from "react-bootstrap";
import "../App.css";

const Navigation = () => {
  const [click, setClick] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { totalUniqueItems } = useCart();

  function handleMenuClick() {
    setClick(!click);
  }
  return (
    <>
      <Navbar className="sticky-top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            {" "}
            <Link to="/" className="Link">
              Online-Shop!
            </Link>{" "}
          </Navbar.Brand>
          <Navbar.Toggle
            className="Toggle-class"
            aria-controls="basic-navbar-nav"
            onClick={handleMenuClick}
          >
            <span>{click ? <CloseIcon /> : <MenuIcon />}</span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <Link to="/" className="Link">
                  HOME
                </Link>{" "}
              </Nav.Link>
              <Nav.Link>
                <Link to="/products" className="Link">
                  PRODUCTS
                </Link>{" "}
              </Nav.Link>
              <Nav.Link>
                <Link to="/" className="Link" onClick={handleShow}>
                  ACCOUNT
                </Link>{" "}
              </Nav.Link>
              <Nav.Link>
                <Link to="/Cart">
                  <Button variant="warning" className="text-light" size="sm">
                    <span>{totalUniqueItems}</span>
                    <ShoppingCartIcon />
                  </Button>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header className="text-center bg-success text-light" closeButton>
          <Modal.Title>Welcome to Login Page!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword" required>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <div className="modal-form-submit d-flex justify-content-center">
              <Button
                variant="primary"
                type="submit"
                className="mx-3 order"
                onClick={(e) => e.preventDefault()}
              >
                LOGIN
              </Button>
            </div>
            <p className="text-center text-muted mt-3">
              Do't have an account yet! click on Register
            </p>
          </Form>
        </Modal.Body>
        <Link to="/Register" className="Link">
          <Modal.Footer className="d-flex justify-content-center">
            <Button onClick={handleClose} variant="danger" className="order">
              REGISTER
            </Button>
          </Modal.Footer>
        </Link>
      </Modal>
    </>
  );
};

export default Navigation;
