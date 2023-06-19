import React from "react";

const matchResultArray = ["승", "무", "패"];
const roman = ["I", "II", "III"];

const Battles = (props) => {

    const battleDiv = (array, players, matchType) => {
        return array.map(number => {
            return (<div className={"battle_detail"}
                         key={`${number}`}>
                {
                    players.filter(player => player.PLAYER_TM_NO === number)
                        .map(player => {
                            return (
                                <div key={`${player.PLAYER_ID}`}>
                                    <div>
                                        <img src={`/images/brawler_profile/${player.BRAWLER_ID}.webp`}
                                             alt={"브롤러"}/>
                                        <div>
                                            <div>
                                                <div>
                                                    {
                                                        matchType === 0 ?
                                                            <img src={require("../images/game_icon/trophy.webp")}
                                                                 alt="트로피"/> : [2, 3].includes(matchType) ?
                                                                <img className={"summary__image-3"}
                                                                     src={`/images/rank_pl/${Math.floor((player.BRAWLER_TRP - 1) / 3)}.webp`}
                                                                     alt={"파워 리그 랭크"}/> : matchType === 6 ?
                                                                    <img className={"summary__image-3"}
                                                                         src={`/images/game_mode_icon/clubLeague.webp`}
                                                                         alt={"클럽 리그"}/> :
                                                                    <img className={"summary__image-3"}
                                                                         src={`/images/game_mode_icon/challenge.webp`}
                                                                         alt={"챌린지"}/>
                                                    }
                                                    {
                                                        matchType === 0 ? player.BRAWLER_TRP :
                                                            [2, 3].includes(matchType) ? roman[(player.BRAWLER_TRP % 3)] :
                                                                matchType === 6 ?
                                                                    <img className={"summary__image-3"}
                                                                         src={`/images/game_mode_icon/clubLeague.webp`}
                                                                         alt={"클럽 리그"}/> :
                                                                    <img className={"summary__image-3"}
                                                                         src={`/images/game_mode_icon/challenge.webp`}
                                                                         alt={"챌린지"}/>
                                                    }
                                                </div>
                                                <div>
                                                    <img
                                                        src={require("../images/game_icon/power_point.webp")}
                                                        alt="트로피"/>
                                                    {
                                                        player.BRAWLER_PWR
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"battle_player_name"}>
                                        {
                                            player.PLAYER_NM
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

        if ([0, 3].includes(mode)) {
            return (
                <div className={"battle_1v1"}>
                    {
                        battleDiv([0, 1], players, matchType)
                    }
                </div>
            )
        } else if (mode === 2) {
            return (
                <div className={"battle_survive"}>
                    {
                        battleDiv([0, 1, 2, 3, 4], players, matchType)
                    }
                </div>
            )
        } else {
            return (
                <div>
                    <div className={"battle_survive"}>
                        {
                            battleDiv([0, 1, 2, 3, 4], players, matchType)
                        }
                    </div>
                    <div className={"battle_survive"}>
                        {
                            battleDiv([5, 6, 7, 8, 9], players, matchType)
                        }
                    </div>
                </div>
            )
        }
    }

    return (
        <div className={"summary__list-2"}>
            {
                props.battles.map(battle => {
                    const matchType = battle.BATTLE_INFO.MATCH_TYP === 0 ? "trophyLeague" :
                        battle.BATTLE_INFO.MATCH_TYP === 2 ? "rankSolo" :
                            battle.BATTLE_INFO.MATCH_TYP === 3 ? "rankTeam" :
                                battle.BATTLE_INFO.MATCH_TYP === 6 ? "clubLeague" : "challenge";

                    return (
                        <table key={battle.BATTLE_INFO.MATCH_DT}
                               className="table__box_3">
                            <thead>
                            <tr>
                                <th>
                                    <img className={"summary__image-3"}
                                         src={`/images/game_mode_icon/${matchType}.webp`}
                                         alt={"게임 모드"}/>
                                    {
                                        battle.BATTLE_INFO.MATCH_DT.substring(0, 19)
                                    }
                                </th>
                                <th>
                                    <img className={"summary__image-3"}
                                         src={`/images/game_mode_icon/${battle.BATTLE_INFO.MAP_MD}.webp`}
                                         alt={"게임 모드"}/>
                                    {
                                        battle.BATTLE_INFO.MAP_NM
                                    }
                                </th>
                                <th>
                                    {
                                        matchResultArray[parseInt(battle.BATTLE_PLAYERS.find(player => player.PLAYER_ID === battle.MEMBER_ID)?.MATCH_RES) + 1]
                                    }
                                </th>
                                <th>
                                    {
                                        battle.BATTLE_INFO.MATCH_CHG
                                    }
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td colSpan={4}>
                                    {battleDetail(battle.BATTLE_INFO.MAP_MD_CD, battle.BATTLE_INFO.MATCH_TYP, battle.BATTLE_PLAYERS)}
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