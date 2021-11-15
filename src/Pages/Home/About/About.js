import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="about-section">
        <div className="banner-sec">
          <div className="mb-4 banner-text">
            <h1 className="mb-3 banner-head">About bikestore</h1>
            <p>
              The more we drive the car the better they seem to operate operate.
              No noise, just stopping power! Quis autem vel eum iure
              reprehenderit qui in ea voluptate velit esse quam vel illum qui
              dolorem eum fugiat quo voluptas nulla pariatur erit qui in ea
              voluptate verit qui in ea voluptate vele.
            </p>
          </div>
          <div className="power">
            <div className="demo-sec">
              <img
                className="banner-logo"
                src="https://www.pngkit.com/png/detail/251-2514828_motorbike-logo-vectors-motorbike-logo-vector-png.png"
                alt=""
              />
              <img src="" alt="" />
              <div className="demo-text">
                <h4 className="m-0 p-1">Engine Power</h4>
                <p className="m-0 p-1">205hp (151 kW)</p>
              </div>
            </div>
            <div className="demo-sec">
              <img
                className="banner-logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSafdQGT4jboskIJJTn5cjW_hoNrDUZcspVJw&usqp=CAU"
                alt=""
              />
              <img src="" alt="" />
              <div className="demo-text">
                <h4 className="m-0 p-1">Engine type</h4>
                <p className="m-0 p-1">4-Stroke Cylinder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
