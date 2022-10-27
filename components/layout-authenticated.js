import { useRouter } from "next/router";
import { useState, useEffect } from 'react';


export default function LaayoutAuthenticated({children}) {
    const [profile,setProfile] = useState()
    const router = useRouter()

    useEffect(()=>{
        fetchProfile();
    },[])

    async function fetchProfile(){
        const res = await fetch(`10.82.15.88:8080/api/login`,{
            headers:{
                "Content-type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
        if (res.ok) {
            const json = await res.json()
            setProfile(json)
        } else {
            router.push("/admin/login")
        }
    }

    function logout(){
        localStorage.removeItem("token")
        router.push("/")
    }

    return(
        <div>
            <div>
                <p>signed in as: {profile && profile.username}</p>
                <p>관리자용 페이지 입니다.</p>
                <p><button onClick={logout}>Logout</button></p>
            </div>
            {children}
        </div>
    )
}