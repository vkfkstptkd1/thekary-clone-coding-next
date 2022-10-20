import {useRouter} from 'next/router'
import styles from '../router.module.css'
import boardstyles from './board.module.css'

export default function Csr(){
    
    const router = useRouter()
    const { name } = router.query

    return (
        <div>
            <div className={styles.sub_cate}>
                <ul>
                    <li>홈&nbsp;<span><i className={`${styles.fas} ${styles["fa-angle-right"]}`}></i></span></li>
                    <li>PR&nbsp;<span><i className={`${styles.fas} ${styles["fa-angle-right"]}`}></i></span></li>
                    <li className={styles.loca}>보도자료</li>
                </ul>
            </div>

            <div className={boardstyles.left_section}>
            <div className={boardstyles.left_title}>보도자료</div>
            </div>
            <div className={boardstyles.right_section}>
                <div id="bo_btn_top">
                    <ul className={boardstyles.btn_bo_user}>
                        <li>
                        </li>
                    </ul>
                </div>
                <div className={`${boardstyles.tbl_head01}${boardstyles.tbl_wrap}`}>
                    <table>
                    <caption>보도자료 목록</caption>
                        <thead style={{borderTop: '2px',solid: '#000'}}>
                            <tr>
                                <th scope="col" style={{width:'0px'}}>
                                </th>
                                <th scope="col">
                                    내용
                                </th>
                                <th scope="col" style={{width:'0px'}}>
                                </th>
                                <th scope="col" style={{width:'0px'}}>
                                </th>
                                <th scope="col">
                                    <a href="/board/bbs/board.php?bo_table&amp;sop=and&amp;sst=wr_datetime&amp;sod=desc&amp;sfl=&amp;stx=&amp;sca=&amp;page=1">등록일 </a>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className=" ">
                                <td className="" style={{width:'30px', padding:'0px'}}>
                                </td>
                                <td className={boardstyles.td_subject} style={{paddingLeft:'0px'}}>
                                    <div className={boardstyles.bo_tit}>
                                        <a href="http://thekary.co.kr/board/bbs/board.php?bo_table&amp;wr_id=75">
                                        [보도자료] 아이스비스킷, 라운지웨어 런칭 </a>
                                    </div>
                                </td>
                                <td className={`${boardstyles.td_name}${boardstyles.sv_use}`} style={{width:'0px', fontSize:'0px'}}>
                                    <span className={boardstyles.sv_member}>최고관리자</span>
                                </td>
                                <td className={boardstyles.td_num} style={{width:'0px',fontSize:'0px'}}>
                                    1
                                </td>
                                <td className={boardstyles.td_datetime} style={{width:'120px'}}>
                                    2022-10-20
                                </td>
                            </tr>
                            <tr className={boardstyles.even}>
                                <td className="" style={{width:'30px', padding:'0px'}}>
                                </td>
                                <td className={boardstyles.td_subject} style={{paddingLeft:'0px'}}>
                                    <div className={boardstyles.bo_tit}>
                                        <a href="http://thekary.co.kr/board/bbs/board.php?bo_table&amp;wr_id=76">
                                        [보도자료] 베베드피노 2022 FW 디즈니 런칭 </a>
                                    </div>
                                </td>
                                <td className={`${boardstyles.td_name}${boardstyles.sv_use}`} style={{width:'0px',fontSize:'0px'}}>
                                    <span className={boardstyles.sv_member}>최고관리자</span>
                                </td>
                                <td className={boardstyles.td_num} style={{width:'0px',fontSize:'0px'}}>
                                    1
                                </td>
                                <td className={boardstyles.td_datetime} style={{width:'120px'}}>
                                    2022-10-20
                                </td>
                                {/* 최고관리자 */}
                                <td className={`${boardstyles.td_name}${boardstyles.sv_use}`} style={{width:'0px',fontSize:'0px'}}>
                                    <span className={boardstyles.sv_member}>최고관리자</span>
                                </td>
                                <td className={boardstyles.td_num} style={{width:'0px',fontSize:'0px'}}>
                                    1
                                </td>
                                <td className={boardstyles.td_datetime} style={{width:'120px'}}>
                                    2022-10-20
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* 페이지 */}
                <nav className={boardstyles.pg_wrap}><span className={boardstyles.pg}><span className={boardstyles.sound_only}>열린</span><strong className={boardstyles.pg_current}>1</strong><span className={boardstyles.sound_only}>페이지</span>
                    <a href="http://thekary.co.kr/board/bbs/board.php?bo_table&amp;page=2" className={boardstyles.pg_page}>2<span className={boardstyles.sound_only}>페이지</span></a>
                    <a href="http://thekary.co.kr/board/bbs/board.php?bo_table&amp;page=3" className={boardstyles.pg_page}>3<span className={boardstyles.sound_only}>페이지</span></a>
                    <a href="http://thekary.co.kr/board/bbs/board.php?bo_table&amp;page=4" className={boardstyles.pg_page}>4<span className={boardstyles.sound_only}>페이지</span></a>
                    <a href="http://thekary.co.kr/board/bbs/board.php?bo_table&amp;page=4" className={`${boardstyles.pg_page} ${boardstyles.pg_end}`}>맨끝</a>
                </span></nav>
                <fieldset className={boardstyles.bo_schh}>
                    <form name="fsearch" method="get">
                        <input type="hidden" name="bo_table" value="press"/>
                        <input type="hidden" name="sca" value=""/>
                        <input type="hidden" name="sop" value="and"/>
                        <label for="sfl" className={boardstyles.sound_only}>검색대상</label>
                        <select name="sfl" id="sfl">
                            <option value="wr_subject">제목</option>
                            <option value="wr_content">내용</option>
                            <option value="wr_subject||wr_content">제목+내용</option>
                            <option value="wr_name,1">글쓴이</option>
                            <option value="wr_name,0">글쓴이(코)</option>
                        </select>
                        <label for="stx" className={boardstyles.sound_only}>검색어<strong className={boardstyles.sound_only}> 필수</strong></label>
                        <div className={boardstyles.sch_bar} style={{color:'#A7A9AC',fontweight: '500'}}>
                            검색 <input type="text" name="stx" value="" required="" id="stx" className={boardstyles.sch_input} size="25" maxlength="20" placeholder=""/>
                            <button type="submit" value="검색" className={boardstyles.sch_btn}><img src="/img/bb_search.png" alt="검색"/><span className={boardstyles.sound_only}>검색</span></button>
                        </div>
                    </form>
                </fieldset>
                {/* <!-- 게시판 검색 시작 { --> */}
                <div className={boardstyles.bo_sch_wrap} style={{display:'none'}}>
                    <fieldset className={boardstyles.bo_sch}>
                        <h3>검색</h3>
                        <form name="fsearch" method="get">
                            <input type="hidden" name="bo_table" value="press"/>
                            <input type="hidden" name="sca" value=""/>
                            <input type="hidden" name="sop" value="and"/>
                            <label for="sfl" className={boardstyles.sound_only}>검색대상</label>
                            <select name="sfl" id="sfl">
                                <option value="wr_subject">제목</option>
                                <option value="wr_content">내용</option>
                                <option value="wr_subject||wr_content">제목+내용</option>
                                <option value="wr_name,1">글쓴이</option>
                                <option value="wr_name,0">글쓴이(코)</option>
                            </select>
                            <label for="stx" className={boardstyles.sound_only}>검색어<strong className={boardstyles.sound_only}> 필수</strong></label>
                            <div className={boardstyles.sch_bar}>
                                <input type="text" name="stx" value="" required="" id="stx" className={boardstyles.sch_input} size="25" maxlength="20" placeholder="검색어를 입력해주세요"/>
                                <button type="submit" value="검색" className={boardstyles.sch_btn}><img src="/img/bb_search.png" alt="검색"/><span className={boardstyles.sound_only}>검색</span></button>
                            </div>
                            <button type="button" className={boardstyles.bo_sch_cls}><i className={`${boardstyles.fa}${boardstyles["fa-times"]}`} aria-hidden="true"></i><span className={boardstyles.sound_only}>닫기</span></button>
                        </form>
                    </fieldset>
                    <div className={boardstyles.bo_sch_bg}>
                    </div>
                </div>
                {/* <script>
                    // 게시판 검색
                    $(".btn_bo_sch").on("click", function() {
                        $(".bo_sch_wrap").toggle();
                    })
                    $('.bo_sch_bg, .bo_sch_cls').click(function(){
                        $('.bo_sch_wrap').hide();
                    });
                </script> */}
                {/* <!-- } 게시판 검색 끝 --> */}
            </div>
    </div>
  )
}
