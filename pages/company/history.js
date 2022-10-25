import React, {useEffect,useState} from "react";
import styles from '../../styles/router.module.css'
import AOS from "aos";
import "aos/dist/aos.css";

function historymap(){
    const history=[
        {year:"2022년",month:["02","01"],info:["[2년 연속] ICEBISCUIT, 산업통상자원부 주관 2022 한국소비자평가 최고의 브랜드 대상 수상","[2년 연속] BEBEDEPINO, 한국경제신문 2022 대한민국 퍼스트브랜드 대상 수상"]},
        {year:"2021년",month:["12","02"],info:["한국패션산업현회 2021 대한민국패션대상 산업부장관 표창 수상","ICEBISCUIT, 산업통상자원부 주관 2022 한국소비자평가 최고의 브랜드 대상 수상"]},
        {year:"2020년",month:["12","01"],info:["BEBEDEPINO, 한국경제신문 2021 대한민국 퍼스트브랜드 대상 수상","이은정 대표, 패션비즈 2020 뉴리더 20인 선정"]},
        {year:"2019년",month:["12","12","08","01"],info:["BEBEDEPINO, 어패럴 뉴스 2020 유망 브랜드 아동복 부문 선정","KARYMARKET, 패션비즈 어워드 2019 핫 브랜드 수상","2019 경기도 일자리 우수기업 선정","수입 브랜드 nununu 전개"]},
        {year:"2018년",month:["11","08"],info:["2018 경기도 여성고용우수기업 선정","더캐리 디자인 연구소, 기업부설연구소 인증"]},
        {year:"2017년",month:["12","10","06","05"],info:["코리아패션대상 국무총리상 표창","고양시 우수중소기업 선정","윤중용 대표 2017 삼우당 대한민국 섬유패션대상 수상","2017 여성기업확인서 등록"]},
        {year:"2016년",month:["11","10","09","08","05","04"],info:["KARYMARKET 런칭","BEBEDEPINO, 한경BUSINESS 2016 브랜드대상 2년 연속 수상","BEBEDEPINO, 국민일보 2016 고객 선호 브랜드지수 1위 수상","ICEBISCUIT 런칭","더캐리 광저우 복장 무역 유한공사 중국 법인 설립","경영혁신형 중소기업 인증"]},
        {year:"2015년",month:["10","09"],info:["BEBEDEPINO, 한경BUSINESS 2015 브랜드대상 수상","연구개발전달부서 인증"]},
        {year:"2014년",month:["01"],info:["더캐리 한국 법인 설립"]},
        {year:"2012년",month:["02"],info:["BEBEDEPINO 런칭"]},
    ]
    return (
        history.map((historyy,index)=>
            <>
            <div className={styles.his_wrap}>
                <p>{historyy.year}</p>
                <ul>
                {
                    historyy.month.map((historyyy,index)=>
                        <li>
                        <p>{historyy.month[index]}&emsp;</p>
                        <span>{historyy.info[index]}</span>
                        </li>
                    )}
                </ul>
            </div>
            <div className={styles.border}></div>
            </>
        ))
}
export default function History() {
    useEffect(()=>{
        AOS.init();
    })

    return (
    
    <div>
        <div className={styles.sub_cate}>
            <ul>
                <li>홈&nbsp;<span><i className={`${styles.fas} ${styles["fa-angle-right"]}`}></i></span></li>
                <li>COMPANY&nbsp;<span><i className={`${styles.fas} ${styles["fa-angle-right"]}`}></i></span></li>
                <li className={styles.loca}>연혁</li>
            </ul>
        </div>
            <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="600">
            <div className={styles["mis-wrap"]}>    
                <div className={styles["mis_title"]}>
                    <p>WALK TOGETHER｜ 행복한 세상으로 걸어가요</p>
                </div>
                <div>
                    <img src="/about_history.png"/>
                </div>
            </div>

            <div className={styles.history}>
                {historymap()}
            </div>
        </div>
     </div>

    );
}


