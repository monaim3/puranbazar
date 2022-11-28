import React from 'react';
import Advertisement from '../Advertisement/Advertisement';
import Banner from '../Banner/Banner';
import Freeservice from '../Freeservice/Freeservice';
import Laptopinfo from '../Laptopinfo/Laptopinfo';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertisement></Advertisement>
            <Freeservice></Freeservice>
            
            <Laptopinfo></Laptopinfo>
        </div>
    );
};

export default Home;