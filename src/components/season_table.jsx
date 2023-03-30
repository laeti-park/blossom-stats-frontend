import {useNavigate} from "react-router-dom";
import ToolPagination from "./tool_pagination";
import React from "react";

export default (props) => {
    console.log(props)
    const navigate = useNavigate();

    const offset = (props.page - 1) * 12;
    const total = Math.ceil(props.members.length / 12);

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
                        <img src={require('../images/game_icon/trophy.webp')} alt='트로피'/>
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
                    props.members.slice(offset, offset + 12).map(member => {
                        return (
                            <tr key={member.id}
                                onClick={() => {
                                    navigate(`../member/${member.id.replace('#', '')}`)
                                }}>
                                <td>
                                    {member.name}
                                </td>
                                <td>
                                    <div>
                                        <img src={require('../images/game_icon/account.webp')}
                                             alt='매치'/>
                                        {member.records.match_count}회
                                    </div>
                                    <div>
                                        <img src={require('../images/game_icon/trophy_plus.webp')}
                                             alt='트로피 변화량'/>
                                        {member.records.match_change}개
                                    </div>
                                </td>
                                <td>
                                    <img src={require('../images/game_icon/friendly.webp')}
                                         alt='트로피 변화량'/>
                                    {member.friends !== undefined ? member.friends.point.toFixed(2) : 0}
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
    )
}