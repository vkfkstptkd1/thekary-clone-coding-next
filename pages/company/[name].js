import {useRouter} from 'next/router'
import styles from '../router.module.css'
export default function Company(){
    
    const router = useRouter()
    const { name } = router.query

    return (
        <div>
            <div className={styles.sub_cate}>
                <ul>
                    <li>홈&nbsp;<span><i className={`${styles.fas} ${styles["fa-angle-right"]}`}></i></span></li>
                    <li>COMPANY&nbsp;<span><i className={`${styles.fas} ${styles["fa-angle-right"]}`}></i></span></li>
                    <li className={styles.loca}>미션</li>
                </ul>
            </div>

            <div data-aos="fade-down" data-aos-duration="1000">
            <div className={styles["mis-wrap"]}>
                <div className={styles["mis_title"]}>
                    <p>KARY SANTA CLAUS | 캐리 산타와 함께 "매일 크리스마스!"</p>
                </div>
                <img src="/about_mis.png" alt="" />
                <div className={styles.mis_bottom}>
                    <p>미션</p>
                    <span>
                        캐럴은 마법같은 힘이 있죠. 우리가 언제, 어디에 있더라도 그 순간을 크리스마스로 만들어 버리는 마법.<br/>
                        그러나 찰나처럼 지나가 버리는 크리스마스, 매일이 크리스마스라면 얼마나 좋을까요?<br/>
                        <br/>
                        더캐리는 가족과 함께하는 따뜻하고 행복한 크리스마스의 기쁨을 매일매일 선사하고 싶어요.<br/>
                        1년을 손꼽아 기다리는 산타클로스처럼 더캐리만의 특별한 선물을 준비할게요.<br/>
                        캐리 산타와 함께 만들어 갈 '매일 크리스마스' 즐기러 가보실까요?<br/>
                    </span>
                    <br /><br />
                </div>
            </div>
        </div>
  </div>
  )
}


// export async function getStaticPaths() {
    
//     const paths = [
//         { params: 
//             { name: 'mission'
//             } 
//         } // See the "paths" section below
//       ]
//     return {
//       paths,fallback: false
//     };
//   }

// export async function getStaticProps({params}) {
//     // Call an external API endpoint to get posts.
//     // You can use any data fetching library
//     const res = await fetch(`http://10.82.22.96:8080/company?category=미션`);
//     const detail = await res.json();
//     console.log(detail)

//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//       props: {
//         detail
//       },
//     }
//   }
