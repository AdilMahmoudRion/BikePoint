import React from 'react';
import './ReviewPage.css'

const ReviewPage = ({reviews}) => {
    console.log(reviews)
    const {comment,rating, name} = reviews;
    const shortName = name ? name.substring(0, 15) : "";
  const shorten = comment ? comment.substring(0, 90) : "";
    return (
       
            <div className="reviewSection">
            <p className="text-center">{shorten}</p>
            <h6>Review: {rating}</h6>
            <h2>{shortName}</h2>
            </div>
      
    );
};

export default ReviewPage;