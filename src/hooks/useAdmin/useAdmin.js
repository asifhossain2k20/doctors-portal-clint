import { useEffect, useState } from "react";

const useAdmin=email=>{
    const[isAdmin,setIsAdmin]=useState(false)
    const[isAdminLoading,setIsAdminLoading]=useState(true);
    useEffect(()=>{
        if(email){
            fetch(`https://doctors-portal-server-pink-one.vercel.app/users/admin/${email}`,{
                headers:{
                    authorization:`bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                setIsAdmin(data.isAdmin)
                setIsAdminLoading(false)
            })
        }
    },[email])
    return [isAdmin,isAdminLoading]
}

export default useAdmin;