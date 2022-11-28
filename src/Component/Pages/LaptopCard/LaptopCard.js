import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
const LaptopCard = ({laptop}) => {
    const {name,_id,resaleprice,location,originalPrice,yearofUsed,timeposted,description,img,category}=laptop
    return (
        <div className="card w-80 bg-base-100 shadow-xl ">
            
            <figure className="px-10 lg:pt-10">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="laptop" className="rounded-xl" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body items-start ">
                <h2 className="card-title">{name}</h2>
                <h2 className="card-title">Category: {category}</h2>
                <p>Sell Price: <span className='font-semibold'> $ {resaleprice}</span></p>
                <p className='items-start'>Processor: {description.slice(0, 100)}</p>
               
                <p className='items-start'>originalPrice: $ <del>{originalPrice}</del></p>
                <p className='items-start'>location: {location}</p>
                <p className='items-start'>Used:{yearofUsed} years</p>
                <p className='items-start'>Date:{timeposted} Posted </p>
                <div className="card-actions">
                    <Link to={`/laptopDeatils/${category}`}> <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" >Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default LaptopCard;