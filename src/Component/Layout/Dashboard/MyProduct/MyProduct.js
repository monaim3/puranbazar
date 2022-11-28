import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { AuthContex } from '../../../UserContext/UserContext';
import Loading from './../../../SharedPage/Loding/Loading';

const MyProduct = () => {
   const [Myproduct,setMyproduct]=useState([])
   console.log(Myproduct);
   const [bookitem,setbookitem]=useState([])
   const {user,logOut}=useContext(AuthContex)
//    useEffect(()=>{
//     fetch(`https://puranbazar-server-rashed409.vercel.app/booking?email=${user?.email}`,{
//         headers: {
//             authorization: `Bearer ${localStorage.getItem('genius-token')}`
//         }
//     })
//     .then(res=>res.json())
//     .then(data=>setbookitem(data))
//    },[user?.email, logOut])

   useEffect(()=>{
    fetch(`https://puranbazar-server-rashed409.vercel.app/puranb?email=${user?.email}`,{
        headers: {
            authorization: `Bearer ${localStorage.getItem('genius-token')}`
        }
    })
    .then(res=>res.json())
    .then(data=>setMyproduct(data))
   },[user?.email, logOut])

   const handleDelete=(id)=>{
    const proceed = window.confirm('Are you sure, you want to cancel this order');
    if(proceed){
        fetch(`https://puranbazar-server-rashed409.vercel.app/puranb/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.deletedCount > 0){
                fetch(`https://puranbazar-server-rashed409.vercel.app/advertise?id=${id}`, {
                    method: 'DELETE',
                    headers:{
                        'content-type': 'application/json', 
                    }
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.acknowledged){
                        toast.success('your Product Delete Succesfully', { autoClose: 300 })
                    }
                })
                const remaining = Myproduct.filter(revw => revw._id !== id);
                setMyproduct(remaining);
            }
        })
    }
   }
   const handleAdvertise=(pd)=>{
    fetch('https://puranbazar-server-rashed409.vercel.app/advertise',{
              method: 'POST',
              headers: {
                  'content-type': 'application/json', 
              },
              body: JSON.stringify({
                name:pd.name,
                category:pd.category,
                condition:pd.condition,
                img:pd.img,
                location:pd.location,
                sold:pd.sold,
                yearofUsed:pd.yearofUsed,
                resaleprice:pd.resaleprice,
                originalPrice:pd.originalPrice,
                productId:pd._id,
                email:pd.email
              })
          })
          .then(res => res.json())
          .then(result =>{
              console.log(result);
              toast.success(`advertisement is  successfully`);
            
          })
   }
    return (
       
        <div>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-center">
                                <thead className="border-b bg-gray-800">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            #
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            Name
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            Price
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                          available or sold
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                          Delete
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                        Advertised
                                        </th>
                                        
                                    </tr>
                                 </thead>
                                <tbody>
                                    {
                                        Myproduct.length>0 ?
                                         <>
                                        {
                                            Myproduct.map((pd,i)=><tr key={i} className="bg-white border-b">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{i+1}</td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {pd.name}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            $ {pd.resaleprice}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                              { pd.sold ? "sold" :" available"}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <i onClick={()=>handleDelete(pd._id)} class="fa-solid fa-trash text-2xl "></i>
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                             <button onClick={()=>handleAdvertise(pd)} className='btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Advertise</button>
                                            </td>
                                         </tr>)
                                         
                                        }</>:<Loading></Loading>
                                        
                                         
                                    }
                                   
                                   
                                   
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    );
};

export default MyProduct;