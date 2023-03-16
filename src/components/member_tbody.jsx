import React from 'react';
import {useNavigate} from "react-router-dom";

const roman = ['I', 'II', 'III'];

export default ({members}) => {
    const navigate = useNavigate();

    members.sort((a, b) => {
        return b.trophy_current - a.trophy_current;
    })

    return (
        <tbody>
        {
            members.map(item => {
                return (
                    <React.Fragment key={item.id}>
                        <tr onClick={
                            () => {
                                navigate(`./${item.id.replace('#', '')}`)
                            }
                        }>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                <img src={require('../images/game_icon/trophy.webp')} alt='트로피'/>
                                {item.trophy_current}
                            </td>
                            <td>
                                <img src={`images/league_rank/${Math.floor(item.league_solo_current / 3)}.webp`}
                                     alt={'솔로'}/>
                                {roman[(item.league_solo_current % 3)]}
                            </td>
                            <td>
                                <img src={`images/league_rank/${Math.floor(item.league_team_current / 3)}.webp`}
                                     alt={'파워 리그 랭크'}/>
                                {roman[(item.league_team_current % 3)]}
                            </td>
                        </tr>
                    </React.Fragment>
                )
            })
        }
        </tbody>
    );
};