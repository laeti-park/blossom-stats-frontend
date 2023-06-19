import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const roman = ['I', 'II', 'III'];

const MemberTable = ({members}) => {
    const navigate = useNavigate();

    return (
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
                         src={'/images/game_mode_icon/rankSolo.webp'}
                         alt='솔로'/>
                    솔로
                </th>
                <th className='table__head_row__rank'>
                    <img className='table__head_row__image'
                         src={'/images/game_mode_icon/rankTeam.webp'}
                         alt='팀'/>
                    팀
                </th>
            </tr>
            </thead>
            <tbody>
            {
                members.map(member => {
                    return (
                        <tr key={member.MEMBER_ID}
                            onClick={
                                () => {
                                    navigate(`./${member.MEMBER_ID.replace('#', '')}`)
                                }}>
                            <td>
                                <FontAwesomeIcon icon={faAngleRight}/> {member.MEMBER_NM}
                            </td>
                            <td>
                                <img src={require('../images/game_icon/trophy.webp')}
                                     alt='트로피'/>
                                {member.TROPHY_CUR}
                            </td>
                            <td>
                                <img src={`images/rank_pl/${Math.floor(member.PL_SL_CUR / 3)}.webp`}
                                     alt={'솔로'}/>
                                {roman[(member.PL_SL_CUR % 3)]}
                            </td>
                            <td>
                                <img src={`images/rank_pl/${Math.floor(member.PL_TM_CUR / 3)}.webp`}
                                     alt={'파워 리그 랭크'}/>
                                {roman[(member.PL_TM_CUR % 3)]}
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
};

export default MemberTable;