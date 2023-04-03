import React from 'react';
import './Freeservice.css'
const Freeservice = () => {
    return (
        <div>
            <div className="free-service grid grid-cols-2 p-8 lg:p-4 gap-5 lg:grid lg:grid-cols-4  mt-12">
                <div className="firstitem lg:flex justify-evenly items-center">
                <i class="fa-solid fa-truck"></i>
                    <div className="truck-text">
                        <h3 className='text-1xl'>FREE DELIVERY

                        </h3>
                        <h4 className='text-base'>Free delivery worldwide

                        </h4>
                    </div>
                </div>
              
                <div className="firstitem lg:flex justify-evenly items-center">
                <i class="fa-solid fa-arrows-rotate"></i>
                    <div className="truck-text">
                        <h3 className='text-1xl'>RETURN EXCHANGE

                        </h3>
                        <h4 className='text-base'>Return exchange 21 days

                        </h4>
                    </div>
                </div>
                <div className="firstitem lg:flex justify-evenly items-center">
                <i class="fa-solid fa-headphones"></i>
                    <div className="truck-text">
                        <h3 className='text-1xl'>QUALITY SUPPORT

                        </h3>
                        <h4 className='text-base'>Support online 24/7

                        </h4>
                    </div>
                </div>
                <div className="firstitem lg:flex justify-evenly items-center">
                <i class="fa-solid fa-umbrella"></i>
                    <div className="truck-text">
                        <h3 className='text-1xl'>SAFE SHOPPING
                        </h3>
                        <h4 className='text-base'>Ensure genuine 100%

                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Freeservice;