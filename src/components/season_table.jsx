import React from "react";
/*
const onRowClicked = (event) => {
    const trNextSibling = event.target.closest('tr').nextSibling;
    if (trNextSibling.className.includes('table__hide')) {
        trNextSibling.className = 'table__open';
    } else if (trNextSibling.className.includes('table__open')) {
        trNextSibling.className = 'table__hide';
    }
};*/

export default ({members}) => {

    return (
        <div className={'battle_table__box'}>
            <table className='table__box_2'>
                <thead>
                <tr>
                    <th>
                        <img className='table__head_row__image'
                             src={require('../images/game_icon/account.webp')} alt='닉네임'/>
                        닉네임
                    </th>
                    <th className='table__head_row__rank'>
                        <img className='table__head_row__image'
                             src={require('../images/game_icon/trophy.webp')} alt='트로피'/>
                        매치/변화
                    </th>
                    <th className='member_table__trophy'>
                        <img className='table__head_row__image'
                             src={require('../images/game_icon/friendly.webp')} alt='친밀도'/>
                        친밀도
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    members.map(member => {

                        return (
                            <React.Fragment key={member.id}>
                                <tr className='main_row__box'>
                                    <td>
                                        {member.name}
                                    </td>
                                    <td>
                                        <div>
                                            {member.record_match}회
                                        </div>
                                        <div>
                                            <img className='table__head_row__image'
                                                 src={require('../images/game_icon/trophy_plus.webp')} alt='트로피 변화량'/>
                                            {member.record_match_change}
                                        </div>
                                    </td>
                                    <td>
                                        {member.friend_total_point}
                                    </td>
                                </tr>
                            </React.Fragment>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}