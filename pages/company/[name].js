import {useRouter} from 'next/router'
import styles from '../../styles/router.module.css'
export default function Company(props){
    console.log(props)

    let content=props.content.split('\n').map(line=>{
        return (<>{line}<br/></>)
    })


    return (
        <div>
            <div className={styles.sub_cate}>
                <ul>
                    <li>홈&nbsp;<span><i className={`${styles.fas} ${styles["fa-angle-right"]}`}></i></span></li>
                    <li>COMPANY&nbsp;<span><i className={`${styles.fas} ${styles["fa-angle-right"]}`}></i></span></li>
                    <li className={styles.loca}>{props.subheading}</li>
                </ul>
            </div>

            <div data-aos="fade-down" data-aos-duration="1000">
            <div className={styles["mis-wrap"]}>
                <div className={styles["mis_title"]}>
                    <p>{props.title}</p>
                </div>
                <img src={props.location} alt="" />
                <div className={styles.mis_bottom}>
                    <p>{props.subheading}</p>
                    <span>{content}</span>
                    <br /><br />
                </div>
            </div>
        </div>
  </div>
  )
}


export async function getStaticPaths() {

    return {
      paths: [
        { 
            params: { name: 'mission' } 
        }, 
        { 
            params: { name: 'vision' } 
        },
    ],
      fallback: true, // can also be true or 'blocking'
    }
  }
  
  // `getStaticPaths` requires using `getStaticProps`
  export async function getStaticProps(context) {

    try {
      
        const res = await fetch(`http://10.82.22.96:8080/company?category=${context.params.name}`)   
        const data = await res.json()
        const realdata = data.data
        return {
            props:
                { 
                    title: realdata.title,
                    subheading: realdata.subheading,
                    content: realdata.content,
                    location: realdata.location,
                }
                
            }
    } catch (e) {
        console.log(context.params.name)
        console.error("error 입니다.",{ e })
        return
    }
}
    