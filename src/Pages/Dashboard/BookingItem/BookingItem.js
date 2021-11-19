import React, { useEffect, useState } from 'react';
import './BookingItem.css'
const BookingItem = (props) => {

const {bikeName,email,price,_id}=props.bookingItem;

    return (
        <div className="container">
          
            <div className="booking-item-details">
                <div className="details-heading">
                <h3>Bike Name: {bikeName}</h3>
                <p>Contact No: {email}</p>
                <h6>Current Price: {price}</h6>
                </div>
                <div className="order-status">
                    <h4 className="order-status-section">Order Status</h4>
                    <div className="mt-3">
                        <p>Pending</p>
                    </div>
                </div>
            </div>
          

        </div>
    );
};

export default BookingItem;