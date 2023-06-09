import {useNavigate} from "react-router-dom";
import ToolPagination from "./tool_pagination";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

const SeasonTable = (props) => {
    const navigate = useNavigate();

    const offset = (props.page - 1) * 10;
    const total = Math.ceil(props.members.length / 10);

    const getPage = (num) => {
        props.getPage(num);
    };

    return (
        <div className={'battle_table__box'}>
            <table className='table__box_2'>
                <thead>
                <tr>
                    <th>
                        <img src={require('../images/game_icon/account.webp')} alt='닉네임'/>
                        닉네임
                    </th>
                    <th>
                        <img src={require('../images/game_icon/quests.webp')}
                             alt='매치'/>
                        매치/변화
                    </th>
                    <th>
                        <img src={require('../images/game_icon/friendly.webp')} alt='친밀도'/>
                        친밀도
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    props.members.slice(offset, offset + 10).map(member => {
                        return (
                            <tr key={`${member.MEMBER_ID}_${member.MATCH_TYP}_${member.MAP_MD}`}
                                onClick={() => {
                                    navigate(`../member/${member.MEMBER_ID.replace('#', '')}`)
                                }}>
                                <td>
                                    <FontAwesomeIcon icon={faAngleRight}/> {member.MEMBER_NM}
                                </td>
                                <td style={{textAlign: "center"}}>
                                    <div>
                                        <img src={require('../images/game_icon/quests.webp')}
                                             alt='매치'/>
                                        {member.MATCH_CNT}회
                                    </div>
                                    <div>
                                        <img src={require('../images/game_icon/trophy_plus.webp')}
                                             alt='변화량'/>
                                        {member.MATCH_CHG}개
                                    </div>
                                </td>
                                <td>
                                    <img src={require('../images/game_icon/friendly.webp')}
                                         alt='트로피 변화량'/>
                                    {member.FRIEND_PT}
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            <ToolPagination page={props.page}
                            total={total}
                            getPage={getPage}/>
        </div>
    );
};

export default SeasonTable;