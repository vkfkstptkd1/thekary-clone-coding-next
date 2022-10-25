import styles from "../styles/login.module.css"

export default function Admin(){
    
    return (
    <div className={styles.page_container}>
        <div className={`${styles.login_form_container} ${styles.shadow}`}>
            <div className={styles.login_form_side}>
                <div className={styles.top_logo_wrap}>
                   <img src="/logo.png"/> 
                </div>
                <div className={styles.login_input_container}>
                    <div className={`${styles.login_input_wrap} ${styles.input_id}`}>
                        <input placeholder="Admin" type="text"/>
                    </div>
                    <div className={`${styles.login_input_wrap} ${styles.input_password}`}>
                        <input placeholder="Password"  type="password"/>
                    </div>
                </div>
                <div className={styles.login_btn_wrap}>
                    <a className={styles.login_btn}>로그인</a>
                    <a href="#" >Forgot password?</a>
                </div>
            </div>
        </div>
    </div>
    );
}