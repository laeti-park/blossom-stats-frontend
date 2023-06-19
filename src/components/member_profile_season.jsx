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
                key={`${item.MEMBER_ID}_${item.MAP_MD}_${item.MATCH_TYP}_${item.MATCH_GRD}`}>
                <img className={'summary__image-1'}
                     src={`/images/game_mode_icon/${item.MAP_MD}.webp`}
                     alt={'게임모드'}/>
                <div>
                    <div>
                        <span>
                            <img className={'summary__image-3'}
                                 src={`/images/rank_pl/${Math.floor((item.MATCH_GRD - 1) / 3)}.webp`}
                                 alt={'파워 리그 랭크'}/>
                        </span>
                    </div>
                    <div>
                        <img className={'summary__image-3'}
                             src={require(`../images/game_icon/quests.webp`)}
                             alt={"퀘스트"}/>
                        <span>매치: {item.MATCH_CNT}회</span>
                        (
                        <span
                            style={{color: '#5AA469'}}>{item.MATCH_CNT_VIC}</span>/
                        <span
                            style={{color: '#556FB5'}}>{
                            drawCount(item.MATCH_CNT,
                                item.MATCH_CNT_VIC,
                                item.MATCH_CNT_DEF)}
                                            </span>/
                        <span
                            style={{color: '#D35D6E'}}>{item.MATCH_CNT_DEF}</span>
                        )
                    </div>
                    <div>
                        <img className={'summary__image-3'}
                             src={require(`../images/game_icon/aim.webp`)}
                             alt={"에임"}/>
                        <span>승률: {victoryRate(item.MATCH_CNT_VIC,
                            item.MATCH_CNT_DEF)}%</span>
                    </div>
                </div>
            </SummaryBox>
        )
    }

    return (
        <React.Fragment>
            <div className={'row__box-3'}>
                <h2>시즌 기록<span>({props.seasonCount.MATCH_CNT}회)</span></h2>
                <h4>
                    <span style={{color: '#5AA469'}}>승: {props.seasonCount.MATCH_CNT_VIC}회 </span>
                    <span style={{color: '#556FB5'}}>
                        무: {drawCount(props.seasonCount.MATCH_CNT, props.seasonCount.MATCH_CNT_VIC, props.seasonCount.MATCH_CNT_DEF)}회 </span>
                    <span style={{color: '#D35D6E'}}>패: {props.seasonCount.MATCH_CNT_DEF}회 </span>
                    <span>/ 승률: {victoryRate(props.seasonCount.MATCH_CNT_VIC, props.seasonCount.MATCH_CNT_DEF)}%</span>
                </h4>
            </div>
            <h3>전체 모드</h3>
            <div className={'summary__list-2'}>
                {
                    props.records.mapMode !== undefined ? modes.map(mode => {
                        if (props.records.mapMode[`${mode}`].MATCH_CNT !== undefined) {
                            return (
                                <SummaryBox key={mode}>
                                    <img className={'summary__image-1'}
                                         src={`/images/game_mode_icon/${mode}.webp`}
                                         alt={'게임모드'}/>
                                    <div>
                                        <div>
                                            <img className={'summary__image-3'}
                                                 src={require(`../images/game_icon/quests.webp`)}
                                                 alt={"퀘스트"}/>
                                            <span>매치: {props.records.mapMode[`${mode}`].MATCH_CNT}회</span>
                                            (
                                            <span
                                                style={{color: '#5AA469'}}>{props.records.mapMode[`${mode}`].MATCH_CNT_VIC}</span>/
                                            <span
                                                style={{color: '#556FB5'}}>{
                                                drawCount(props.records.mapMode[`${mode}`].MATCH_CNT,
                                                    props.records.mapMode[`${mode}`].MATCH_CNT_VIC,
                                                    props.records.mapMode[`${mode}`].MATCH_CNT_DEF)}
                                            </span>/
                                            <span
                                                style={{color: '#D35D6E'}}>{props.records.mapMode[`${mode}`].MATCH_CNT_DEF}</span>
                                            )
                                        </div>
                                        <div>
                                            <img className={'summary__image-3'}
                                                 src={require(`../images/game_icon/aim.webp`)}
                                                 alt={"에임"}/>
                                            <span>승률: {victoryRate(props.records.mapMode[`${mode}`].MATCH_CNT_VIC,
                                                props.records.mapMode[`${mode}`].MATCH_CNT_DEF)}% </span>
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
                                                key={`${record.MEMBER_ID}_${record.MAP_MD}_${record.MATCH_TYP}_${record.MATCH_GRD}`}>
                                                <img className={'summary__image-1'}
                                                     src={`/images/game_mode_icon/${record.MAP_MD}.webp`}
                                                     alt={'게임모드'}/>
                                                <div>
                                                    <div>
                                                        <span>
                                                            <img className={'summary__image-3'}
                                                                 src={`/images/rank_tlgrade/${record.MATCH_GRD}.webp`}
                                                                 alt={'트로피 리그 랭크'}/>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <img className={'summary__image-3'}
                                                             src={require(`../images/game_icon/quests.webp`)}
                                                             alt={"퀘스트"}/>
                                                        <span>매치: {record.MATCH_CNT}회</span>
                                                        (
                                                        <span
                                                            style={{color: '#5AA469'}}>{record.MATCH_CNT_VIC}</span>/
                                                        <span
                                                            style={{color: '#556FB5'}}>{
                                                            drawCount(record.MATCH_CNT,
                                                                record.MATCH_CNT_VIC,
                                                                record.MATCH_CNT_DEF)}
                                                        </span>/
                                                        <span
                                                            style={{color: '#D35D6E'}}>{record.MATCH_CNT_DEF}</span>
                                                        )

                                                    </div>
                                                    <div>
                                                        <img className={'summary__image-3'}
                                                             src={require(`../images/game_icon/aim.webp`)}
                                                             alt={"에임"}/>
                                                        <span>승률: {victoryRate(record.MATCH_CNT_VIC,
                                                            record.MATCH_CNT_DEF)}% </span>
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