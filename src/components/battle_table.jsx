import React from "react";
import {useNavigate} from "react-router-dom";
import ToolPagination from "./tool_pagination";

export default (props) => {
    const navigate = useNavigate();

    const offset = (props.page - 1) * 12;
    const total = Math.ceil(props.battles.length / 12);

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
                        매치
                    </th>
                    <th>
                        <img src={require('../images/game_icon/trophy_plus.webp')} alt='트로피 변화량'/>
                        변화량
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    props.battles.slice(offset, offset + 12).map(member => {
                        return (
                            <React.Fragment key={member.member_id}>
                                <tr onClick={() => {
                                    navigate(`./${member.member_id.replace('#', '')}`)
                                }}>
                                    <td>
                                        {member[`Member.name`]}
                                    </td>
                                    <td>
                                        {member.match_count}회
                                    </td>
                                    <td>
                                        <img src={require('../images/game_icon/trophy.webp')} alt='트로피'/>
                                        {member.match_change}
                                    </td>
                                </tr>
                            </React.Fragment>
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