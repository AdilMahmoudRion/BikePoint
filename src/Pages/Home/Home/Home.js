import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Bikes from '../Bikes/Bikes/Bikes';
import Product from '../Product/Product';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Product></Product>
            <Bikes></Bikes>
                <About></About>
            
        </div>
    );
};

export default Home;