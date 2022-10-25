import styles from '../../styles/router.module.css'


export default function Brand(props){

    let content=props.content.split('\n').map(line=>{
        return (<>{line}<br/></>)
    })

    let name=props.title.split('｜',1)
    console.log(name)


    return (
        <div>
        
            <div className={styles.sub_cate}>
                <ul>
                    <li>홈 &nbsp;<span><i className={`${styles.fas} ${styles["fa-angle-right"]}`}></i></span></li>
                    <li>COMPANY &nbsp;<span><i className={`${styles.fas} ${styles["fa-angle-right"]}`}></i></span></li>
                    <li className={styles.loca}>{name}</li>
                </ul>
            </div>

            <div data-aos="fade-down" data-aos-duration="1000">
            <div className={styles["mis-wrap"]}>
                <div className={styles["mis_title"]}>
                    <p>{props.title}</p>
                    <p></p>
                </div>
                <img src={props.location} alt="" />
                <div className={styles.mis_bottom}>
                <p>{props.subheading}</p>
                <span>
                    {content}                    
                </span>
                </div>
                <div className={styles.web_btn}>
                <img src={props.logoLocation} alt=""/>
            <div className={styles.btn_wrap}>
                <p className={styles.web}>
                    <a href={props.websiteLocation} target="_blank" rel="noopener noreferrer">
                        Website
                    </a>
                </p>
                <p className={`${styles.web} ${styles.next}`}>
                    <a href={props.instagramLocation} target="_blank" rel="noopener noreferrer">
                        Instagram
                    </a>
                </p>
                <p className={styles.download}>
                    <a href={props.aiFileLocation} download rel="noopener noreferrer">
                        AI 다운로드 <img src="/down_arrow.png" alt=""/>
                    </a>
                </p>
                <p className={`${styles.download} ${styles.next}`}>
                    <a href={props.jpgFileLocation} download rel="noopener noreferrer">
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

    return {
      paths: [
        { 
            params: { name: 'karymarket' } 
        }, 
        { 
            params: { name: 'bebedepino' } 
        },
        {   params: { name: 'icebiscuit' } },

        { params: { name: 'nununu' } }
    ],
      fallback: true, // can also be true or 'blocking'
    }
  }
  
  // `getStaticPaths` requires using `getStaticProps`
  export async function getStaticProps(context) {

    try {
      
        const res = await fetch(`http://10.82.22.96:8080/brand?name=${context.params.name}`)   
        const data = await res.json()
        const realdata = data.data

        return {
            props:
            { 
                title: realdata.title,
                subheading: realdata.subheading,
                content: realdata.content,
                location: realdata.location,
                logoLocation: realdata.logoLocation,
                websiteLocation: realdata.websiteLocation,
                instagramLocation: realdata.instagramLocation,
                aiFileLocation: realdata.aiFileLocation,
                jpgFileLocation: realdata.jpgFileLocation, 
            }
            
        }
      }
      catch (e) {
        console.log(params.name)
        console.error("error 입니다.",{ e })
        return {
      }
    }
}
    // console.log(context);
    // const apiUrl = `http://10.82.22.96:8080/brand?name=karymarket`;
    // const res = await fetch(apiUrl);
    // const data = await res.json();
    // console.log(params.name);

    // return {
    //     props: {
    //         title: realdata.title,
    //         subheading: realdata.subheading,
    //         content: realdata.content,
    //         location: realdata.location,
    //         logoLocation: realdata.logoLocation,
    //         websiteLocation: realdata.websiteLocation,
    //         instagramLocation: realdata.instagramLocation,
    //         aiFileLocation: realdata.aiFileLocation,
    //         jpgFileLocation: realdata.jpgFileLocation,
    //     },
    //   };
  


