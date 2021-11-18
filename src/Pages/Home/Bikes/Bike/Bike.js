import React, { useState } from 'react';
import './Bike.css'
import { Link } from 'react-router-dom';
import Booking from '../../../Booking/Booking/Booking';
import { Alert } from "@mui/material";


const Bike = ({ bikes}) => {
  const { name, img, _id, price, Details, rating } = bikes;
  const [openBooking, setBookingOpen] = React.useState(false);
   const [bookingSuccess, setBookingSuccess] = useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);
  const shorten = Details ? Details.substring(0, 70) : "";
  return (
    <div className="bike-information">
      {bookingSuccess && (
        <Alert severity="success">booking successfully!</Alert>
      )}
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
                className="text-center p-1 booking-button btn2 w-100"
                onClick={handleBookingOpen}
                to={`/bookingPage/${_id}`}
              >
                Booking Now{" "}
              </Link>
        
            <Booking
              bikes={bikes}
              openBooking={openBooking}
              handleBookingClose={handleBookingClose}
              setBookingSuccess={setBookingSuccess}
            ></Booking>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bike;