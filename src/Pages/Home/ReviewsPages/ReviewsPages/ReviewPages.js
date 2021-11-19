import React, { useEffect, useState } from 'react';
import ReviewPage from '../ReviewPage/ReviewPage';
import './ReviewPages.css'

const ReviewPages = () => {
    const [review, setReview] = useState([]);
 
    useEffect(() => {
      fetch("https://rocky-springs-46684.herokuapp.com/reviews")
        .then((res) => res.json())
        .then((data) => {
          setReview(data);
        });
    }, []);

    return (
        <div>
            <div className="mt-5 mb-5">
          <div className="text-center">
            <h1>Our Happy Client</h1>
            <p className="text-muted">
            We make eat happen
            </p>
            
          </div>
          <div>
            <div className="container bike-review-section">
              {review.map((reviewer) => (
                <ReviewPage
                  key={reviewer._id}
                  reviews={reviewer}
                ></ReviewPage>
              ))}
            </div>
          </div>
        </div>
        </div>
    );
};

export default ReviewPages;