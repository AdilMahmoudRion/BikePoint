import { Alert } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Booking from '../Booking/Booking';
import './BookingPage.css';

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
    fetch(`https://rocky-springs-46684.herokuapp.com/bookingPage/${bookingId}`)
      .then((res) => res.json())
      .then((data) => {
        setBooking(data);
      });
  }, []);
    
    console.log(booking.name);
    return (
        <div>
          
            <div className="container booking-section">
               {bookingSuccess && (
        <Alert severity="success">booking successfully!</Alert>
      )}
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
              <div className="mt-3 btn-grp">
              <button 
               onClick={handleBookingOpen}
              className="buy-now-btn">
                BOOKING NOW
                
                </button>
                <Link 
                to="/home"
                 className="back-btn ms-1">
                BACK TO HOME
                
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