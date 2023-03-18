import React from "react";

const roman = ['I', 'II', 'III'];

const ProfileInfo = (props) => {

    return (
        <React.Fragment>
            <div className={'row_box_2'}>
                <table className={'table__box_1'}>
                    <thead>
                    <tr>
                        <th colSpan={2}>
                            현재 기록
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <img src={require("../images/game_icon/trophy.webp")}
                                 alt={'트로피'}/>
                            현재 트로피
                        </td>
                        <td>
                            {props.trophyCurrent}개
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={require("../images/game_icon/trophy_plus.webp")}
                                 alt={'트로피 변봐량'}/>
                            트로피 변화량
                        </td>
                        <td>
                            {props.matchChange}개
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={`/images/game_mode/rankSolo.webp`}
                                 alt={'솔로'}/>
                            솔로 리그 현재 랭크
                        </td>
                        <td>
                            <img src={`/images/league_rank/${Math.floor(props.soloCurrent / 3)}.webp`}
                                 alt={'파워 리그 랭크'}/>
                            {roman[(props.soloCurrent % 3)]}
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <img src={`/images/game_mode/rankTeam.webp`}
                                 alt={'팀'}/>
                            팀 리그 현재 랭크
                        </td>
                        <td>
                            <img src={`/images/league_rank/${Math.floor(props.teamCurrent / 3)}.webp`}
                                 alt={'파워 리그 랭크'}/>
                            {roman[(props.teamCurrent % 3)]}
                        </td>
                    </tr>

                    </tbody>
                </table>
                <table className={'table__box_1'}>
                    <thead>
                    <tr>
                        <th colSpan={2}>
                            누적 기록
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <img src={require("../images/game_icon/trophy.webp")}
                                 alt={'트로피'}/>
                            최대 트로피
                        </td>
                        <td>
                            {props.trophyHighest}개
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={`/images/game_mode/rankTriple.webp`}
                                 alt={'3vs3모드'}/>
                            3vs3 승리
                        </td>
                        <td>
                            {props.victoryTriple}회
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={`/images/game_mode/duoShowdown.webp`}
                                 alt={'듀오'}/>
                            듀오 승리
                        </td>
                        <td>
                            {props.victoryDuo}회
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={`/images/trophy_rank/grade/3.webp`}
                                 alt={'25랭크'}/>
                            25랭크 개수
                        </td>
                        <td>
                            {props.rank25}개
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={`/images/trophy_rank/grade/4.webp`}
                                 alt={'30랭크'}/>
                            30랭크 개수
                        </td>
                        <td>
                            {props.rank30}개
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={`/images/trophy_rank/grade/5.webp`}
                                 alt={'35랭크'}/>
                            35랭크 개수
                        </td>
                        <td>
                            {props.rank35}개
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={`/images/game_mode/rankSolo.webp`}
                                 alt={'솔로'}/>
                            솔로 리그 최대 랭크
                        </td>
                        <td>
                            <img src={`/images/league_rank/${Math.floor(props.soloHighest / 3)}.webp`}
                                 alt={'솔로'}/>
                            {roman[(props.soloHighest % 3)]}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img
                                src={`/images/game_mode/rankTeam.webp`}
                                alt={'팀'}/>
                            팀 리그 최대 랭크
                        </td>
                        <td>
                            <img src={`/images/league_rank/${Math.floor(props.teamHighest / 3)}.webp`}
                                 alt={'솔로'}/>
                            {roman[(props.teamHighest % 3)]}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}

export default ProfileInfo;