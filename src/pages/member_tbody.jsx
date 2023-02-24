import React from 'react';

const roman = ['I', 'II', 'III'];

const onRowClicked = (event) => {
    const trNextSibling = event.target.closest('tr').nextSibling;
    if (trNextSibling.className.includes('table__hide')) {
        trNextSibling.className = 'table__open';
    } else if (trNextSibling.className.includes('table__open')) {
        trNextSibling.className = 'table__hide';
    }
};

export default ({members}) => {

    members.sort((a, b) => {
        return b.trophy_current - a.trophy_current;
    })

    return (
        <tbody>
        {
            members.map(item => {
                return (
                    <React.Fragment key={item.id}>
                        <tr className='main_row__box'
                            onClick={onRowClicked}>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                <img src={'images/game_icon/trophy.webp'} alt='트로피'/>
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
                        <tr className='table__hide'>
                            <td className='sub_row__box' colSpan='4'>
                                <div className='sub_row__content'>
                                    <p>
                                        <img src={'images/game_icon/account.webp'} alt={'계정'}/>
                                        태그 : {item.id}
                                    </p>
                                    <p>
                                        <button>태그 복사</button>
                                        <button>친구 신청</button>
                                    </p>
                                </div>
                                <hr/>
                                <div className='sub_row__content'>
                                    <p>
                                        <img src={'images/game_icon/trophy.webp'} alt='트로피'/>
                                        현재 트로피 : {item.trophy_current}개
                                    </p>
                                    <p>
                                        <img src={'images/game_icon/trophy.webp'} alt='트로피'/>
                                        최고 트로피 : {item.trophy_highest}개
                                    </p>
                                </div>
                                <div className='sub_row__content'>
                                    <p>
                                        <img src={'images/game_mode/rankTriple.webp'} alt={'3vs3'}/>
                                        3vs3 승리 : {item.victory_triple}회
                                    </p>
                                    <p>
                                        <img src={'images/game_mode/duoShowdown.webp'} alt={'duo'}/>
                                        듀오 승리 : {item.victory_duo}회
                                    </p>
                                </div>
                                <hr/>
                                <div className='sub_row__content'>
                                    <p>
                                        <img src={'images/trophy_rank/25.png'} alt={'rank25'}/>
                                        Rank : {item.rank_25}개
                                    </p>
                                    <p>
                                        <img src={'images/trophy_rank/30.png'} alt={'rank30'}/>
                                        Rank : {item.rank_30}개
                                    </p>
                                    <p>
                                        <img src={'images/trophy_rank/35.png'} alt={'rank35'}/>
                                        Rank : {item.rank_35}개
                                    </p>
                                </div>
                                <hr/>
                                <div className='sub_row__content'>
                                    <p>
                                        <img src={'images/game_mode/rankSolo.webp'}
                                             alt={'솔로'}/>
                                        현재 솔로 랭크 :
                                        <img src={`images/league_rank/${Math.floor(item.league_solo_current / 3)}.webp`}
                                             alt={'파워 리그 랭크'}/>
                                        {roman[(item.league_solo_current % 3)]}
                                    </p>
                                    <p>
                                        <img src={'images/game_mode/rankTeam.webp'} alt='팀'/>
                                        현재 팀 랭크 :
                                        <img src={`images/league_rank/${Math.floor(item.league_team_current / 3)}.webp`}
                                             alt={'파워 리그 랭크'}/>
                                        {roman[(item.league_team_current % 3)]}
                                    </p>
                                </div>
                                <div className='sub_row__content'>
                                    <p>
                                        <img src={'images/game_mode/rankSolo.webp'}
                                             alt='솔로'/>
                                        최고 솔로 랭크 :
                                        <img src={`images/league_rank/${Math.floor(item.league_solo_highest / 3)}.webp`}
                                             alt={'파워 리그 랭크'}/>
                                        {roman[(item.league_solo_highest % 3)]}
                                    </p>
                                    <p>
                                        <img src={'images/game_mode/rankTeam.webp'} alt='팀'/>
                                        최고 팀 랭크 :
                                        <img
                                            src={`images/league_rank/${Math.floor(item.league_team_highest / 3)}.webp`}
                                            alt={'파워 리그 랭크'}/>
                                        {roman[(item.league_team_highest % 3)]}
                                    </p>
                                </div>
                            </td>
                        </tr>
                    </React.Fragment>
                )
            })
        }
        </tbody>
    );
};