import React from "react";
import Footer from "../../Footer/Footer";
import NewService from "./NewService/NewService";
import ServiceMainPage from "./ServiceMainPage/ServiceMainPage";
import "./Services.css";

const Services = () => {
  return (
    <div>
      <ServiceMainPage></ServiceMainPage>
      <NewService></NewService>
      <Footer></Footer>
    </div>
  );
};

export default Services;
