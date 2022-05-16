import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Inventory from "../Inventory/Inventory";
import "./Inventories.css";

const Inventorie = () => {
  const [inventories, setInventories] = useState([]);

  const navigate = useNavigate();
  const handleUpdateInventory = (id) => {
    // navigate(`http://localhost:5000/inventory/${id}`);

    const url = `/inventory/${id}`;
    navigate(url);
  };

  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);
  return (
    <div>
      <section id="inventory" className=" section bg-light border-top my-4">
        <div className="containers">
          <div>
            <h3 className="text-center my-3">Inventories</h3>

            <div className="container">
              {inventories.slice(0, 6).map((inventory) => (
                <div>
                  <p>
                    <h3> Name :{inventory.SupplierName}</h3>

                    <p>
                      <img className="w-50" src={inventory.img} alt="" />
                    </p>
                    <p>
                      <h3>Description:{inventory.description}</h3>
                    </p>
                    <p>
                      <h3>Price :{inventory.price}</h3>
                    </p>
                    <p>
                      <h3>Quantity:{inventory.Quantity}</h3>
                    </p>
                    <p>
                      <h3>Supply Name:{inventory.SupplierName}</h3>
                    </p>
                    <button
                      onClick={() => handleUpdateInventory(inventory._id)}
                      className="btn btn-dark"
                    >
                      Update Your Inventories
                    </button>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inventorie;
