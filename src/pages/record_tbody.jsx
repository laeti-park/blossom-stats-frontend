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

export default ({gameMode, members, battleLog, maps, brawlers}) => {

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
                battleLog.map(items => {
                    if (items.battles.length > 0) {
                        const match = items.battles.length
                        const victory = items.battles.filter((elements) => {
                            return elements.battle.filter((element) => {
                                return element.tag === items.id && element.result === '0';
                            }).length > 0
                        }).length

                        const trophyChange = items.battles.filter((element) => {
                            return element.type === '0';
                        }).length > 0 ? items.battles.filter((element) => {
                            return element.type === '0';
                        }).map((element) => {
                            return parseInt(element.trophy_change);
                        }).reduce((trophy, total) => trophy + total) : 0;

                        const victoryRate = isNaN(victory / match) ? 0 : Math.round((victory / match) * 10000) / 100.0

                        return (
                            <React.Fragment key={items.id}>
                                <tr className='main_row__box'
                                    onClick={onRowClicked}>
                                    <td>
                                        {getMemberName(items.id)}
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
                                                태그 : {items.id}
                                            </p>
                                            <p>
                                                <img src={'images/game_icon/quests.webp'} alt={'퀘스트'}/>
                                                승률 : {victoryRate}%
                                            </p>
                                        </div>
                                        <hr/>
                                        <SubContents items={items}
                                                     rotation={gameMode}
                                                     maps={maps}/>
                                    </td>
                                </tr>
                            </React.Fragment>
                        )
                    }
            })
            }
            </tbody>
        </table>
    )
}