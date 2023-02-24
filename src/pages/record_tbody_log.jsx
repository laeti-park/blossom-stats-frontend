import React from "react";

const result = ['승', '무', '패'];
const roman = ['I', 'II', 'III'];

const battleLog = ({items, maps}) => {

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

    const getMapMode = (id) => {
        const item = maps.find((element) => {
            return element.id === id;
        })

        if (item !== undefined) {
            return item.mode;
        } else {
            return 0;
        }
    }

    const getGameType = (type, item) => {
        if (['2', '3'].includes(type)) {
            return (
                <React.Fragment key={items.id}>
                    <img className={'sub_row__image'}
                         src={`images/league_rank/${Math.floor((item.trophy - 1) / 3)}.webp`}
                         alt={'파워 리그 랭크'}/>
                    {roman[((item.trophy - 1) % 3)]}
                </React.Fragment>)
        } else if (type === 6) {
            return item.trophy
        } else {
            return (
                <React.Fragment key={items.id}>
                    <img className={'record__content__small_image'}
                         src={'/images/game_mode/trophyLeague.webp'}
                         alt={'트로피 리그'}/>
                    {item.trophy}
                </React.Fragment>
            )
        }
    }

    const setTeams = (players, battle) => {
        if (players.length === 6) {
            const teams = {
                team0: [],
                team1: []
            }

            return (
                <div className={'record__content__triple_box'}>
                    {
                        players.map(player => {
                            teams[`team${player.team}`].push(setPlayer(player, battle));
                        })
                    }
                    {React.createElement("div", {className: "triple__team1", key: `${battle.id}_team1`}, teams.team0)}
                    {React.createElement("div", {className: "triple__team2", key: `${battle.id}_team2`}, teams.team1)}
                </div>
            )
        } else if (players.length === 10) {
            if (['듀오 쇼다운', 'duoShowdown'].includes(getMapMode(battle.map_id))) {
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
                            players.map(player => {
                                teams[`team${player.team}`].push(setPlayer(player, battle));
                            })
                        }
                        {React.createElement("div", {className: "duo__team1", key: `${battle.id}_team1`}, teams.team0)}
                        {React.createElement("div", {className: "duo__team2", key: `${battle.id}_team2`}, teams.team1)}
                        {React.createElement("div", {className: "duo__team3", key: `${battle.id}_team3`}, teams.team2)}
                        {React.createElement("div", {className: "duo__team4", key: `${battle.id}_team4`}, teams.team3)}
                        {React.createElement("div", {className: "duo__team5", key: `${battle.id}_team5`}, teams.team4)}
                    </div>
                )
            } else if (['솔로 쇼다운', 'soloShowdown'].includes(getMapMode(battle.map_id))) {
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
                            players.map(player => {
                                teams[`team${player.team}`].push(setPlayer(player, battle));
                            })
                        }
                        {React.createElement("div", {className: "solo__team1", key: `${battle.id}_team1`}, teams.team0)}
                        {React.createElement("div", {className: "solo__team2", key: `${battle.id}_team2`}, teams.team1)}
                        {React.createElement("div", {className: "solo__team3", key: `${battle.id}_team3`}, teams.team2)}
                        {React.createElement("div", {className: "solo__team4", key: `${battle.id}_team4`}, teams.team3)}
                        {React.createElement("div", {className: "solo__team5", key: `${battle.id}_team5`}, teams.team4)}
                        {React.createElement("div", {className: "solo__team6", key: `${battle.id}_team6`}, teams.team5)}
                        {React.createElement("div", {className: "solo__team7", key: `${battle.id}_team7`}, teams.team6)}
                        {React.createElement("div", {className: "solo__team8", key: `${battle.id}_team8`}, teams.team7)}
                        {React.createElement("div", {className: "solo__team9", key: `${battle.id}_team9`}, teams.team8)}
                        {React.createElement("div", {className: "solo__team0", key: `${battle.id}_team0`}, teams.team9)}
                    </div>
                )
            }
        }
    }

    const setPlayer = (player, battle) => {
        return (
            <div className={'record__content__player'}
                 key={`${battle.id}_${player.tag}`}>
                <div>
                    <img className={'record__content__image'}
                         src={`/images/brawler_pin/${player.brawler}.webp`}
                         alt={'브롤러 핀'}/>
                    <span className={'record__content__level'}>
                        Lv. {player.power}
                    </span>
                    <span>
                        {getGameType(battle.type, player)}
                    </span>
                </div>
                <div className={'record__content__name'}>
                    {player.name}
                </div>
            </div>
        )
    }

    return (
        <div className={'sub_row__battle_log__list'}>
            {
                items.battles.map(item => {
                    const game_result = item.battle.find(element => {
                        return element.tag === items.id ? element.tag : null
                    });

                    return (
                        <table key={item.id}
                               className={'record__box'}>
                            <thead>
                            <tr>
                                <th>
                                    {item.id}
                                </th>
                                <th>
                                    {getMapName(item.map_id)}
                                </th>
                                <th>
                                    {result[game_result.result]}
                                </th>
                                <th>
                                    {item.trophy_change}
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className={'record__content'}>
                                <td colSpan='4'>
                                    {setTeams(item.battle, item)}
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