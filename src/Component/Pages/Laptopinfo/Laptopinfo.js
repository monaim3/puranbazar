import React, { useEffect, useState } from 'react';
import LaptopCard from '../LaptopCard/LaptopCard';
import category1 from '../../assest/latitude-3420-01-500x500.jpg'
import category2 from '../../assest/aspire-3-a315-58-001-500x500.jpg'
import category3 from '../../assest/x415ka-01-500x500.webp'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
const Laptopinfo = () => {
    const [laptops,setLaptops]=useState([])
    
    useEffect(()=>{
       fetch('https://puranbazar-server-rashed409.vercel.app/puranbazar')
       .then(res=>res.json())
       .then(data=>setLaptops(data.slice(0,3)))
    })
    return (
        <div>
            <div className="teamcard grid lg:grid-cols-3 gap-5 p-12" >
            <div className="card w-80 bg-base-100 shadow-xl " >
            
            <figure className="px-10 lg:pt-10">
                <PhotoProvider>
                    <PhotoView src={category1}>
                        <img src={category1} alt="laptop" className="rounded-xl" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body items-center ">
               
                <h2 className="card-title">Category: HP</h2>
             
                <div className="card-actions mt-2">
                    <Link to={`/laptopDeatils/HP`}> <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" >Buy Now</button></Link>
                </div>
            </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl ">
            
            <figure className="px-10 lg:pt-10">
                <PhotoProvider>
                    <PhotoView src={category3}>
                        <img src={category3} alt="laptop" className="rounded-xl" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body items-center">
               
                <h2 className="card-title">Category: ASUS</h2>
             
                <div className="card-actions mt-2">
                    <Link to={`/laptopDeatils/ASUS`}> <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" >Buy Now</button></Link>
                </div>
            </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl">
            
            <figure className="px-10 lg:pt-10">
                <PhotoProvider>
                    <PhotoView src={category2} className="w-full h-8">
                        <img  src={category2} alt="laptop" className="rounded-xl" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body items-center ">
               
                <h2 className="card-title">Category: DELL </h2>
             
                <div className="card-actions mt-2">
                    <Link to={`/laptopDeatils/DELL`}> <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" >Buy Now</button></Link>
                </div>
            </div>
        </div>
         </div>
        </div>
    );
};

export default Laptopinfo;