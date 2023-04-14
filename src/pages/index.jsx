import React from "react";
import {Link} from "react-router-dom";

// TODO : context api 사용해서 props 넘기는 것 묶기

const index = () => {
    return (
        <div className={'container_block'}>
            <img className={"blossom_stats__image"}
                 src={require('../images/blossom_logo/blossom_stats.webp')}
                 alt={'Blossom Stats'}/>
            <hr/>
            <h3>▶ Blossom Stats 메뉴 목록</h3>
            <ul className={"menu__list"}>
                <li>
                    <Link to={'/member'}>
                        <img src={require('../images/game_icon/friendly.webp')} alt={'클럽원'}/>
                        멤버
                    </Link>
                </li>
                <li>
                    <Link to={'/brawler'}>
                        <img src={require('../images/game_icon/brawler.webp')} alt={'브롤러'}/>
                        브롤러
                    </Link>
                </li>
                <li>
                    <Link to={'/battle'}>
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
            </ul>
        </div>
    )
}

export default index;