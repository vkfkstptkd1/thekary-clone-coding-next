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
                                <li><span><Link href="/company/mission"><a>?????? ??????</a></Link></span></li>
                                <li><Link href="/company/mission"><a>??????</a></Link></li>
                                <li><Link href="/company/vision"><a>??????</a></Link></li>
                                <li><Link href="/company/value"><a>????????????</a></Link></li>
                                <li><Link href="/company/history"><a>??????</a></Link></li>
                                <li><Link href="/company/ci"><a>CI</a></Link></li>
                            </ul>
                            <ul>
                                <li><span><Link href="/brand/karymarket"><a>?????????</a></Link></span></li>
                                <li><Link href="/brand/karymarket"><a>KARYMARKET</a></Link></li>
                                <li><Link href="/brand/bebedepino"><a>BEBEDEPINO</a></Link></li>
                                <li><Link href="/brand/icebiscuit"><a>ICEBISCUIT</a></Link></li>
                                <li><Link href="/brand/nununu"><a>nununu</a></Link></li>
                            </ul>
                            <ul>
                                <li><span><Link href="/csr/social"><a>????????????</a></Link></span></li>
                                <li><Link href="/csr/social"><a>????????? ??????</a></Link></li>
                                <li><Link href="/csr/donation"><a>???????????????????????????</a></Link></li>
                                <li><Link href="/csr/greenchild"><a>???????????????????????????</a></Link></li>
                                <li><Link href="/csr/gfoundation"><a>??????????????????</a></Link></li>
                            </ul>
                            <ul>
                                <li><span><Link href="/pr/press"><a>????????????</a></Link></span></li>
                                <li><Link href="/pr/press"><a>????????????</a></Link></li>
                                <li><Link href="/pr/video"><a>????????? ??????</a></Link></li>
                                <li><Link href="/pr/media"><a>?????????</a></Link></li>
                            </ul>
                            <ul>
                                <li><span><Link href="/career/santa"><a>????????????</a></Link></span></li>
                                <li><Link href="/career/santa"><a>????????????</a></Link></li>
                                <li><Link href="/career/recruit"><a>????????????</a></Link></li>
                            </ul>
                            <ul>
                                <li><span><Link href="/business/allience"><a>????????????</a></Link></span></li>
                                <li><Link href="/business/allience"><a>?????? ??????</a></Link></li>
                                <li><Link href="/business/wayToCome"><a>????????? ???</a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
  }