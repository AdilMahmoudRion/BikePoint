import React, { useEffect, useState } from 'react';
import NewServiceList from '../NewSeviceList/NewServiceList';
import './NewService.css';




const NewService = () => {

    const [bikes, setBikes] = useState([]);
 
    useEffect(() => {
      fetch("https://rocky-springs-46684.herokuapp.com/bikes/all")
        .then((res) => res.json())
        .then((data) => {
          setBikes(data);
        });
    }, []);
console.log(bikes);

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
            <div className="bikes container">
              {bikes.map((bikes) => (
                <NewServiceList
                  key={bikes._id}
                  bikes={bikes}
                ></NewServiceList>
              ))}
            </div>
          </div>
        </div>
        </div>
    );
};

export default NewService;