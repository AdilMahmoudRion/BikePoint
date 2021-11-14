import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const BookingList = () => {
  const { user } = useAuth();
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    const url = `https://safe-ocean-13118.herokuapp.com/booking?email=${user.email}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);
  console.log(booking);
  return (
    <div>
      <h1>booking list{booking.length}</h1>
    </div>
  );
};

export default BookingList;
