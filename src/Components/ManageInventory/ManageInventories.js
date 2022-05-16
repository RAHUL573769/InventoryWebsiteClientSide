import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Manage.css";

const ManageInventories = () => {
  const [manageinventories, setManageInventories] = useState([]);

  const navigate = useNavigate();

  const navigateToAddItem = () => {
    const url = "/additem";
    navigate(url);
  };

  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((res) => res.json())
      .then((data) => setManageInventories(data));
  }, []);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");

    if (proceed) {
      fetch(`http://localhost:5000/inventory/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          const remainning = manageinventories.filter(
            (singleinventory) => singleinventory._id !== id
          );
          setManageInventories(remainning);
          console.log(manageinventories);
        });
    }
  };

  return (
    <div className="cardinfo">
      {manageinventories.map((product) => (
        <div className="">
          <div className="card ">
            <img
              className="w-50"
              src={product.img}
              Same="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">
                <h4>Price:</h4>
                {product.price}
              </p>
              <p className="card-text">
                {" "}
                <h4>Id:</h4>
                {product._id}
              </p>
              <button
                onClick={navigateToAddItem}
                className="btn btn-dark my-4 mx-2"
              >
                Add New Laptop
              </button>
              <button
                onClick={() => handleDelete(product._id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageInventories;
