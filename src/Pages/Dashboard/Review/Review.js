import axios from "axios";
import React from 'react';
import './Review.css';
import { useForm } from "react-hook-form";

const Review = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        axios.post("https://rocky-springs-46684.herokuapp.com/reviews", data).then((res) => {
            if (res.data.insertedId) {
                alert("added successfully");
                reset();
            }
        });
    };

    return (
        <div>
            <div className="container added-bike">

                <div className="w-100">
                   
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <input
                            placeholder="YOUR NAME"
                            {...register("name", { required: true })}
                        />
                        {errors.name && <p>name is required.</p>}
                        <input
                            placeholder="GIVE US YOUR RATTING"
                            {...register("rating", { min: 2, max: 5 }, { required: true })}
                        />
                        {errors.rating && (
                            <p className="text-muted">Rating out  of 5.</p>
                        )}
                        
                        
                     
                        <textarea
                            className="textarea"
                            placeholder="SAY SOMTHING"
                            {...register("comment")}
                        />
                        {errors.comment && <p>Bike Info Required</p>}
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;