import React, { useEffect, useState } from 'react';
import './Bikes.css'
import Bike from '../Bike/Bike';

const Bikes = () => {
  const [bikes, setBikes] = useState([]);
 
    useEffect(() => {
      fetch("https://rocky-springs-46684.herokuapp.com/bikes")
        .then((res) => res.json())
        .then((data) => {
          setBikes(data);
        });
    }, []);

 
    return (
      <div>
        <div className="mt-5 mb-5">
          <div className="text-center">
            <h1>Find the perfect Bike on Bike point</h1>
            <p className="text-muted">
            Find the Best Motorbike
            </p>
            
          </div>
          <div>
            <div className="Hotels container">
              {bikes.map((bikes) => (
                <Bike
                  key={bikes._id}
                  bikes={bikes}
                ></Bike>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Bikes;