import React from "react";
import {Link} from "react-router-dom";

// TODO : context api 사용해서 props 넘기는 것 묶기

const index = () => {
    return (
        <div className={'main__box'}>
            <div className={'main__logo_text'}>Club Since 2019.12.18.</div>
            <hr/>
            <ul>
                <h3>▶ Blossom Stats 메뉴 목록</h3>
                <h5>* 클릭 시 해당 페이지로 이동합니다.</h5>
                <li>
                    <Link to={'/member'}>
                        <img src={require('../images/game_icon/leaderboards.webp')} alt={'클럽원'}/>
                        클럽원
                    </Link>
                </li>
                <li>
                    <Link to={'/brawler'}>
                        <img src={require('../images/game_icon/brawler.webp')} alt={'브롤러'}/>
                        브롤러
                    </Link>
                </li>
                <li>
                    <Link to={'/record'}>
                        <img src={require('../images/game_icon/brawl_pass_free.webp')} alt={'일일기록'}/>
                        일일기록
                    </Link>
                </li>
                <li>
                    <Link to={'/season'}>
                        <img src={require('../images/game_icon/brawl_pass.webp')} alt={'시즌기록'}/>
                        시즌기록
                    </Link>
                </li>
                <li className={'gray'}>
                    준비 중
                </li>
                <li className={'gray'}>
                    준비 중
                </li>
                <li>
                    <a href={'https://open.kakao.com/o/g6X3nY9c'} target={'_blank'}>
                        <img src={require('../images/etc_icon/kakaotalk.webp')} alt={'카카오톡'}/>문의방
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default index;