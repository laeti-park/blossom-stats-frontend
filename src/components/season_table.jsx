import {useNavigate} from "react-router-dom";
import ToolPagination from "./tool_pagination";
import React from "react";

export default (props) => {
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
                            <tr key={member.id}
                                onClick={() => {
                                    navigate(`../member/${member.id.replace('#', '')}`)
                                }}>
                                <td>
                                    {member.name}
                                </td>
                                <td style={{textAlign: "center"}}>
                                    <div>
                                        <img src={require('../images/game_icon/quests.webp')}
                                             alt='매치'/>
                                        {member.match_count}회
                                    </div>
                                    <div>
                                        <img src={require('../images/game_icon/trophy_plus.webp')}
                                             alt='변화량'/>
                                        {member.match_change}개
                                    </div>
                                </td>
                                <td>
                                    <img src={require('../images/game_icon/friendly.webp')}
                                         alt='트로피 변화량'/>
                                    {member.point}
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
}