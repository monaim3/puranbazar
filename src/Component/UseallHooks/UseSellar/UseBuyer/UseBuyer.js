import { useEffect, useState } from 'react';

const UseBuyer = (email) => {
   
    const [isBuyer,setBuyer]=useState(false)
    const [isBuyerLoading,setisBuyerLoading]=useState(true)
  
    useEffect(()=>{
       if(email){
        fetch(`https://puranbazar-server-rashed409.vercel.app/users/buyer/${email}`)
        .then(res=>res.json())
        .then((data)=>{
            setBuyer(data.isBuyer)
           
            setisBuyerLoading(false)
        })
       }
    },[email])
  
   return[isBuyer,setisBuyerLoading]
};

export default UseBuyer;