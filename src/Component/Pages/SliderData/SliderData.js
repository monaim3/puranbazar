import React, { useState } from 'react';
import {slider} from './slider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons'

const SliderData = () => {
    const [current,setCurrent]=useState(0)
    const length=slider.length
    const nextSlide=()=>{
       setCurrent(current===length-1? 0: current+1 )
    }
   const prevSlide=()=>{
    setCurrent(current===0? length-1 : current-1 )
   }
    return (
        <div className='p-12 relative transition-all duration-1000 delay-1000' >
        {slider.map((slide,ind)=><div key={ind} className=''> 
        <FontAwesomeIcon  onClick={prevSlide}
            className='text-4xl absolute top-[50%] left-[50px] text-rose/70 cursor-pointer select-none z-[2]'
            size={100} icon={faCircleLeft} />
          {ind===current && <img className='h-1/5vh' src={slide.image} width='1200' height='400'/>}
            <FontAwesomeIcon  onClick={nextSlide}
            className='text-4xl absolute top-[50%] right-[50px] text-rose/70 cursor-pointer select-none z-[2]'
            size={100} icon={faCircleRight} />
        </div>)
        }
    </div>
    );
};

export default SliderData;