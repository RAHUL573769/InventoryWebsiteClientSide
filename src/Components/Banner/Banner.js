import React from "react";
import { Carousel } from "react-bootstrap";
import laptop1 from "../../Images/laptop1.jpg";
import laptop2 from "../../Images/laptop2.jpg";
import laptop3 from "../../Images/laptop3.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={laptop1} alt="First slide" />
          <Carousel.Caption>
            <h1 className="text-dark">First Laptop</h1>
            <p className="text-dark">Picture of First LAPTOP</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={laptop2} alt="Second slide" />

          <Carousel.Caption>
            <h3 className="text-dark">Second Laptop</h3>
            <p className="text-dark">Picture of 2nd Laptop</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={laptop3} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="text-dark">Third Laptop</h3>
            <p className="text-dark">Picture of 3 rd Laptop</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
