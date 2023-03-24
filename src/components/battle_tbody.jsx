import React from "react";

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
        <table className='table__box_2'>
            <thead>
            <tr>
                <th>
                    <img className='table__head_row__image'
                         src={require('../images/game_icon/account.webp')} alt='닉네임'/>
                    닉네임
                </th>
                <th className='member_table__trophy'>
                    <img className='table__head_row__image'
                         src={require('../images/game_icon/trophy.webp')} alt='트로피'/>
                    매치
                </th>
                <th className='member_table__trophy'>
                    <img className='table__head_row__image'
                         src={require('../images/game_icon/trophy_plus.webp')} alt='트로피 변화량'/>
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
                                return element.player_id === member.id && element.match_result === '-1';
                            }).length > 0;
                        }).length;

                        const trophyChange = member.battles.filter((element) => {
                            return element.info.match_type === '0';
                        }).length > 0 ? member.battles.filter((element) => {
                            return element.info.match_type === '0';
                        }).map((element) => {
                            return parseInt(element.info.match_change);
                        }).reduce((trophy, total) => trophy + total) : 0;

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
                                        <img src={require('../images/game_icon/trophy.webp')} alt='트로피'/>
                                        {trophyChange}
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