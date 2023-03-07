import React from "react";
import SubContents from './record_tbody_log';

const onRowClicked = (event) => {
    const trNextSibling = event.target.closest('tr').nextSibling;
    if (trNextSibling.className.includes('table__hide')) {
        trNextSibling.className = 'table__open';
    } else if (trNextSibling.className.includes('table__open')) {
        trNextSibling.className = 'table__hide';
    }
};

export default ({gameMode, battleLog, maps, brawlers}) => {

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
                    매치
                </th>
                <th className='table__head_row__trophy'>
                    <img className='table__head_row__image'
                         src={'images/game_icon/trophy_plus.webp'} alt='트로피 변화량'/>
                    변화량
                </th>
            </tr>
            </thead>
            <tbody>
            {
                battleLog.length > 0 ? battleLog.map(member => {
                    if (member.battles.length > 0) {
                        const match = member.battles.length;
                        const victory = member.battles.filter((elements) => {
                            return elements.players.filter((element) => {
                                return element.player_id === member.id && element.result === '-1';
                            }).length > 0
                        }).length

                        const trophyChange = member.battles.filter((element) => {
                            return element.info.match_type === '0';
                        }).length > 0 ? member.battles.filter((element) => {
                            return element.info.match_type === '0';
                        }).map((element) => {
                            return parseInt(element.info.match_change);
                        }).reduce((trophy, total) => trophy + total) : 0;

                        const victoryRate = isNaN(victory / match) ? 0 : Math.round((victory / match) * 10000) / 100.0

                        return (
                            <React.Fragment key={member.id}>
                                <tr className='main_row__box'
                                    onClick={onRowClicked}>
                                    <td>
                                        {member.name}
                                    </td>
                                    <td>
                                        {match}회
                                    </td>
                                    <td>
                                        <img src={'images/game_icon/trophy.webp'} alt='트로피'/>
                                        {trophyChange}
                                    </td>
                                </tr>
                                <tr className='table__hide'>
                                    <td className='sub_row__box sub_row__battle_log' colSpan='3'>
                                        <div>
                                            <p>
                                                <img src={'images/game_icon/account.webp'} alt={'계정'}/>
                                                태그 : {member.id}
                                            </p>
                                            <p>
                                                <img src={'images/game_icon/quests.webp'} alt={'퀘스트'}/>
                                                승률 : {victoryRate}%
                                            </p>
                                        </div>
                                        <hr/>
                                        <SubContents member={member}
                                                     rotation={gameMode}
                                                     maps={maps}/>
                                    </td>
                                </tr>
                            </React.Fragment>
                        )
                    }
            }) : null
            }
            </tbody>
        </table>
    )
}