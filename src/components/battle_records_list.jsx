import React from "react";
import styled from "styled-components";

const matchResultArray = ['승', '무', '패'];
const roman = ['I', 'II', 'III'];

const Battles = (props) => {
    console.log(props.battles);

    return (
        <div className={'summary_list_2'}>
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
                                    <div className={'battle_detail'}>
                                        <div>
                                        </div>
                                        <div>
                                        </div>
                                    </div>
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