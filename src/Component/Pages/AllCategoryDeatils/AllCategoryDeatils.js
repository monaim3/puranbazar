import React, { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import verifieds from '../../assest/Screenshot_2.png'
const AllCategoryDeatils = ({singleItem,handleWishlist}) => {
  
    const [verify,setverify]=useState({})

    useEffect(()=>{
        fetch(`https://puranbazar-server-rashed409.vercel.app/verify?email=${singleItem.email}`)
        .then(res=>res.json())
        .then(data=>setverify(data))
       },[singleItem.email])
    return (
        <>
            <div className="card w-80 bg-base-100 shadow-xl " >
                <button onClick={()=>handleWishlist(singleItem)} className='ml-auto p-2'><i class="fa-solid fa-heart text-3xl  text-rose-600" title="wishList"></i></button>
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
                <h2 className="card-title">Name:{singleItem.sellerName} {verify.varified ? <span><img className='w-8' src={verifieds} alt="" /></span> : ''} </h2>
                <h2 className="card-title">Category: {singleItem.category}</h2>
                
                <p>
                  Sell Price:{" "}
                  <span className="font-semibold">
                    $ {singleItem.resaleprice}
                  </span>
                </p>
                <p className="items-start">
                  Processor: {singleItem.description.slice(0, 100)}
                </p>

                <p className="items-start">
                  originalPrice: $ <del>{singleItem.originalPrice}</del>
            </p>
                <p className="items-start">location: {singleItem.location}</p>
                <p className="items-start">
                  Used:{singleItem.yearofUsed} years
                </p>
                <p className="items-start">
                PostedDate: {singleItem.date} 
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
        </>
    );
};

export default AllCategoryDeatils;