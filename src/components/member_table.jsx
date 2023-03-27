import {useNavigate} from "react-router-dom";

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
            <tbody>
            {
                members.map(member => {
                    return (
                        <tr key={member.id}
                            onClick={
                            () => {
                                navigate(`./${member.id.replace('#', '')}`)
                            }}>
                            <td>
                                {member.name}
                            </td>
                            <td>
                                <img src={require('../images/game_icon/trophy.webp')}
                                     alt='트로피'/>
                                {member.trophy_current}
                            </td>
                            <td>
                                <img src={`images/league_rank/${Math.floor(member.league_solo_current / 3)}.webp`}
                                     alt={'솔로'}/>
                                {roman[(member.league_solo_current % 3)]}
                            </td>
                            <td>
                                <img src={`images/league_rank/${Math.floor(member.league_team_current / 3)}.webp`}
                                     alt={'파워 리그 랭크'}/>
                                {roman[(member.league_team_current % 3)]}
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}

export default MemberTable;