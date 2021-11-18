import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import BookingItem from "../BookingItem/BookingItem";

const BookingList = () => {
  const { user } = useAuth();
  const [booking, setBooking]= useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/booking?email=${user.email}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [user.email]);
  console.log(booking);
  return (
    <div>
      <h1>booking list{booking.length}</h1>
      <div>
      {booking.map((booking) => {
        return (

          <BookingItem
            // eslint-disable-next-line no-undef
            Key={booking._id}
            bikeName={booking.bikeName}
            price={booking.price}
            byreName={booking.Name}
            email={booking.email}

          ></BookingItem>
        );
      })}
      </div>
     
    </div>
  );
};

export default BookingList;
