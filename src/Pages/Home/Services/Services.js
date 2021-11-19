import React from 'react';
import NewService from './NewService/NewService';
import ServiceMainPage from './ServiceMainPage/ServiceMainPage';
import './Services.css';

const Services = () => {
    return (
        <div>
            <ServiceMainPage></ServiceMainPage>
         
        <div>
                <NewService></NewService>
            </div>
        </div>
    );
};

export default Services;