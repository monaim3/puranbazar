import  { useEffect, useState } from 'react';


const UseSellar = (email) => {
   
    const [isSellar,setSellar]=useState(false)
    const [isSellarLoading,setisSellarLoading]=useState(true)
   
    useEffect(()=>{
       if(email){
        fetch(`https://puranbazar-server-rashed409.vercel.app/users/sellar/${email}`)
        .then(res=>res.json())
        .then((data)=>{
            setSellar(data.isSellar)
           
            setisSellarLoading(false)
        })
       }
    },[email])
  
   return[isSellar,isSellarLoading]
};

export default UseSellar;