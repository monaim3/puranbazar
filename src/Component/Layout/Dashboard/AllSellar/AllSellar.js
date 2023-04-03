import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Loading from '../../../SharedPage/Loding/Loading';
import { AuthContex } from '../../../UserContext/UserContext';

const AllSellar = () => {
    const {user, logOut}=useContext(AuthContex)
      
    const [sellar,setsellar]=useState([])
    // console.log(sellar);
    useEffect(()=>{
        fetch(`https://puranbazar-server-rashed409.vercel.app/users`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
        .then(res=>res.json())
        .then(data=>setsellar(data))
       },[user?.email, logOut])
       const filtersellar=sellar.filter(sel=>sel.accountType==='sellar')

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
                    
                    const remaining = filtersellar.filter(revw => revw._id !== id);
                    setsellar(remaining);
                }})
        }
       }
       const handleVarify=(id)=>{
        fetch(`https://puranbazar-server-rashed409.vercel.app/users/${id}`, {
            method: 'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({varified:true}),
        })
        .then(res => res.json())
        .then(data=>{
            if(data.acknowledged){
                toast.success("succesfully varified user")
            }
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
                                     Email
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                      Delete
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                     Verify
                                    </th>
                                    
                                    
                                </tr>
                             </thead>
                            <tbody>
                                {
                                    sellar.length>0  ?
                                     <>
                                    {
                                        filtersellar.map((pd,i)=><tr key={i} className="bg-white border-b">
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
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                         <button  onClick={()=>handleVarify(pd._id)} className='btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Verify</button>
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

export default AllSellar;