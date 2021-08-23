import React from "react";
import { useCart } from "react-use-cart";
import { Table } from "react-bootstrap";
import "../App.css";
import { Link } from "react-router-dom";
const Cart = () => {
  const {
    isEmpty,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty)
    return (
      <>
        <div className="d-flex justify-content-center align-items-center mt-4">
          <img src="img/empty.png" alt="Cart is empty img"></img>
        </div>
      </>
    );
  return (
    <div className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h3 className="text-center mb-3">TOTAL ITEMS: {totalItems}</h3>
          <Table className="table table-light table-hover m-0">
            <thead>
              <tr>
                <th>Product</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img alt="" src={item.image} height="80px" />
                    </td>
                    <td>
                      <b>{item.title}</b>
                    </td>
                    <td>
                      <b>${item.price}</b>
                      <p className="text-muted">(per piece)</p>
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                        className="btn btn-outline-primary mx-2 "
                      >
                        <b>-</b>
                      </button>

                      <b> {item.quantity}</b>

                      <button
                        onClick={() => {
                          updateItemQuantity(item.id, item.quantity + 1);
                        }}
                        className="btn btn-outline-primary mx-2 my-2 "
                      >
                        <b> +</b>
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger ms-2"
                        onClick={() => {
                          removeItem(item.id);
                        }}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <div className="box2 text-center mt-4">
          <h5 className="my-3">Total Price : ${cartTotal}</h5>
          <Link to="/Contact">
            <button className="btn btn-primary order">Order Now!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
