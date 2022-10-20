import styles from './footer.module.css';
export default function Footer() {

return (
    <footer className={styles.footer}>
            <div className={styles.footer_wrap}>
                <div className={styles.bottom_logo}>
                    <img src='/logo.png' alt=""/>
                </div>
                <div className={styles.foot_list}>
                    <div className={`${styles.cs} ${styles.float}`}>
                        <ul>
                            <li><p className={styles.tit}>SITEMAP</p></li>
                            <li><a href="/about_mis.html">회사소개</a></li>
                            <li><a href="/theKary.html">브랜드</a></li>
                            <li><a href="/social.html">사회공헌</a></li>
                            <li><a href="/board/bbs/board.php?bo_table={styles.}press">홍보채널</a></li>
                            <li><a href="/santa.html">인재채용</a></li>
                            <li><a href="/busiGuidee.html">비즈니스</a></li>
                        </ul>
                    </div> 
                    <div className={`${styles.commu} ${styles.float}`}>
                        <ul>
                            <p className={styles.tit}>BUSINESS</p>
                            <li>
                                <p><a href="/busiGuidee.html">제휴안내</a></p>
                            </li>
                            <li>
                                <p><a href="/recruit.html">채용정보</a></p>
                            </li>
                            <li>
                                <p><a href="/board/bbs/board.php?bo_table=press">보도자료</a></p>
                            </li>
                            <li>
                                <p><a href="/wayToCome.html">오시는길</a></p>
                            </li>
                        </ul>
                    </div>                        
                    <div className={`${styles.commu} ${styles.float}`}>
                        <ul>
                            <li><p className={styles.tit}>FAMILY SITE</p></li>
                            <li><a href="https://karymarket.com/" target="_blank">KARYMARKET</a></li>
                            <li><a href="https://www.bebedepino.com" target="_blank">BEBEDEPINO</a></li>
                            <li><a href="http://icebiscuit.com/" target="_blank">ICEBISCUIT</a></li>
                            <li><a href="http://nununu.co.kr/" target="_blank">nununu</a></li>
                        </ul>
                    </div>
                    <div className={`${styles.info} ${styles.float}`}>
                        <div>
                        <p className={styles.tit}>COMPANY</p>
                        <p> 상호명 : ㈜더캐리<br/>   
                            대표자 : 이은정, 윤중용<br/>
                            사업자등록번호 : 128-87-03548<br/>
                            통신판매신고번호 : 제 2021-서울용산-1694호<br/>
                            전화 : 02-6119-5119 (팩스 : 02-6119-5005)<br/>
                            주소 : 서울특별시 용산구 한남동 738-36 2F-5F<br/>
                            <span>SK엠시티타워 13001-1</span><br />
                            <span style={{["font-size"]:"11px",["line-height"]:'2.8em'}}>COPYRIGHT ©  THEKARY. ALL RIGHT RESERVED.</span>
                        </p>
                        </div>
                    </div>    
                </div>
            </div>
	</footer>
    );
}