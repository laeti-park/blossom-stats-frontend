import React from "react";

const matchResultArray = ['승', '무', '패'];
const roman = ['I', 'II', 'III'];

const Battles = (props) => {

    const battleDiv = (array, players, matchType) => {
        return array.map(number => {
            return (<div className={'battle_detail'}
                         key={`${number}`}>
                {
                    players.filter(player => player.player_team === number)
                        .map(player => {
                            return (
                                <div key={`${player.player_id}`}>
                                    <div>
                                        <img src={`/images/brawler_profile/${player.brawler_id}.webp`}
                                             alt={'브롤러'}/>
                                        <div>
                                            <div>
                                                <div>
                                                    {
                                                        matchType === '0' ?
                                                            <img src={require('../images/game_icon/trophy.webp')}
                                                                 alt='트로피'/> : ['2', '3'].includes(matchType) ?
                                                                <img className={'summary__image-3'}
                                                                     src={`/images/league_rank/${Math.floor((player.brawler_trophy - 1) / 3)}.webp`}
                                                                     alt={'파워 리그 랭크'}/> : matchType === '6' ?
                                                                    <img className={'summary__image-3'}
                                                                         src={`/images/game_mode/clubLeague.webp`}
                                                                         alt={'클럽 리그'}/> :
                                                                    <img className={'summary__image-3'}
                                                                         src={`/images/game_mode/challenge.webp`}
                                                                         alt={'챌린지'}/>
                                                    }
                                                    {
                                                        matchType === "0" ? player.brawler_trophy :
                                                            ['2', '3'].includes(matchType) ? roman[(player.brawler_trophy % 3)] :
                                                                matchType === '6' ?
                                                                    <img className={'summary__image-3'}
                                                                         src={`/images/game_mode/clubLeague.webp`}
                                                                         alt={'클럽 리그'}/> :
                                                                    <img className={'summary__image-3'}
                                                                         src={`/images/game_mode/challenge.webp`}
                                                                         alt={'챌린지'}/>
                                                    }
                                                </div>
                                                <div>
                                                    <img
                                                        src={require('../images/game_icon/power_point.webp')}
                                                        alt='트로피'/>
                                                    {
                                                        player.brawler_power
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'battle_player_name'}>
                                        {
                                            player.player_name
                                        }
                                    </div>
                                </div>
                            )
                        })
                }
            </div>)
        })
    }

    const battleDetail = (mode, matchType, players) => {

        if (["0", "3"].includes(mode)) {
            return (
                <div className={'battle_1v1'}>
                    {
                        battleDiv(["0", "1"], players, matchType)
                    }
                </div>
            )
        } else if (mode === "2") {
            return (
                <div className={'battle_survive'}>
                    {
                        battleDiv(["0", "1", "2", "3", "4"], players, matchType)
                    }
                </div>
            )
        } else {
            return (
                <div>
                    <div className={'battle_survive'}>
                        {
                            battleDiv(["0", "1", "2", "3", "4"], players, matchType)
                        }
                    </div>
                    <div className={'battle_survive'}>
                        {
                            battleDiv(["5", "6", "7", "8", "9"], players, matchType)
                        }
                    </div>
                </div>
            )
        }
    }

    return (
        <div className={'summary__list-2'}>
            {
                props.battles.map(battle => {
                    const matchType = battle.info.match_type === "0" ? "trophyLeague" :
                        battle.info.match_type === "2" ? "rankSolo" :
                            battle.info.match_type === "3" ? "rankTeam" :
                                battle.info.match_type === "6" ? "clubLeague" : "challenge";

                    return (
                        <table key={battle.info.id}
                               className='table__box_3'>
                            <thead>
                            <tr>
                                <th>
                                    <img className={"summary__image-3"}
                                         src={`/images/game_mode/${matchType}.webp`}
                                         alt={'게임 모드'}/>
                                    {
                                        battle.info.id.substring(0, 19)
                                    }
                                </th>
                                <th>
                                    <img className={"summary__image-3"}
                                         src={`/images/game_mode/${battle.info.map_mode}.webp`}
                                         alt={'게임 모드'}/>
                                    {
                                        battle.info.map_name
                                    }
                                </th>
                                <th>
                                    {
                                        matchResultArray[parseInt(battle.players.find(player => player.player_id === battle.member_id)?.match_result) + 1]
                                    }
                                </th>
                                <th>
                                    {
                                        battle.info.match_change
                                    }
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td colSpan={4}>
                                    {battleDetail(battle.info.match_mode, battle.info.match_type, battle.players)}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    )
                })
            }
        </div>
    )
}

export default Battles;