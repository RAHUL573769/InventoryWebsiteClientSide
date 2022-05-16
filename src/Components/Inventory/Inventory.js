import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Inventory = () => {
  const [singleinventory, setSingleInventory] = useState([]);

  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/inventory/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleInventory(data));
  }, [id]);

  const handleManageInventory = () => {
    const url = "/manageinventory";
    navigate(url);
  };
  const handleDelivered = () => {
    const finalValue = Number(--singleinventory.Quantity);

    if (singleinventory.Quantity > 0) {
      const updatedDecreasedValue = {
        finalValue,
      };

      const url = `http://localhost:5000/inventory/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedDecreasedValue),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          window.location.reload();
          alert("quantity decreased succesfully ");
        });
    } else {
      alert("Cannot Decrease Quantity");
    }
  };
  const handleRestock = () => {
    const restockValue = Number(document.getElementById("restock").value);

    const quantityValue = Number(singleinventory.Quantity);

    const finalValue = restockValue + quantityValue;

    if (restockValue > 0 && restockValue != " ") {
      const updatedValue = {
        finalValue,
      };

      const url = `http://localhost:5000/inventory/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedValue),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          alert("Quantity updated");
          window.location.reload();
        });
    } else {
      alert("Please Enter a Positive Value");
    }
  };
  return (
    <div>
      {
        <h1>
          {singleinventory.name}
          {<p>Id:{singleinventory._id}</p>}
          {<p>Description:{singleinventory.description}</p>}
          {<p>Price:{singleinventory.price}</p>}
          {<p>Supply:{singleinventory.SupplierName}</p>}
          {<p>Quantity:{singleinventory.Quantity}</p>}
          <div>
            <button onClick={handleDelivered} className="btn btn-dark">
              Delivered
            </button>
            <button
              onClick={handleManageInventory}
              className="btn btn-dark mx-4"
            >
              Manage Inventories{" "}
            </button>
          </div>
          <div>
            <h1>Restock Laptop</h1>
            <input id="restock" type="text" name="name" />

            <button onClick={handleRestock} className="btn btn-dark">
              Click Here To Restock
            </button>
          </div>
        </h1>
      }
    </div>
  );
};

export default Inventory;
