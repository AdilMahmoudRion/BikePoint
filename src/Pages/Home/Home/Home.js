import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Bikes from "../Bikes/Bikes/Bikes";
import ServiceMainPage from "../Services/ServiceMainPage/ServiceMainPage";
import Login from "../Login/Login/Login"
import Footer from "../../Footer/Footer"
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ServiceMainPage></ServiceMainPage>
      <Bikes></Bikes>
      <About></About>
      <Login></Login>
      <Footer></Footer>
    </div>
  );
};

export default Home;
