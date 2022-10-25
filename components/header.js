import styles from '../styles/header.module.css';
import Link from "next/link";
import {useRouter} from 'next/router';


export default function Header() {
    
const router = useRouter()

    return (
    <header>
        <div className={styles.header}>
            <div className={styles["header-inner"]}>
                <h1 className={styles.logo}>
                    <Link href="/">
                        <a>
                            <img src="/logo.png" alt=""/>
                        </a>
                    </Link>
                </h1>
                <h1 className={styles.logo_ch}>
                    <Link href="/">
                    <a>
                        <img src="/logo_white.png" alt=""/>
                    </a>
                    </Link>
                </h1>
            
                <div className={styles.gnb}>
                    <ul className={router.pathname === '/' ? styles.tabs : styles.tabss }>
                        <li className={styles.company}><Link href="/company/mission"><a>COMPANY</a></Link></li>
                        <li className={styles.brand}><Link href="/brand/karymarket"><a>BRAND</a></Link><span className={styles.line}></span></li>
                        <li className={styles.csr}><Link href="/csr/social"><a>CSR</a></Link><span className={styles.line}></span></li>
                        <li className={styles.pr}><Link href="/pr/press"><a>PR</a></Link><span className={styles.line}></span></li>
                        <li className={styles.career}><Link href="/career/santa"><a>CAREER</a></Link><span className={styles.line}></span></li>
                        <li className={styles.business}><Link href="/business/allience"><a>BUSINESS</a></Link><span className={styles.line}></span></li>
                    
                    </ul>
    
                    <div className={styles["gnb-inner"]}>            
                        <div className={styles.inner}>
                            <ul>
                                <li><span><Link href="/company/mission"><a>회사 소개</a></Link></span></li>
                                <li><Link href="/company/mission"><a>미션</a></Link></li>
                                <li><Link href="/company/vision"><a>비전</a></Link></li>
                                <li><Link href="/company/value"><a>핵심가치</a></Link></li>
                                <li><Link href="/company/history"><a>연혁</a></Link></li>
                                <li><Link href="/company/ci"><a>CI</a></Link></li>
                            </ul>
                            <ul>
                                <li><span><Link href="/brand/karymarket"><a>브랜드</a></Link></span></li>
                                <li><Link href="/brand/karymarket"><a>KARYMARKET</a></Link></li>
                                <li><Link href="/brand/bebedepino"><a>BEBEDEPINO</a></Link></li>
                                <li><Link href="/brand/icebiscuit"><a>ICEBISCUIT</a></Link></li>
                                <li><Link href="/brand/nununu"><a>nununu</a></Link></li>
                            </ul>
                            <ul>
                                <li><span><Link href="/csr/social"><a>사회공헌</a></Link></span></li>
                                <li><Link href="/csr/social"><a>사랑의 열매</a></Link></li>
                                <li><Link href="/csr/donation"><a>경기청소년희망센터</a></Link></li>
                                <li><Link href="/csr/greenchild"><a>초록우산어린이재단</a></Link></li>
                                <li><Link href="/csr/gfoundation"><a>지파운데이션</a></Link></li>
                            </ul>
                            <ul>
                                <li><span><Link href="/pr/press"><a>홍보채널</a></Link></span></li>
                                <li><Link href="/pr/press"><a>보도자료</a></Link></li>
                                <li><Link href="/pr/video"><a>브랜드 영상</a></Link></li>
                                <li><Link href="/pr/media"><a>미디어</a></Link></li>
                            </ul>
                            <ul>
                                <li><span><Link href="/career/santa"><a>인재채용</a></Link></span></li>
                                <li><Link href="/career/santa"><a>캐리산타</a></Link></li>
                                <li><Link href="/career/recruit"><a>채용정보</a></Link></li>
                            </ul>
                            <ul>
                                <li><span><Link href="/business/allience"><a>비즈니스</a></Link></span></li>
                                <li><Link href="/business/allience"><a>제휴 안내</a></Link></li>
                                <li><Link href="/business/wayToCome"><a>오시는 길</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
  }