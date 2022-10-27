import {useRouter} from "next/router";
import { useEffect,useState } from "react";
import LayoutAuthenticated from "../../components/layout-authenticated";

export default function User() {
    const [content, setContent] = useState(null)
    const router = useRouter()
    useEffect(()=>{
        fetchContent()
    },[])

    async function fetchContent(){
        const res = await fetch('http://10.82.15.88:8080/api/login',{
            "Content-type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        })
        if (res.ok) {
            const text = await res.text()
            setContent(text)
        }
    }

    return(
        <LayoutAuthenticated>
            <div>
                <h1>Admin</h1>
                { content && (
                    <p>{content}</p>
                )}
            </div>
        </LayoutAuthenticated>
    );
}