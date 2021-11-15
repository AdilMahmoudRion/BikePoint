import React from "react";
import './Banner.css'
import img from "../../Shared/Images/banner.jpg";
import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <div className="banner-body">
      {/* -------------banner------------ */}

      <div className="banner container">
        <div className="banner-details">
          <div className="p-3">
            <h1 className="p-1 header">
              Driving a motor cycle is like<br />  flying
            </h1>
            <p className="header-p p-1">
            Browse our range of Gore-Tex motorcycle clothing including Rukka, Dainese, Richa, Alpinestars, and more
            </p>
          </div>
       
         <div className="p-2">
         <Link className="banner-btn" to="/">Learn More</Link>
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
