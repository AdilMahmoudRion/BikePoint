import React, { useEffect, useState } from 'react';

const BookingItem = (props) => {

const {bikeName,email,price,_id}=props.bookingItem;

    return (
        <div>
            <div>
                <h1>{bikeName}</h1>
                <p>{email}</p>
                <h3>{price}</h3>
            </div>
        </div>
    );
};

export default BookingItem;