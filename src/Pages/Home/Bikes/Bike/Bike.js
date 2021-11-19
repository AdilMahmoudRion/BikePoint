import React from 'react';
import './Bike.css'
import { Link } from 'react-router-dom';



const Bike = ({ bikes}) => {
  const { name, img, _id, price, Details, rating } = bikes;
  
  const shorten = Details ? Details.substring(0, 70) : "";
  return (
    <div className="bike-information">
      
      <div className="bike-sec">
        <div className="logo">
          <img className="bike-img" src={img} alt="" />
        </div>
        <div className="bike-details">
          <div className="bike-name">
            <h5>{name}</h5>
            <div>
              <p className="reviews">
                reviews <span className="span-tag">{rating}</span>
              </p>
            </div>
          </div>
          <p>Address: {shorten}...</p>
          <h4>
            <span className="text-muted">From: </span>
            <strong className="rate">BDT {price}</strong>
          </h4>
          <div className="cnf-button">
          
       
              <Link
                className="text-center p-1 booking-button btn2"
                to={`/bookingPage/${_id}`}
              >
                Booking Now{" "}
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bike;