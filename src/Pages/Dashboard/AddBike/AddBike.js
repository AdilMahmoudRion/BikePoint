import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddBike.css";

const AddBike = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    axios.post("https://rocky-springs-46684.herokuapp.com/addBike", data).then((res) => {
      if (res.data.insertedId) {
        alert("added successfully");
        reset();
      }
    });
  };
  return (
    <div className="container added-bike">

      <div className="w-50 bike-added">
        <h1 className="text-center p-4">Please Add a New Bike</h1>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Type Bike Name"
            {...register("name", { required: true })}
          />
          {errors.bikeName && <p>bike name is required.</p>}
          <input
            placeholder="Customer Retting"
            {...register("rating", { min: 2, max: 10 }, { required: true })}
          />
          {errors.rating && (
            <p className="text-muted">Rating required Out of 10.</p>
          )}
          <input
            placeholder="Engine
            "
            {...register("engine", { min: 1, max: 10 }, { required: true })}
          />
          {errors.address && <p>Address required.</p>}
          <input
            placeholder="Price"
            type="number"
            {...register("price", { required: true })}
          />
          {errors.rate && <p>Rate required.</p>}
          <input
            placeholder="Insert bike image link"
            {...register("img", { required: true })}
          />
          {errors.img && <p>bike image is required.</p>}
          <textarea
          className="textarea"
            placeholder="Type Bike specific details "
            {...register("Details")}
          />
          {errors.Details && <p>Bike Info Required</p>}
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddBike;
