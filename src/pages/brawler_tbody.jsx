import React from "react";

const onRowClicked = (event) => {
    const trNextSibling = event.target.closest('tr').nextSibling;
    if (trNextSibling.className.includes('table__hide')) {
        trNextSibling.className = 'table__open';
    } else if (trNextSibling.className.includes('table__open')) {
        trNextSibling.className = 'table__hide';
    }
};

const brawlerTable = ({brawler, memberBrawlers, members}) => {

    const filterMembers = memberBrawlers.filter((element) => {
        return element.brawler_id === brawler;
    });

    filterMembers.sort((a, b) => {
        return b.trophy_current - a.trophy_current;
    });

    const getMemberName = (id) => {
        const item = members.find((element) => {
            return element.id === id;
        })

        if (item !== undefined) {
            return item.name;
        } else {
            return 0;
        }
    }

    return (
        <table className='table__box'>
            <thead>
            <tr>
                <th>
                    <img className='table__head_row__image'
                         src={'images/game_icon/account.webp'} alt='닉네임'/>
                    닉네임
                </th>
                <th className='table__head_row__trophy'>
                    <img className='table__head_row__image'
                         src={'images/game_icon/trophy.webp'} alt='트로피'/>
                    현재
                </th>
                <th className='table__head_row__trophy'>
                    <img className='table__head_row__image'
                         src={'images/game_icon/trophy.webp'} alt='트로피'/>
                    최고
                </th>
            </tr>
            </thead>
            <tbody>
            {
                filterMembers.map(item => {
                    return (
                        <React.Fragment key={item.id}>
                            <tr className='main_row__box'
                                onClick={onRowClicked}>
                                <td>
                                    {getMemberName(item.member_id)}
                                </td>
                                <td>
                                    <img src={'images/game_icon/trophy.webp'} alt='트로피'/>
                                    {item.trophy_current}
                                </td>
                                <td>
                                    <img src={'images/game_icon/trophy.webp'} alt='트로피'/>
                                    {item.trophy_highest}
                                </td>
                            </tr>
                            <tr className='table__hide'>
                                <td className='sub_row__box' colSpan='4'>
                                    <div className='sub_row__content'>
                                        <p>
                                            <img src={'images/game_icon/account.webp'} alt={'계정'}/>
                                            태그 : {item.member_id}
                                        </p>
                                        <p>
                                            <img src={'images/game_icon/power_point.webp'} alt={'파워 레벨'}/>
                                            파워 레벨 : {item.power}
                                        </p>
                                    </div>
                                    <hr/>
                                    <div className='sub_row__content'>
                                        <p>
                                            <img src={'images/game_icon/trophy.webp'}
                                                 alt='트로피'/>
                                            시작 트로피
                                            : {item.trophy_begin !== -1 ? item.trophy_begin : item.trophy_current}개
                                        </p>
                                        <p>
                                            <img src={'images/game_icon/trophy.webp'}
                                                 alt='트로피'/>
                                            현재 트로피 : {item.trophy_current}개
                                        </p>
                                    </div>
                                    <div className='sub_row__content'>
                                        <p>
                                            <img src={'images/game_icon/trophy_plus.webp'}
                                                 alt='트로피 변화량'/>
                                            트로피 변화량
                                            : {item.trophy_begin !== -1 ? item.trophy_current - item.trophy_begin : 0}개
                                        </p>
                                        <p>
                                            <img src={'images/game_icon/trophy.webp'}
                                                 alt='트로피'/>
                                            최고 트로피 : {item.trophy_highest}개
                                        </p>
                                    </div>
                                    <hr/>
                                    <div className='sub_row__content'>
                                        <p>
                                            <img
                                                src={'images/game_mode/trophyLeague.webp'}
                                                alt='트로피 리그'/>
                                            트로피 리그 경기 : {item.match_trophy}회
                                        </p>
                                        <p>
                                            <img
                                                src={'images/game_mode/powerLeague.webp'}
                                                alt='파워 리그'/>
                                            파워 리그 경기 : {item.match_league}회
                                        </p>
                                    </div>
                                    <div className='sub_row__content'>
                                        <p>
                                            <img
                                                src={'images/game_mode/trophyLeague.webp'}
                                                alt='트로피 리그'/>
                                            트로피 리그 승률
                                            : {isNaN(item.victory_trophy / item.match_trophy) ? 0 :
                                            Math.round((item.victory_trophy / item.match_trophy * 10) * 10)}%
                                        </p>
                                        <p>
                                            <img
                                                src={'images/game_mode/powerLeague.webp'}
                                                alt='파워 리그'/>
                                            파워 리그 승률
                                            : {isNaN(item.victory_league / item.match_league) ? 0 : Math.round((item.victory_league / item.match_league * 10) * 10)}%
                                        </p>
                                    </div>
                                </td>
                            </tr>
                        </React.Fragment>
                    )
                })
            }
            </tbody>
        </table>
    )
}

export default brawlerTable;