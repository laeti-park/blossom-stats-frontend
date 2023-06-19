import React, {useState} from "react";
import styled from 'styled-components';

const ProfileFriendItem = (props) => {
    const [hover, setHover] = useState(false);
    const drawCount = (matchCount, victoryCount, defeatCount) => {
        return matchCount - (parseInt(victoryCount) + parseInt(defeatCount));
    }

    const getFriendInfo = (friendInfo) => {
        return (
            <React.Fragment>
                {
                    friendInfo.map(info => {
                        return (
                            <div
                                key={`${info.MEMBER_ID}_${info.FRIEND_ID}_${info.MAP_MD}_${info.MATCH_TYP}_${info.MATCH_GRD}`}>
                                <div>
                                    <span>
                                        {
                                            info.MATCH_TYP === 0 ?
                                                <img className={'summary__image-3'}
                                                     src={`/images/game_mode_icon/trophyLeague.webp`}
                                                     alt={'게임방식'}/> : info.MATCH_TYP === 2 ?
                                                    <img className={'summary__image-3'}
                                                         src={`/images/game_mode_icon/rankSolo.webp`}
                                                         alt={'게임방식'}/> : info.MATCH_TYP === 3 ?
                                                        <img className={'summary__image-3'}
                                                             src={`/images/game_mode_icon/rankTeam.webp`}
                                                             alt={'게임방식'}/> : info.MATCH_TYP === '4' ?
                                                            <img className={'summary__image-3'}
                                                                 src={`/images/game_mode_icon/challenge.webp`}
                                                                 alt={'게임방식'}/> : info.MATCH_TYP === '5' ?
                                                                <img className={'summary__image-3'}
                                                                     src={`/images/game_mode_icon/challenge.webp`}
                                                                     alt={'게임방식'}/> :
                                                                <img className={'summary__image-3'}
                                                                     src={`/images/game_mode_icon/clubLeague.webp`}
                                                                     alt={'게임방식'}/>
                                        }
                                    </span>
                                    <span>
                                         {info.MATCH_CNT}회
                                        <span style={{color: '#5AA469'}}> ({info.MATCH_CNT_VIC}</span>/
                                        <span
                                            style={{color: '#556FB5'}}>{drawCount(info.MATCH_CNT, info.MATCH_CNT_VIC, info.MATCH_CNT_DEF)}</span>/
                                        <span style={{color: '#D35D6E'}}>{info.MATCH_CNT_DEF})</span>
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        {
                                            info.MATCH_TYP === 0 ?
                                                <img className={'summary__image-3'}
                                                     src={`/images/rank_tlgrade/${info.MATCH_GRD}.webp`}
                                                     alt={'트로피 리그 랭크'}/> : [2, 3].includes(info.MATCH_TYP) ?
                                                    <img className={'summary__image-3'}
                                                         src={`/images/rank_pl/${Math.floor((info.MATCH_GRD - 1) / 3)}.webp`}
                                                         alt={'파워 리그 랭크'}/> : info.MATCH_TYP === 6 ?
                                                        <img className={'summary__image-3'}
                                                             src={`/images/game_mode_icon/clubLeague.webp`}
                                                             alt={'클럽 리그'}/> :
                                                        <img className={'summary__image-3'}
                                                             src={`/images/game_mode_icon/challenge.webp`}
                                                             alt={'챌린지'}/>
                                        }
                                    </span>
                                    <span>
                                        승률: {
                                        info.MATCH_CNT_VIC > 0 ?
                                            Math.round(info.MATCH_CNT_VIC / (parseInt(info.MATCH_CNT_VIC) + parseInt(info.MATCH_CNT_DEF)) * 100) : 0}%
                                    </span>
                                </div>
                            </div>
                        )
                    })
                }
            </React.Fragment>
        )
    }

    return (
        <SummaryBox
            key={`${props.friend.MEMBER_ID}_${props.friend.FRIEND_ID}`}
            href={`./${props.friend.FRIEND_ID.replace('#', '')}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            hover={hover}>
            <div className={"friend_summary"}>
                <div>
                    <img className={'summary__image-3'}
                         src={require(`../images/game_icon/friendly.webp`)}
                         alt={"친밀도"}/>
                    <span>{props.friend.FRIEND_NM}({Math.round(props.friend.FRIEND_PT * 100) / 100.0}점)</span>
                </div>
                <div>
                    <img className={'summary__image-3'}
                         src={require(`../images/game_icon/quests.webp`)}
                         alt={"퀘스트"}/>
                    <span>
                         매치: {props.friend.MATCH_CNT}회
                        <span style={{color: '#5AA469'}}> ({props.friend.MATCH_CNT_VIC}</span>/
                        <span
                            style={{color: '#556FB5'}}>{drawCount(props.friend.MATCH_CNT, props.friend.MATCH_CNT_VIC, props.friend.MATCH_CNT_DEF)}</span>/
                        <span style={{color: '#D35D6E'}}>{props.friend.MATCH_CNT_DEF})</span>
                    </span>
                </div>
                <div>
                    <img className={'summary__image-3'}
                         src={require(`../images/game_icon/aim.webp`)}
                         alt={"에임"}/>
                    <span>
                        승률: {Math.round(props.friend.MATCH_CNT_VIC / (parseInt(props.friend.MATCH_CNT_VIC) + parseInt(props.friend.MATCH_CNT_DEF)) * 100)}%
                    </span>
                </div>
            </div>
            <div className={"friend_detail"}>
                {getFriendInfo(props.friendInfo)}
            </div>
        </SummaryBox>
    )
};

const SummaryBox = styled.a`
  width: 100%;
  align-items: center;
  font-size: 1rem;
  color: black;
  text-decoration: none;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  .friend_summary {
    padding: 6px;
    border: 1px solid #39375B;
    border-radius: 0.25rem;
    background-color: #F6C6EA;
  }

  &:hover {
    background-color: #FF8787;
  }

  .friend_detail {
    display: none;
  }

  @media screen and (min-width: 576px) {
    width: 49%;

    & > div {
      display: block;
    }

    .friend_detail {
      display: block;
      max-height: ${props => (props.hover ? '' : 0)};
      transform: scaleY(${props => (props.hover ? 1 : 0)});
      transform-origin: top;
      transition: transform 0.1s ease;
      padding: ${props => (props.hover ? '10px' : 0)};
    }

    .friend_detail > div {
      width: 100%;
      display: flex;
      gap: 4px;
    }

    .friend_detail > div > div {
      width: 50%;
    }
  }
`;

export default ProfileFriendItem;