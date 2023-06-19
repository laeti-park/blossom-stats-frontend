import React, {useState} from "react";
import ToolPagination from "./tool_pagination";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

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
                        <img src={require('../images/game_icon/account.webp')} alt='닉네임'/>
                        닉네임
                    </th>
                    <th>
                        <img src={require('../images/game_icon/trophy.webp')} alt='트로피'/>
                        현재
                    </th>
                    <th>
                        <img src={require('../images/game_icon/trophy.webp')} alt='트로피'/>
                        최고
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    memberBrawlers.slice(offset, offset + 12).map(brawler => {
                        return (
                            <tr key={`${brawler.MEMBER_ID}_${brawler.BRAWLER_ID}`}
                                onClick={() => {
                                    navigate(`./${brawler.MEMBER_ID.replace('#', '')}`)
                                }}>
                                <td>
                                    <FontAwesomeIcon icon={faAngleRight}/> {brawler.MEMBER_NM}
                                </td>
                                <td>
                                    <img src={require('../images/game_icon/trophy.webp')} alt='트로피'/>
                                    {brawler.TROPHY_CUR}
                                </td>
                                <td>
                                    <img src={require('../images/game_icon/trophy.webp')} alt='트로피'/>
                                    {brawler.TROPHY_HGH}
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            <ToolPagination page={page}
                            total={total}
                            getPage={getPage}/>
        </React.Fragment>
    )
}

export default BrawlerTable;