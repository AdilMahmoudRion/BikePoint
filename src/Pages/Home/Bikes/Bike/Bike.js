import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import Booking from '../../../Booking/Booking/Booking';
import './Bike.css'

const Bike = ({bikes}) => {
    const { name, img, _id, price, Details, rating } = bikes;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
     const shorten = Details ? Details.substring(0, 70) : "";
    return (
      <div>
        <div className="bike-information">
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
                className="p-1 text-center booking-button btn1 w-50"
                to={`/bike/${_id}`}
              >
                Details{" "}
              </Link>
              <Button variant="contained" onClick={handleBookingOpen}>
                <Link
                  className="text-center p-1 booking-button btn2 w-50"
                  to={`/bike/${_id}`}
                >
                  Booking Now{" "}
                </Link>
              </Button>
                        <Booking
                            bikes={bikes}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
               
              ></Booking>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Bike;