import React from 'react';
import error from '../../assest/page404animation.gif'
const Erropage = () => {
    return (
        <div className='flex justify-items-center items-center'>
            <img className='w-[90%] h-[100vh]' src={error} alt="" />
        </div>
    );
};

export default Erropage;