import React, { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Loading from '../../../SharedPage/Loding/Loading';

const WishList = () => {
    const [wish,setWish]=useState([])
    useEffect(()=>{
        fetch('https://puranbazar-server-rashed409.vercel.app/wishlist')
        .then(res=>res.json())
        .then(data=>setWish(data))
    })
    console.log(wish);
    return (
        <>
         <h3 className='text-2xl text-center text-rose-500 font-semibold'>WishList</h3>
      {wish.length > 0 ? (
        <div className="teamcard grid lg:grid-cols-3 gap-5 p-12">
          {wish.map((singleItem) => (
            <div className="card w-70 bg-base-100 shadow-xl  ml-24 lg:ml-2">

              <figure className="px-10 lg:pt-10">
                <PhotoProvider>
                  <PhotoView src={singleItem.img}>
                    <img
                      src={singleItem.img}
                      alt="laptop"
                      className="rounded-xl"
                    />
                  </PhotoView>
                </PhotoProvider>
              </figure>
              <div className="card-body items-start ">
                <h2 className="card-title">{singleItem.name}</h2>
                <h2 className="card-title">Category: {singleItem.category}</h2>
                <p>
                  Sell Price:
                  <span className="font-semibold">
                   
                    $ {singleItem.resaleprice}
                  </span>
                </p>
                
               
                <p className="items-start">location: {singleItem.location}</p>
                <p className="items-start">
                  Used:{singleItem.yearofUsed} years
                </p>
                <p className="items-start">
                  Date:{singleItem.timeposted} Posted
                </p>
                <div className="card-actions">
                  <label
                    htmlFor={`buynow${singleItem._id}`}
                    className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                  >
                    Buy Now
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Loading></Loading>
      )}
        </>
    );
};

export default WishList;