import React, { useEffect, useState } from 'react';
import './Bikes.css'
import Bike from '../Bike/Bike';

const Bikes = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/bikes")
        .then((res) => res.json())
        .then((data) => {
          setBikes(data);
        });
    }, []);
 
    return (
      <div>
        <div className="mt-4">
          <div className="text-center">
            <h1>Find the perfect hotel on Booking.com</h1>
            <p className="text-muted">
              From budget hotels to luxury rooms and everything in between
            </p>
          </div>
          <div>
            <div className="Hotels container">
              {bikes.map((bikes) => (
                <Bike key={bikes._id} bikes={bikes}></Bike>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Bikes;