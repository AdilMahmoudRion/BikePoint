import React, { useEffect, useState } from 'react';
import './BookingPage.css'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Booking from '../Booking/Booking';
import { Alert } from '@mui/material';

const BookingPage = () => {
    
    const {bookingId} = useParams();
    console.log(bookingId)
    const [booking, setBooking] = useState({});
  const { name, Details, rating,engine, img, price } = booking;

  const [openBooking, setBookingOpen] = React.useState(false);
   const [bookingSuccess, setBookingSuccess] = useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);

  useEffect(() => {
    fetch(`http://localhost:5000/bookingPage/${bookingId}`)
      .then((res) => res.json())
      .then((data) => {
        setBooking(data);
      });
  }, []);
    
    console.log(booking.name);
    return (
        <div>
           {bookingSuccess && (
        <Alert severity="success">booking successfully!</Alert>
      )}
            <div className="container booking-section">
                <div>
                    <img className="booking-image" src={img} alt="" />
                </div>
                <div>
                    <h1>{name}</h1>
                    <p>{engine}</p>
                    <p>{Details}</p>
                    <h5>{rating}</h5>
                    <h1>{price}</h1>
                </div>
              <div className="mt-3">
              <button 
               onClick={handleBookingOpen}
              className="buy-now">
                Buy now
                
                </button>
                <Link
                to="/home"
                 className="buy-now ms-1">
                Back To Home
                
                </Link>
                <Booking
              bikes={booking}
              openBooking={openBooking}
              handleBookingClose={handleBookingClose}
              setBookingSuccess={setBookingSuccess}
            ></Booking>
              </div>
            </div>
    </div>
       
    );
};

export default BookingPage;