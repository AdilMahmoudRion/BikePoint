import React from 'react';
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
            
        </div>
    );
};

export default Home;