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
                                key={`${info.member_id}_${info.friend_id}_${info.map_mode}_${info.match_type}_${info.match_grade}`}>
                                <div>
                                    <span>
                                        {
                                            info.match_type === '0' ?
                                                <img className={'summary__image-3'}
                                                     src={`/images/game_mode/trophyLeague.webp`}
                                                     alt={'게임방식'}/> : info.match_type === '2' ?
                                                    <img className={'summary__image-3'}
                                                         src={`/images/game_mode/rankSolo.webp`}
                                                         alt={'게임방식'}/> : info.match_type === '3' ?
                                                        <img className={'summary__image-3'}
                                                             src={`/images/game_mode/rankTeam.webp`}
                                                             alt={'게임방식'}/> : info.match_type === '4' ?
                                                            <img className={'summary__image-3'}
                                                                 src={`/images/game_mode/challenge.webp`}
                                                                 alt={'게임방식'}/> : info.match_type === '5' ?
                                                                <img className={'summary__image-3'}
                                                                     src={`/images/game_mode/challenge.webp`}
                                                                     alt={'게임방식'}/> :
                                                                <img className={'summary__image-3'}
                                                                     src={`/images/game_mode/clubLeague.webp`}
                                                                     alt={'게임방식'}/>
                                        }
                                    </span>
                                    <span>
                                         {info.match_count}회
                                        <span style={{color: '#5AA469'}}> ({info.victory_count}</span>/
                                        <span
                                            style={{color: '#556FB5'}}>{drawCount(info.match_count, info.victory_count, info.defeat_count)}</span>/
                                        <span style={{color: '#D35D6E'}}>{info.defeat_count})</span>
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        {
                                            info.match_type === '0' ?
                                                <img className={'summary__image-3'}
                                                     src={`/images/trophy_rank/grade/${info.match_grade}.webp`}
                                                     alt={'트로피 리그 랭크'}/> : ['2', '3'].includes(info.match_type) ?
                                                    <img className={'summary__image-3'}
                                                         src={`/images/league_rank/${Math.floor((info.match_grade - 1) / 3)}.webp`}
                                                         alt={'파워 리그 랭크'}/> : info.match_type === '6' ?
                                                        <img className={'summary__image-3'}
                                                             src={`/images/game_mode/clubLeague.webp`}
                                                             alt={'클럽 리그'}/> :
                                                        <img className={'summary__image-3'}
                                                             src={`/images/game_mode/challenge.webp`}
                                                             alt={'챌린지'}/>
                                        }
                                    </span>
                                    <span>
                                        승률: {
                                        info.victory_count > 0 ?
                                        Math.round(info.victory_count / (parseInt(info.victory_count) + parseInt(info.defeat_count)) * 100) : 0}%
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
            key={`${props.friend.member_id}_${props.friend.friend_id}`}
            href={`./${props.friend.friend_id.replace('#', '')}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            hover={hover}>
            <div className={"friend_summary"}>
                <div>
                    <img className={'summary__image-3'}
                         src={require(`../images/game_icon/friendly.webp`)}
                         alt={"친밀도"}/>
                    <span>{props.friend.friend_name}({props.friend.friend_point.toFixed(2)}점)</span>
                </div>
                <div>
                    <img className={'summary__image-3'}
                         src={require(`../images/game_icon/quests.webp`)}
                         alt={"퀘스트"}/>
                    <span>
                         매치: {props.friend.match_count}회
                        <span style={{color: '#5AA469'}}> ({props.friend.victory_count}</span>/
                        <span
                            style={{color: '#556FB5'}}>{drawCount(props.friend.match_count, props.friend.victory_count, props.friend.defeat_count)}</span>/
                        <span style={{color: '#D35D6E'}}>{props.friend.defeat_count})</span>
                    </span>
                </div>
                <div>
                    <img className={'summary__image-3'}
                         src={require(`../images/game_icon/aim.webp`)}
                         alt={"에임"}/>
                    <span>
                        승률: {Math.round(props.friend.victory_count / (parseInt(props.friend.victory_count) + parseInt(props.friend.defeat_count)) * 100)}%
                    </span>
                </div>
            </div>
            <div className={"friend_detail"}>
                {getFriendInfo(props.friendInfo)}
            </div>
        </SummaryBox>
    )
}

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