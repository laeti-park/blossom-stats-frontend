import React from "react";
import MemberTableBody from "./member_table_body";

const MemberTable = ({members}) => {
    return(
        <table className='table__box_1'>
            <thead>
            <tr>
                <th>
                    <img className='table__head_row__image'
                         src={require('../images/game_icon/account.webp')}
                         alt='계정'/>
                    닉네임
                </th>
                <th>
                    <img className='table__head_row__image'
                         src={require('../images/game_icon/trophy.webp')}
                         alt='트로피'/>
                    트로피
                </th>
                <th className='table__head_row__rank'>
                    <img className='table__head_row__image'
                         src={'/images/game_mode/rankSolo.webp'}
                         alt='솔로'/>
                    솔로
                </th>
                <th className='table__head_row__rank'>
                    <img className='table__head_row__image'
                         src={'/images/game_mode/rankTeam.webp'}
                         alt='팀'/>
                    팀
                </th>
            </tr>
            </thead>
            <MemberTableBody members={members}/>
        </table>
    )
}

export default MemberTable;