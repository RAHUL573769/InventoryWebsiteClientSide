import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    alert("Data Added Succesfully!!!!Enter Another!!!!");
    const url = "http://localhost:5000/inventory";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center">Please add Inventory</h2>
      <form className="d-flex  flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Photo Url"
          className="mb-2"
          type="text"
          {...register("img")}
        />
        <input
          placeholder="Add Description"
          className="mb-2"
          {...register("description")}
        />
        <input
          placeholder="Laptop Name"
          className="mb-2"
          {...register("name")}
        />
        <input
          placeholder="Price"
          className="mb-2"
          type="number"
          {...register("price")}
        />
        <input
          placeholder="Quantity"
          className="mb-2"
          type="number"
          {...register("Quantity")}
        />
        <input
          placeholder="Supplier Name"
          className="mb-2"
          {...register("SupplierName", { required: true })}
        />
        {/* <input
          placeholder="Photo Url"
          className="mb-2"
          type="text"
          {...register("img")}
        /> */}
        <input className="btn btn-dark" type="submit" value="Add Service" />{" "}
        <Link to="/manageinventory"> Go Back to Manage Inventory</Link>
      </form>
    </div>
  );
};

export default AddItems;
