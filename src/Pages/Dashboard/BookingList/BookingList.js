import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import BookingItem from "../BookingItem/BookingItem";
import Review from "../Review/Review";
import './BookingList.css';

const BookingList = () => {
  const { user } = useAuth();
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    const url = `https://rocky-springs-46684.herokuapp.com/booking?email=${user.email}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [user.email]);
  return (
    <div className="container">
      <div className="booking-list-section">
        
     <div>
   
     <div className="booking-list-item">
     <h1 className="review-header">BuyIng List</h1>
        <div>
          {booking.map((booking) => {
            return (

              <BookingItem
                // eslint-disable-next-line no-undef
                Key={booking._id}
                bookingItem={booking}

              ></BookingItem>
            );
          })}
        </div>
      </div>
     </div>
      <div className="review-section">
        <h1 className="review-header">Review section</h1>
        <div>
        <Review></Review>
        </div>
      </div>
      </div>

    </div>
  );
};

export default BookingList;
