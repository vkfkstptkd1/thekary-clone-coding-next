import {useRouter} from 'next/router'
import styles from '../../styles/router.module.css'
export default function Csr(props){
    
    let content=props.content.split('\n').map(line=>{
        return (<>{line}<br/></>)
    })

    let name=props.title.split('|',1)

    return (
        <div>
            <div className={styles.sub_cate}>
                <ul>
                    <li>홈&nbsp;<span><i className={`${styles.fas} ${styles["fa-angle-right"]}`}></i></span></li>
                    <li>CSR&nbsp;<span><i className={`${styles.fas} ${styles["fa-angle-right"]}`}></i></span></li>
                    <li className={styles.loca}>{name}</li>
                </ul>
            </div>

            <div data-aos="fade-down" data-aos-duration="1000">
            <div className={styles["mis-wrap"]}>
                <div className={styles["mis_title"]}>
                    <p>{props.title}</p>
                </div>
                <div className={`${styles.social_bn} ${styles.child}`}>
                        <span className={`${styles.social}${styles.fis}`}><img src={props.location} alt=""/></span>
                </div>
                <div className={styles.border}></div>

                <div className={styles.mis_bottom}>
                <p>{props.subheading}</p>
                <span>
                    {content}
                </span>
                </div>
                <div className={styles.mis_bottom} id="ele">
                    <p>누적 후원 금액</p>
                    <span className={styles.ctn}>
                        <span className={styles.won}>￦</span>
                        <div className={styles.memberCountCon}>{props.sponsorshipAmout}</div> 
                        <span className={styles.memberCountCon}>원</span>
                    </span>
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
            params: { name: 'social' } 
        }, 
        { 
            params: { name: 'donation' } 
        },
        { 
            params: { name: 'greenchild' } 
        }, 
        { 
            params: { name: 'gfoundation' } 
        }
    ],
      fallback: true, // can also be true or 'blocking'
    }
  }
  
  // `getStaticPaths` requires using `getStaticProps`
  export async function getStaticProps(context) {

    try {
      
        const res = await fetch(`http://10.82.22.96:8080/csr?name=${context.params.name}`)   
        const data = await res.json()
        const realdata = data.data
        return {
            props:
                {
                    title: realdata.title,
                    subheading: realdata.subHeading,
                    content: realdata.content,
                    location: realdata.location,
                    sponsorshipAmout: realdata.sponsorshipAmount
                }
                
            }
    } catch (e) {
        console.log(context.params.name)
        console.error("error 입니다."+e)
        return {

        }
    }
}

