import React, { useState } from "react";
import Products from "./Products";
import { Carousel } from "react-bootstrap";
import "../App.css";

const Home = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Carousel
        className="Carousel"
        activeIndex={index}
        onSelect={handleSelect}
        variant="light"
      >
        <Carousel.Item className="Carousel-item">
          <img
            className="d-block w-100 item-img"
            src="img/1.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="d-flex h-100 align-items-center justify-content-center">
            <h1>Summer collection</h1>
            <p className="text-danger">Up to 25% off</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="Carousel-item">
          <img
            className="d-block w-100 item-img"
            src="img/2.jpg"
            alt="Second slide"
            height="400px"
          />

          <Carousel.Caption className="d-flex h-100 align-items-center justify-content-center">
            <h1>Winter collection</h1>
            <p className="text-warning">Up to 45% off</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="Carousel-item">
          <img
            className="d-block w-100 img-fluid item-img"
            src="img/3.jpg"
            alt="Third slide"
            height="400px"
          />

          <Carousel.Caption className="d-flex h-100 align-items-center justify-content-center">
            <h1>Spring collection</h1>
            <p className="text-warning">Up to 35% off</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Products />
    </>
  );
};

export default Home;
