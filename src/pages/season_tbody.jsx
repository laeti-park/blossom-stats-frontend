import React from "react";
import SubContents from './season_tbody_log';

const onRowClicked = (event) => {
    const trNextSibling = event.target.closest('tr').nextSibling;
    if (trNextSibling.className.includes('table__hide')) {
        trNextSibling.className = 'table__open';
    } else if (trNextSibling.className.includes('table__open')) {
        trNextSibling.className = 'table__hide';
    }
};

export default ({members}) => {

    return (
        <table className='table__box'>
            <thead>
            <tr>
                <th>
                    <img className='table__head_row__image'
                         src={'images/game_icon/account.webp'} alt='닉네임'/>
                    닉네임
                </th>
                <th className='table__head_row__rank'>
                    <img className='table__head_row__image'
                         src={'images/game_icon/trophy.webp'} alt='트로피'/>
                    매치
                </th>
                <th className='table__head_row__trophy'>
                    <img className='table__head_row__image'
                         src={'images/game_icon/trophy_plus.webp'} alt='트로피 변화량'/>
                    변화량
                </th>
                <th className='table__head_row__trophy'>
                    <img className='table__head_row__image'
                         src={'images/game_icon/friendly.webp'} alt='친밀도'/>
                    친밀도
                </th>
            </tr>
            </thead>
            <tbody>
            {
                members.map(member => {

                    return (
                        <React.Fragment key={member.id}>
                            <tr className='main_row__box'
                                onClick={onRowClicked}>
                                <td>
                                    {member.name}
                                </td>
                                <td>
                                    {member.record_match}회
                                </td>
                                <td>
                                    {member.record_trophy_change}
                                </td>
                                <td>
                                    {member.friend_total_point}
                                </td>
                            </tr>
                            <tr className='table__hide'>
                                <td className='sub_row__box' colSpan='4'>
                                    <SubContents member={member}/>
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