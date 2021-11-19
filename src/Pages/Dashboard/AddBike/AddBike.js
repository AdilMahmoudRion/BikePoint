import React from "react";
import axios from "axios";
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
    axios.post("http://localhost:5000/addBike", data).then((res) => {
      if (res.data.insertedId) {
        alert("added successfully");
        reset();
      }
    });
  };
  return (
    <div>
      <h1>Add Nike</h1>
      <div className="w-50 hotel-added">
        <h1 className="text-center">Please Add a Service</h1>
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
            placeholder="engine
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
            placeholder="insert bike image link"
            {...register("img", { required: true })}
          />
          {errors.img && <p>bike image is required.</p>}
          <textarea
            placeholder="Type Bike details specific"
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
