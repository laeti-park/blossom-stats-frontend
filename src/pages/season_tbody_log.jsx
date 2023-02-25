import React from "react";

const rankNameArray = ['0~249', '250~499', '500~749', '750~999', '1000~1250', '1250~'];
const roman = ['I', 'II', 'III'];
const typeNameArray = ['trophyLeague', 'friendly', 'powerLeague', 'powerLeague', 'challenge', 'challenge', 'clubLeague'];

export default ({member}) => {

    function getRankName(item) {
        if (['0', '4', '5'].includes(item.game_type)) {
            return rankNameArray[item.trophy_grade]
        } else if (item.game_type === '6') {
            return '-';
        } else {
            return (
                <React.Fragment>
                    <img className={'sub_row__image'}
                         src={`images/league_rank/${Math.floor((item.trophy_grade - 1) / 3)}.webp`}
                         alt={'파워 리그 랭크'}/>
                    {roman[((item.trophy_grade - 1) % 3)]}
                </React.Fragment>
            )
        }
    }

    return (
        <React.Fragment>
            <div>
                <p>
                    <img src={'images/game_icon/account.webp'} alt={'계정'}/>
                    태그 : {member.id}
                </p>
                <p>
                    <img src={'images/game_icon/quests.webp'} alt={'퀘스트'}/>
                    승률 : {member.record_victory_rate}%
                </p>
            </div>
            {
                member.friends.length > 0 ?
                    <React.Fragment>
                        <hr/>
                        <ul className={'season__title'}>
                            <li>
                                닉네임
                            </li>
                            <li>
                                리그
                            </li>
                            <li>
                                모드
                            </li>
                            <li>
                                랭크
                            </li>
                            <li>
                                매치
                            </li>
                            <li>
                                승률
                            </li>
                            <li>
                                친밀도
                            </li>
                        </ul>
                    </React.Fragment> : null
            }
            {
                member.friends.map(item => {
                    return (
                        <ul key={item.id}
                            className={'season__content'}>
                            <li>
                                {item.friend_name}
                            </li>
                            <li>
                                <img src={`images/game_mode/${typeNameArray[item.game_type]}.webp`} alt={'게임 방식'}/>
                            </li>
                            <li>
                                <img src={`images/game_mode/${item.map_mode}.webp`} alt={'게임 모드'}/>
                            </li>
                            <li>
                                {getRankName(item)}
                            </li>
                            <li>
                                {item.match}
                            </li>
                            <li>
                                {isNaN(item.victory / item.match) ?
                                    0 : Math.round((item.victory / item.match) * 10000) / 100.0}%
                            </li>
                            <li>
                                {item.point}
                            </li>
                        </ul>
                    )
                })
            }
        </React.Fragment>
    )
}