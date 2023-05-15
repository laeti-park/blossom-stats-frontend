import React, {useState} from "react";
import styled from 'styled-components';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';

const modes = ['gemGrab', 'brawlBall', 'bounty', 'heist', 'hotZone', 'knockout', 'basketBrawl', 'duels', 'soloShowdown', 'duoShowdown'];

const ProfileSeason = (props) => {
    const [trophyToggle, setTrophyToggle] = useState(false);
    const [soloLeagueToggle, setSoloLeagueToggle] = useState(false);
    const [teamLeagueToggle, setTeamLeagueToggle] = useState(false);

    const arrowTrophyRotate = {
        padding: '2px',
        transform: trophyToggle ? 'rotate(90deg)' : '',
        transition: 'transform 0.3s ease',
    };
    const arrowSoloLeagueRotate = {
        padding: '2px',
        transform: soloLeagueToggle ? 'rotate(90deg)' : '',
        transition: 'transform 0.3s ease',
    };
    const arrowTeamLeagueRotate = {
        padding: '2px',
        transform: teamLeagueToggle ? 'rotate(90deg)' : '',
        transition: 'transform 0.3s ease',
    };

    const drawCount = (matchCount, victoryCount, defeatCount) => {
        return matchCount - (parseInt(victoryCount) + parseInt(defeatCount));
    }
    const victoryRate = (victoryCount, defeatCount) => {
        return Math.round(parseInt(victoryCount) / (parseInt(victoryCount) + parseInt(defeatCount)) * 100);
    }

    const powerLeague = (item) => {
        return (
            <SummaryBox
                key={`${item.member_id}_${item.map_mode}_${item.match_type}_${item.match_grade}`}>
                <img className={'summary__image-1'}
                     src={`/images/game_mode/${item.map_mode}.webp`}
                     alt={'게임모드'}/>
                <div>
                    <div>
                        <span>
                            <img className={'summary__image-3'}
                                 src={`/images/league_rank/${Math.floor((item.match_grade - 1) / 3)}.webp`}
                                 alt={'파워 리그 랭크'}/>
                        </span>
                    </div>
                    <div>
                        <img className={'summary__image-3'}
                             src={require(`../images/game_icon/quests.webp`)}
                             alt={"퀘스트"}/>
                        <span>매치: {item.match_count}회</span>
                        (
                        <span
                            style={{color: '#5AA469'}}>{item.victory_count}</span>/
                        <span
                            style={{color: '#556FB5'}}>{
                            drawCount(item.match_count,
                                item.victory_count,
                                item.defeat_count)}
                                            </span>/
                        <span
                            style={{color: '#D35D6E'}}>{item.defeat_count}</span>
                        )
                    </div>
                    <div>
                        <img className={'summary__image-3'}
                             src={require(`../images/game_icon/aim.webp`)}
                             alt={"에임"}/>
                        <span>승률: {victoryRate(item.victory_count,
                            item.defeat_count)}%</span>
                    </div>
                </div>
            </SummaryBox>
        )
    }

    return (
        <React.Fragment>
            <div className={'row__box-3'}>
                <h2>시즌 기록<span>({props.seasonCount.match_count}회)</span></h2>
                <h4>
                    <span style={{color: '#5AA469'}}>승: {props.seasonCount.victory_count}회 </span>
                    <span style={{color: '#556FB5'}}>
                        무: {drawCount(props.seasonCount.match_count, props.seasonCount.victory_count, props.seasonCount.defeat_count)}회 </span>
                    <span style={{color: '#D35D6E'}}>패: {props.seasonCount.defeat_count}회 </span>
                    <span>/ 승률: {victoryRate(props.seasonCount.victory_count, props.seasonCount.defeat_count)}%</span>
                </h4>
            </div>
            <h3>전체 모드</h3>
            <div className={'summary__list-2'}>
                {
                    props.records.mapMode !== undefined ? modes.map(mode => {
                        if (props.records.mapMode[`${mode}`].match_count !== undefined) {
                            return (
                                <SummaryBox key={mode}>
                                    <img className={'summary__image-1'}
                                         src={`/images/game_mode/${mode}.webp`}
                                         alt={'게임모드'}/>
                                    <div>
                                        <div>
                                            <img className={'summary__image-3'}
                                                 src={require(`../images/game_icon/quests.webp`)}
                                                 alt={"퀘스트"}/>
                                            <span>매치: {props.records.mapMode[`${mode}`].match_count}회</span>
                                            (
                                            <span
                                                style={{color: '#5AA469'}}>{props.records.mapMode[`${mode}`].victory_count}</span>/
                                            <span
                                                style={{color: '#556FB5'}}>{
                                                drawCount(props.records.mapMode[`${mode}`].match_count,
                                                    props.records.mapMode[`${mode}`].victory_count,
                                                    props.records.mapMode[`${mode}`].defeat_count)}
                                            </span>/
                                            <span
                                                style={{color: '#D35D6E'}}>{props.records.mapMode[`${mode}`].defeat_count}</span>
                                            )
                                        </div>
                                        <div>
                                            <img className={'summary__image-3'}
                                                 src={require(`../images/game_icon/aim.webp`)}
                                                 alt={"에임"}/>
                                            <span>승률: {victoryRate(props.records.mapMode[`${mode}`].victory_count,
                                                props.records.mapMode[`${mode}`].defeat_count)}% </span>
                                        </div>
                                    </div>
                                </SummaryBox>
                            )
                        } else {
                            return null;
                        }
                    }) : null
                }
            </div>
            {
                props.records.trophyLeague !== undefined &&
                props.records.trophyLeague.length !== 0 ?
                    <React.Fragment>

                        <h3 onClick={() => setTrophyToggle(!trophyToggle)}>
                            <FontAwesomeIcon icon={faAngleRight} style={arrowTrophyRotate}/>
                            <span> 트로피 리그</span>
                        </h3>
                        {trophyToggle && (
                            <div className={'summary__list-2'}>
                                {
                                    props.records.trophyLeague.map(record => {
                                        return (
                                            <SummaryBox
                                                key={`${record.member_id}_${record.map_mode}_${record.match_type}_${record.match_grade}`}>
                                                <img className={'summary__image-1'}
                                                     src={`/images/game_mode/${record.map_mode}.webp`}
                                                     alt={'게임모드'}/>
                                                <div>
                                                    <div>
                                                        <span>
                                                            <img className={'summary__image-3'}
                                                                 src={`/images/trophy_rank/grade/${record.match_grade}.webp`}
                                                                 alt={'트로피 리그 랭크'}/>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <img className={'summary__image-3'}
                                                             src={require(`../images/game_icon/quests.webp`)}
                                                             alt={"퀘스트"}/>
                                                        <span>매치: {record.match_count}회</span>
                                                        (
                                                        <span
                                                            style={{color: '#5AA469'}}>{record.victory_count}</span>/
                                                        <span
                                                            style={{color: '#556FB5'}}>{
                                                            drawCount(record.match_count,
                                                                record.victory_count,
                                                                record.defeat_count)}
                                                        </span>/
                                                        <span
                                                            style={{color: '#D35D6E'}}>{record.defeat_count}</span>
                                                        )

                                                    </div>
                                                    <div>
                                                        <img className={'summary__image-3'}
                                                             src={require(`../images/game_icon/aim.webp`)}
                                                             alt={"에임"}/>
                                                        <span>승률: {victoryRate(record.victory_count,
                                                            record.defeat_count)}% </span>
                                                    </div>
                                                </div>
                                            </SummaryBox>
                                        )
                                    })
                                }
                            </div>
                        )
                        }
                    </React.Fragment> : null
            }
            {
                props.records.soloPowerLeague !== undefined &&
                props.records.soloPowerLeague.length !== 0 ?
                    <React.Fragment>
                        <h3 onClick={() => setSoloLeagueToggle(!soloLeagueToggle)}>
                            <FontAwesomeIcon icon={faAngleRight} style={arrowSoloLeagueRotate}/>
                            <span> 솔로 파워 리그</span>
                        </h3>
                        {soloLeagueToggle &&
                            (
                                <div className={'summary__list-2'}>
                                    {
                                        props.records.soloPowerLeague.map(item => {
                                            return powerLeague(item)
                                        })
                                    }
                                </div>
                            )
                        }
                    </React.Fragment> : null
            }
            {
                props.records.teamPowerLeague !== undefined &&
                props.records.teamPowerLeague.length !== 0 ?
                    <React.Fragment>
                        <h3 onClick={() => setTeamLeagueToggle(!teamLeagueToggle)}>
                            <FontAwesomeIcon icon={faAngleRight} style={arrowTeamLeagueRotate}/>
                            <span> 팀 파워 리그</span>
                        </h3>
                        {teamLeagueToggle &&
                            (
                                <div className={'summary__list-2'}>
                                    {
                                        props.records.teamPowerLeague.map(item => {
                                            return powerLeague(item)
                                        })
                                    }
                                </div>
                            )
                        }
                    </React.Fragment> : null
            }
        </React.Fragment>
    )
}

const SummaryBox = styled.div`
  display: flex;
  width: 48.8%;
  height: 80px;
  border: 1px solid #39375B;
  border-radius: 0.25rem;
  justify-content: left;
  align-items: center;
  padding-left: 6px;
  background-color: #F6C6EA;
  font-size: 1rem;
`;

export default ProfileSeason;