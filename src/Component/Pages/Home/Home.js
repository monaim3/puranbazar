import React from 'react';
import Advertisement from '../Advertisement/Advertisement';
import Banner from '../Banner/Banner';
import Brand from '../Brand/Brand';
import Freeservice from '../Freeservice/Freeservice';
import Laptopinfo from '../Laptopinfo/Laptopinfo';
import SliderData from '../SliderData/SliderData';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { useState } from 'react';

import SliderContent from '../Carousel/SliderContent';
import Slider from '../Carousel/Slider';

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        })
    }, []);
    
    const handleBackToTop = () =>{
        window.scrollTo(500, 0);
    }

    return (
        <div>
           <Slider></Slider>
            {/* <Banner></Banner> */}
            <Advertisement></Advertisement>
            <Freeservice></Freeservice>
            <Laptopinfo></Laptopinfo>
            <SliderData></SliderData>
             <Brand></Brand>
             <button className={isVisible ? "back-to-top" : "back-to-top d-none"} onClick={handleBackToTop}title="Back To Top"><FontAwesomeIcon icon={faArrowUp} /></button>

        </div>
    );
};

export default Home;