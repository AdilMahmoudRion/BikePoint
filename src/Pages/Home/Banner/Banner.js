import React from "react";
import './Banner.css'
import img from "../../Shared/Images/banner.jpg";


const Banner = () => {
  return (
    <div className="banner-body">
      {/* -------------banner------------ */}

      <div className="banner container">
        <div className="banner-details">
          <div className="p-3">
            <h1 className="p-1">
              Driving a motor cycle <br /> is like flying
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, aperiam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolore, facere.
            </p>
          </div>
          <div className="booking-page">
            <div className="booking-option first">
              <h5>International Flight</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="booking-option second">
              <h5>Guide Line & measure for helthy Travel</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="booking-option third">
              <h5>International Flight</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        <div className="">
          <img className="banner-img" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
