import React from 'react';
import Banner from '../Banner/Banner';
import Bikes from '../Bikes/Bikes/Bikes';
import Product from '../Product/Product';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Product></Product>
            <Bikes></Bikes>
            
        </div>
    );
};

export default Home;