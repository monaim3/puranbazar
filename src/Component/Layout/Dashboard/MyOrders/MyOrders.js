import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Loading from '../../../SharedPage/Loding/Loading';

const MyOrders = () => {
    const { data: orders, isLoading } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await fetch('https://puranbazar-server-rashed409.vercel.app/booking');
            const data = await res.json();
            return data;
        }
    })
    if(isLoading ){
        return <Loading></Loading>
    }
    console.log('orders',orders);
    return (
      
             <>
            {
                orders.length > 0 ?

                    <div className="teamcard grid lg:grid-cols-3 gap-5 p-12">
                        {
                            orders.map((singleItem) =>
                                <div className="card w-70 bg-base-100 shadow-xl ml-24 lg:ml-2 ">

                                    <figure className="px-10 lg:pt-10">
                                        <PhotoProvider>
                                            <PhotoView src={singleItem.img}>
                                                <img src={singleItem.img} alt="laptop" className="rounded-xl" />
                                            </PhotoView>
                                        </PhotoProvider>
                                    </figure>
                                    <div className="card-body items-start ">
                                        <h2 className="card-title">{singleItem.itemname}</h2>
                                        
                                        <p>Sell Price: <span className='font-semibold'> $ {singleItem.price}</span></p>
                                        
                                        <div className="card-actions">
                                            <label htmlFor={`buynow${singleItem._id}`} className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Pay Now</label>

                                        </div>
                                    </div>
                                </div>

                            )
                        }
                    </div>
                    : <Loading></Loading>
            }



        </>
    );
};

export default MyOrders;