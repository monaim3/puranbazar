import { useEffect, useState } from "react";


const UseAdmin = (email) => {
   
    const [isAdmin,setAdmin]=useState(false)
    const [isAdminLoading,setisAdminLoading]=useState(true)
    
    useEffect(()=>{
       if(email){
        fetch(`https://puranbazar-server-rashed409.vercel.app/users/admin/${email}`)
        .then(res=>res.json())
        .then((data)=>{
            setAdmin(data.isAdmin)
           
            setisAdminLoading(false)
        })
       }
    },[email])
  
   return[isAdmin,isAdminLoading]
};

export default UseAdmin;