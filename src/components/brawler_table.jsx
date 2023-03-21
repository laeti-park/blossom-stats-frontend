import React, {useState} from "react";
import Tool_pagination from "./tool_pagination";
import {useNavigate} from "react-router-dom";

const BrawlerTable = ({memberBrawlers}) => {
    const navigate = useNavigate();

    const [page, setPage] = useState(1);
    const offset = (page - 1) * 12;
    const total = Math.ceil(memberBrawlers.length / 12);

    const getPage = (num) => {
        setPage(num);
    };

    return (
        <React.Fragment>
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
                        현재
                    </th>
                    <th className='member_table__trophy'>
                        <img className='table__head_row__image'
                             src={require('../images/game_icon/trophy.webp')} alt='트로피'/>
                        최고
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    memberBrawlers.slice(offset, offset + 12).map(brawler => {
                        return (
                            <tr className='main_row__box'
                                key={`${brawler.member_id}_${brawler.brawler_id}`}
                                onClick={() => {
                                    navigate(`./${brawler.member_id.replace('#', '')}`)
                                }}>
                                <td>
                                    {brawler.name}
                                </td>
                                <td>
                                    <img src={require('../images/game_icon/trophy.webp')} alt='트로피'/>
                                    {brawler.trophy_current}
                                </td>
                                <td>
                                    <img src={require('../images/game_icon/trophy.webp')} alt='트로피'/>
                                    {brawler.trophy_highest}
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            <Tool_pagination page={page}
                             total={total}
                             getPage={getPage}/>
        </React.Fragment>
    )
}

export default BrawlerTable;