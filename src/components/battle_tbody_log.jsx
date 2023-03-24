import React from "react";

const matchResultArray = ['승', '무', '패'];
const roman = ['I', 'II', 'III'];

const battleLog = ({member, maps}) => {

    const getMapName = (id) => {
        const item = maps.find((element) => {
            return element.id === id;
        })

        if (item !== undefined) {
            return item.name;
        } else {
            return id;
        }
    }

    const getGameType = (type, player) => {
        if (['2', '3'].includes(type)) {
            return (
                <React.Fragment key={`${player.player_id}_${player.match_type}`}>
                    <img className={'sub_row__image'}
                         src={`/images/league_rank/${Math.floor((player.brawler_trophy - 1) / 3)}.webp`}
                         alt={'파워 리그 랭크'}/>
                    {roman[((player.brawler_trophy - 1) % 3)]}
                </React.Fragment>)
        } else if (type === 6) {
            return player.brawler_trophy;
        } else {
            return (
                <React.Fragment key={`${player.player_id}_${player.match_type}`}>
                    <img className={'record__content__small_image'}
                         src={'/images/game_mode/trophyLeague.webp'}
                         alt={'트로피 리그'}/>
                    {player.brawler_trophy}
                </React.Fragment>
            )
        }
    }

    const setTeams = (battle) => {
        if (['0', '3'].includes(battle.info.match_mode)) {
            const teams = {
                team0: [],
                team1: []
            }

            return (
                <div className={'record__content__triple_box'}>
                    {
                        battle.players.map(player => {
                            teams[`team${player.player_team}`].push(setPlayer(battle.info, player));
                        })
                    }
                    {React.createElement("div", {
                        className: "triple__team1",
                        key: `${battle.info.id}_team1`
                    }, teams.team0)}
                    {React.createElement("div", {
                        className: "triple__team2",
                        key: `${battle.info.id}_team2`
                    }, teams.team1)}
                </div>
            )
        } else {
            if (battle.info.match_mode === '2') {
                const teams = {
                    team0: [],
                    team1: [],
                    team2: [],
                    team3: [],
                    team4: []
                }

                return (
                    <div className={'record__content__duo_box'}>
                        {
                            battle.players.map(player => {
                                teams[`team${player.player_team}`].push(setPlayer(battle.info, player));
                            })
                        }
                        {React.createElement("div", {
                            className: "duo__team1",
                            key: `${battle.info.id}_team1`
                        }, teams.team0)}
                        {React.createElement("div", {
                            className: "duo__team2",
                            key: `${battle.info.id}_team2`
                        }, teams.team1)}
                        {React.createElement("div", {
                            className: "duo__team3",
                            key: `${battle.info.id}_team3`
                        }, teams.team2)}
                        {React.createElement("div", {
                            className: "duo__team4",
                            key: `${battle.info.id}_team4`
                        }, teams.team3)}
                        {React.createElement("div", {
                            className: "duo__team5",
                            key: `${battle.info.id}_team5`
                        }, teams.team4)}
                    </div>
                )
            } else {
                const teams = {
                    team0: [],
                    team1: [],
                    team2: [],
                    team3: [],
                    team4: [],
                    team5: [],
                    team6: [],
                    team7: [],
                    team8: [],
                    team9: []
                }

                return (
                    <div className={'record__content__duo_box'}>
                        {
                            battle.players.map(player => {
                                teams[`team${player.player_team}`].push(setPlayer(battle.info, player));
                            })
                        }
                        {React.createElement("div", {
                            className: "solo__team1",
                            key: `${battle.info.id}_team1`
                        }, teams.team0)}
                        {React.createElement("div", {
                            className: "solo__team2",
                            key: `${battle.info.id}_team2`
                        }, teams.team1)}
                        {React.createElement("div", {
                            className: "solo__team3",
                            key: `${battle.info.id}_team3`
                        }, teams.team2)}
                        {React.createElement("div", {
                            className: "solo__team4",
                            key: `${battle.info.id}_team4`
                        }, teams.team3)}
                        {React.createElement("div", {
                            className: "solo__team5",
                            key: `${battle.info.id}_team5`
                        }, teams.team4)}
                        {React.createElement("div", {
                            className: "solo__team6",
                            key: `${battle.info.id}_team6`
                        }, teams.team5)}
                        {React.createElement("div", {
                            className: "solo__team7",
                            key: `${battle.info.id}_team7`
                        }, teams.team6)}
                        {React.createElement("div", {
                            className: "solo__team8",
                            key: `${battle.info.id}_team8`
                        }, teams.team7)}
                        {React.createElement("div", {
                            className: "solo__team9",
                            key: `${battle.info.id}_team9`
                        }, teams.team8)}
                        {React.createElement("div", {
                            className: "solo__team0",
                            key: `${battle.info.id}_team0`
                        }, teams.team9)}
                    </div>
                )
            }
        }
    }

    const setPlayer = (info, player) => {
        return (
            <div className={'record__content__player'}
                 key={`${info.id}_${player.player_id}_${player.brawler_id}`}>
                <div>
                    <img className={'record__content__image'}
                         src={`/images/brawler_pin/${player.brawler_id}.webp`}
                         alt={'브롤러 핀'}/>
                    <span className={'record__content__level'}>
                        Lv. {player.brawler_power}
                    </span>
                    <span>
                        {getGameType(info.match_type, player)}
                    </span>
                </div>
                <div className={'record__content__name'}>
                    {player.player_name}
                </div>
            </div>
        )
    }

    return (
        <div className={'sub_row__battle_log__list'}>
            {
                member.battles.map(battle => {
                    const matchResult = battle.players.find(element => {
                        return element.player_id === member.id;
                    }).match_result;
                    const matchChange = battle.info.match_mode !== '0' ?
                        battle.info.match_change :
                        battle.players.filter(element => element.player_id === member.id)
                            .map(element => element.raw_change).reduce((trophy, total) => trophy + total);


                    return (
                        <table key={battle.info.id + battle.info.member_id}
                               className={'record__box'}>
                            <thead>
                            <tr>
                                <th>
                                    {battle.info.id}
                                </th>
                                <th>
                                    {getMapName(battle.info.map_id)}
                                </th>
                                <th>
                                    {matchResultArray[parseInt(matchResult) + 1]}
                                </th>
                                <th>
                                    {matchChange}
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className={'record__content'}>
                                <td colSpan='4'>
                                    {setTeams(battle)}
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

export default battleLog;