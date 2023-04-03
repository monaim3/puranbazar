import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Loading from '../../../SharedPage/Loding/Loading';
import { AuthContex } from '../../../UserContext/UserContext';

const AllBuyer = () => {
    const {user, logOut}=useContext(AuthContex)
      
    const [Buyer,setBuyer]=useState([])
    // console.log(sellar);
    useEffect(()=>{
        fetch(`https://puranbazar-server-rashed409.vercel.app/users`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
        .then(res=>res.json())
        .then(data=>setBuyer(data))
       },[user?.email, logOut])
       const filterBuyer=Buyer.filter(sel=>sel.accountType==='buyer')

       const handleDelete=(id)=>{
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if(proceed){
            fetch(`https://puranbazar-server-rashed409.vercel.app/users/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if (data.deletedCount > 0){
                    toast.success('your Product Delete Succesfully', { autoClose: 300 })
                    
                    const remaining = filterBuyer.filter(revw => revw._id !== id);
                    setBuyer(remaining);
                }})
        }
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
                                     Email
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                      Delete
                                    </th>
                                  
                                    
                                    
                                </tr>
                             </thead>
                            <tbody>
                                {
                                    Buyer.length>0  ?
                                     <>
                                    {
                                        filterBuyer.map((pd,i)=><tr key={i} className="bg-white border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{i+1}</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                          {pd.name}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                       {pd.email}
                                        </td>
                                        
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <i onClick={()=>handleDelete(pd._id)} class="fa-solid fa-trash text-2xl "></i>
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

export default AllBuyer;