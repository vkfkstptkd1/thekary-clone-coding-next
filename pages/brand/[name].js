import styles from '../router.module.css'


export default function Brand({props}){
    

    return (
        <div>
            <div className={styles.sub_cate}>
                <ul>
                    <li>홈&nbsp;<span><i className={`${styles.fas} ${styles["fa-angle-right"]}`}></i></span></li>
                    <li>COMPANY&nbsp;<span><i className={`${styles.fas} ${styles["fa-angle-right"]}`}></i></span></li>
                    <li className={styles.loca}>캐리마켓</li>
                </ul>
            </div>

            <div data-aos="fade-down" data-aos-duration="1000">
            <div className={styles["mis-wrap"]}>
                <div className={styles["mis_title"]}>
                    <p>KARY SANTA CLAUS | 캐리 산타와 함께 "매일 크리스마스!"</p>
                    <p></p>
                </div>
                <img src="/about_mis.png" alt="" />
                <div className={styles.mis_bottom}>
                <p>KARYMARKET 소개</p>
                <span>
                    캐리마켓(KARYMARKET)은 "모든 아이들은 아티스트입니다"라는 슬로건 아래 만들어진 우리 가족과 아이를 위한 FAMILY LIFE STYLE SHOP입니다.<br/>
                    우리 아이의 패션과 생활 그리고 유쾌한 감성을 위한 특별한 브랜드와 제품을 소개합니다.<br/>
                    아이의 감각을 깨워주는 아티스트의 제품, 가족의 건강을 생각하는 건강한 제품, 아이를 위한 아름다운 이야기로 가득차 있는 제품,<br/>
                    캐리마켓은 우리가족과 아이를 위한 가장 멋진 생각을 합니다.<br/>
                    백화점 기성 브랜드에 국한되어 있던 기존의 판매방식에서 벗어나 온·오프라인 매장을 함께 운영하며<br/>
                    새로운 플랫폼으로 2~30대 ‘새로운 엄마‘와 가족들을 만나고자 합니다. <br/>
                    캐리마켓만의 다양한 방법과 컨텐츠로 재미있고 흥미로운 컬러를 끊임없이 보여드리겠습니다. <br/>
                </span>
                </div>
                <div className={styles.web_btn}>
                <img src="/theKary_logo.png" alt=""/>
            <div className={styles.btn_wrap}>
                <p className={styles.web}>
                    <a href="https://karymarket.com/" target="_blank">
                        Website
                    </a>
                </p>
                <p className={`${styles.web} ${styles.next}`}>
                    <a href="https://www.instagram.com/karymarket_/?hl=ko" target="_blank">
                        Instagram
                    </a>
                </p>
                <p className={styles.download}>
                    <a href="/download/karymarket_ci.ai" download>
                        AI 다운로드 <img src="/down_arrow.png" alt=""/>
                    </a>
                </p>
                <p className={`${styles.download} ${styles.next}`}>
                    <a href="/download/karymarket_ci.jpg" download>
                        JPG 다운로드 <img src="/down_arrow.png" alt=""/>
                    </a>
                </p>
            </div>
        </div>
            </div>
        </div>
    </div>
  )
}

export async function getStaticPaths() {

   
    const apiUrl = `http://10.82.22.96:8080/brand?name=karymarket`;
    const res = await fetch(apiUrl);
    const data = await res.json();
    console.log(data);

    return {
      paths: [
        { params: { name: 'karymarket' } }, 
        { params: { name: 'bebedepino' } },
        { params: { name: 'icebiscuit' } },
        { params: { name: 'nununu' } }
    ],
      fallback: false, // can also be true or 'blocking'
    }
  }
  
  // `getStaticPaths` requires using `getStaticProps`
  export async function getStaticProps(context) {
    try {
        const res = await fetch(`http://10.82.22.96:8080/brand?name=karymarket`)
    
        const { data } = await res.json();
        return {
          props: { title: data },
        }
      }
      catch (e) {
        console.error({ e })
        return {
          props: { notes: [] }
        }
      }
    // console.log(context);
    // const apiUrl = `http://10.82.22.96:8080/brand?name=karymarket`;
    // const res = await fetch(apiUrl);
    // const data = await res.json();
    // console.log(params.name);

    return {
        props: {
            title: 'data.title'
            // title: data.title,
            // subheading: data.subheading,
            // content: data.content,
            // location: data.location,
            // logoLocation: data.logoLocation,
            // websiteLocation: data.websiteLocation,
            // instagramLocation: data.instagramLocation,
            // aiFileLocation: data.aiFileLocation,
            // jpgFileLocation: data.jpgFileLocation,
        },
      };
  }


