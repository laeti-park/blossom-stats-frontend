import React from "react";

const matchResultArray = ['승', '무', '패'];
const roman = ['I', 'II', 'III'];

const Battles = (props) => {

    const battleDiv = (array, players) => {
        return array.map(number =>
            <div className={'battle_detail'}>
                {
                    players.filter(player => player.player_team === number)
                        .map(player => {
                            return (
                                <div>
                                    <div>
                                        <img src={`/images/brawler_profile/${player.brawler_id}.webp`}
                                             alt={'브롤러'}/>
                                        <div>
                                            <div>
                                                <div>
                                                    <img
                                                        src={require('../images/game_icon/trophy.webp')}
                                                        alt='트로피'/>
                                                    {
                                                        player.brawler_trophy
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
            </div>
        )
    }

    const battleDetail = (mode, players) => {

        if (["0", "3"].includes(mode)) {
            return (
                <div className={'battle_1v1'}>
                    {
                        battleDiv(["0", "1"], players)
                    }
                </div>
            )
        } else if (mode === "2") {
            return (
                <div className={'battle_survive'}>
                    {
                        battleDiv(["0", "1", "2", "3", "4"], players)
                    }
                </div>
            )
        } else {
            return (
                <div>
                    <div className={'battle_survive'}>
                        {
                            battleDiv(["0", "1", "2", "3", "4"], players)
                        }
                    </div>
                    <div className={'battle_survive'}>
                        {
                            battleDiv(["5", "6", "7", "8", "9"], players)
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
                    return (
                        <table key={battle.info.id}
                               className='table__box_3'>
                            <thead>
                            <tr>
                                <th>
                                    {
                                        battle.info.id.substring(0, 19)
                                    }
                                </th>
                                <th>
                                    {
                                        battle.info.map_name
                                    }
                                </th>
                                <th>
                                    {
                                        matchResultArray[parseInt(battle.players.find(player => player.player_id === battle.member_id).match_result) + 1]
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
                                    {battleDetail(battle.info.match_mode, battle.players)}
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