import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Feed.css";

const Feedback = () => {
  return (
    <div className="div">
      <h1 className="text-center">Our Feedbacks</h1>
      <div className="container">
        <div className="card">
          <h2>Person 1</h2>
          <p>This is a Good Inventory for laptops</p>
        </div>
        <div className="card">
          <h2>Person 2 </h2>
          <p>This is a Good Inventory for laptops</p>
        </div>
        <div className="card">
          <h2>Person 3</h2>
          <p>This is a Good Inventory for laptops in the world</p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
