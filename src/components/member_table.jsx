import Tbody from "./member_tbody";
import React from "react";

const memberTable = ({members}) => {
    return(
        <table className='table__box'>
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
            <Tbody members={members}/>
        </table>
    )
}

export default memberTable;