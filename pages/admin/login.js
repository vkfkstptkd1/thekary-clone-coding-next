import styles from "../../styles/login.module.css"
import { useRouter } from "next/router";
import { useState } from "react";


export default function Admin(){
    const router = useRouter()
    const [state,setState] = useState({
        username: "",
        password: ""
    })

    function handleChange(e) {
        const copy = {...state}
        copy[e.target.name] = e.target.value
        setState(copy)
        console.log(state)
    }

    async function handleSubmit(){    
        
        const res = await fetch('http://10.82.15.88:8080/api/login',{
            method: "POST",
            body: new URLSearchParams({
                'username': state.username,
                'password': state.password,
              }),
            headers:{
                "Content-type": "application/x-www-form-urlencoded"
            }
        })
        if (res.ok){
            console.log("성공")
            localStorage.setItem("token",json.token)
            router.push("/admin/users")
        } else {
            alert(body)
            alert("Bad credentials")
        }
    }

    return (
    <div className={styles.page_container}>
        <div className={`${styles.login_form_container} ${styles.shadow}`}>
            <div className={styles.login_form_side}>
                <div className={styles.top_logo_wrap}>
                   <img src="/logo.png"/> 
                </div>
                <form id="form">
                    <div className={styles.login_input_container}>
                        <div className={`${styles.login_input_wrap} ${styles.input_id}`}>
                            <input 
                                placeholder="Admin" 
                                type="text" 
                                name="username"
                                value={state.username} 
                                onChange={handleChange}
                                />
                        </div>
                        <div className={`${styles.login_input_wrap} ${styles.input_password}`}>
                            <input 
                                placeholder="Password"  
                                type="password"
                                name="password"
                                value={state.password} 
                                onChange={handleChange}
                                />
                        </div>
                    </div>
                    <div className={styles.login_btn_wrap}>
                        <button onClick={handleSubmit} className={styles.login_btn}>로그인</button>
                        <a href="#" >Forgot password?</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
}