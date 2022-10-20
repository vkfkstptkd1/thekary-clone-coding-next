import {useRouter} from 'next/router'
import styles from '../router.module.css'
export default function Csr(){
    
    const router = useRouter()
    const { name } = router.query

    return (
        <div>
            <div className={styles.sub_cate}>
                <ul>
                    <li>홈&nbsp;<span><i className={`${styles.fas} ${styles["fa-angle-right"]}`}></i></span></li>
                    <li>CSR&nbsp;<span><i className={`${styles.fas} ${styles["fa-angle-right"]}`}></i></span></li>
                    <li className={styles.loca}>사랑의 열매</li>
                </ul>
            </div>

            <div data-aos="fade-down" data-aos-duration="1000">
            <div className={styles["mis-wrap"]}>
                <div className={styles["mis_title"]}>
                    <p>사랑의 열매 | 나눔으로 행복한 세상</p>
                </div>
                <div className={styles.social_bn}>
                    <div className={styles.img_col}>
                        <span className={`${styles.social}${styles.fis}`}><img src="img/social01.png" alt=""/></span>
                        <span className={`${styles.social}${styles.two}`}><img src="img/social02.png" alt=""/></span>
                        <span className={`${styles.social}${styles.three}`}><img src="img/social03.png" alt=""/></span>    
                    </div>   
                </div>
                
                <div className={styles.mis_bottom}>
                <p>사랑의 열매 X 더캐리</p>
                <span>
                    사랑의 열매를 상징하는 세 개의 빨간 열매는 나, 가족, 이웃을 상징하며 열매의 빨간색은 따뜻한 사랑의 마음을, 하나로 모아진 줄기는 더불어 함께 사는 사회를 만들자는 뜻을 가지고 있습니다.<br/>
                    나로 시작하여 사랑하는 이와 꾸린 가족의 행복을 바라는 더캐리와 사랑의 열매는 닮은 곳이 많습니다. <br/>
                    함께 나누는 희망과 행복의 기쁨을 전하기 위해 더캐리는 2017년 1월부터 현재까지 매년 사랑의 열매에 지속적인 후원을 전개하고 있습니다. <br/>
                    사랑의 열매 하면 이웃사랑의 정신이 바로 떠오르듯, 언젠가 더캐리라고 하면 바로 행복한 가족을 떠올릴 수 있는 날이 오길 바라며, 더캐리는 계속해서 나아갈 것입니다. <br/>
                </span>
                </div>
                <div className={styles.mis_bottom} id="ele">
                    <p>누적 후원 금액</p>
                    <span className={styles.ctn}>
                        <span className={styles.won}>￦</span>
                        <div className={styles.memberCountCon}>1,041,225,460</div> 
                        <span className={styles.memberCountCon}>원</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

