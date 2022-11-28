import React from 'react';

const AdvertiseCard = ({ad}) => {
    if(!ad.sold){
    return (
        <>
           <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={ad.img} alt="Album"/></figure>
            <div className="card-body">
              <h2 className="card-title">{ad.name}</h2>
              <p>Price: {ad.resaleprice}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Ad</button>
              </div>
            </div>
          </div> 
        </>
    );}
};

export default AdvertiseCard;