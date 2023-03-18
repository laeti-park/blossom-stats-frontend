import React from "react";
import styled from 'styled-components';

const ProfileFriend = (props) => {
    const drawCount = (matchCount, victoryCount, defeatCount) => {
        return matchCount - (parseInt(victoryCount) + parseInt(defeatCount));
    }

    return (
        <React.Fragment>
            <div className={'row_box_3'}>
                <h2>친밀도<span>({props.friends.friendTotalPoint}점)</span></h2>
                <div className={'summary_list_2'}>
                    {
                        props.friends.friendsList !== undefined ?
                            props.friends.friendsList.map(friend => {
                                return (
                                    <SummaryBox
                                        key={`${friend.member_id}_${friend.friend_id}_${friend.map_mode}_${friend.match_type}_${friend.match_grade}`}
                                        href={`./${friend.friend_id.replace('#', '')}`}>
                                        <div>
                                            <div>
                                                <img className={'summary_image_3'}
                                                     src={`/images/game_mode/${friend.map_mode}.webp`}
                                                     alt={'게임모드'}/>
                                                <span>{friend.friend_name}({friend.point}점)</span>
                                            </div>
                                            <div>
                                                <span>
                                                    {
                                                        friend.match_type === '0' ?
                                                            <img className={'summary_image_3'}
                                                                 src={`/images/game_mode/trophyLeague.webp`}
                                                                 alt={'게임방식'}/> : friend.match_type === '2' ?
                                                                <img className={'summary_image_3'}
                                                                     src={`/images/game_mode/rankSolo.webp`}
                                                                     alt={'게임방식'}/> : friend.match_type === '3' ?
                                                                    <img className={'summary_image_3'}
                                                                         src={`/images/game_mode/rankTeam.webp`}
                                                                         alt={'게임방식'}/> : friend.match_type === '4' ?
                                                                        <img className={'summary_image_3'}
                                                                             src={`/images/game_mode/challenge.webp`}
                                                                             alt={'게임방식'}/> : friend.match_type === '5' ?
                                                                            <img className={'summary_image_3'}
                                                                                 src={`/images/game_mode/challenge.webp`}
                                                                                 alt={'게임방식'}/> :
                                                                            <img className={'summary_image_3'}
                                                                                 src={`/images/game_mode/clubLeague.webp`}
                                                                                 alt={'게임방식'}/>
                                                    }
                                                </span>
                                                <span>
                                                     매치: {friend.match_count}회
                                                    <span style={{color: '#5AA469'}}> ({friend.victory_count}</span>/
                                                    <span
                                                        style={{color: '#556FB5'}}>{drawCount(friend.match_count, friend.victory_count, friend.defeat_count)}</span>/
                                                    <span style={{color: '#D35D6E'}}>{friend.defeat_count})</span>
                                                </span>
                                            </div>
                                            <div>
                                                <span>
                                                    {
                                                        friend.match_type === '0' ?
                                                            <img className={'summary_image_3'}
                                                                 src={`/images/trophy_rank/grade/${friend.match_grade}.webp`}
                                                                 alt={'점수구간'}/> : ['2', '3'].includes(friend.match_type) ?
                                                                <img className={'summary_image_3'}
                                                                     src={`/images/league_rank/${Math.floor((friend.match_grade - 1) / 3)}.webp`}
                                                                     alt={'점수구간'}/> : friend.match_type === '6' ?
                                                                    <img className={'summary_image_3'}
                                                                         src={`/images/game_mode/clubLeague.webp`}
                                                                         alt={'점수구간'}/> :
                                                                    <img className={'summary_image_3'}
                                                                         src={`/images/game_mode/challenge.webp`}
                                                                         alt={'점수구간'}/>
                                                    }
                                                </span>
                                                <span>
                                                    승률: {Math.round(friend.victory_count / (friend.victory_count + friend.defeat_count) * 100)}%
                                                </span>
                                            </div>
                                        </div>
                                    </SummaryBox>
                                )
                            }) : null
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

const SummaryBox = styled.a`
  display: flex;
  width: 48.8%;
  height: 76px;
  border: 1px solid #39375B;
  border-radius: 0.25rem;
  align-items: center;
  padding-left: 6px;
  font-size: 0.84rem;
  color: black;
  text-decoration: none;
  background-color: #F6C6EA;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover {
    background-color: #FF8787;
  }

  @media screen and (min-width: 576px) {
    width: 100%;
    height: 40px;
    font-size: 1rem;

    & > div {
      display: flex;
      gap: 10px;
    }
  }
`;

export default ProfileFriend;