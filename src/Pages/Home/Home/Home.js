import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Bikes from "../Bikes/Bikes/Bikes";
import ServiceMainPage from "../Services/ServiceMainPage/ServiceMainPage";
import Login from "../Login/Login/Login"
import Footer from "../../Footer/Footer"
import ReviewPages from "../ReviewsPages/ReviewsPages/ReviewPages";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ServiceMainPage></ServiceMainPage>
      <Bikes></Bikes>
      <About></About>
      <ReviewPages></ReviewPages>
      <Login></Login>
      <Footer></Footer>
    </div>
  );
};

export default Home;
