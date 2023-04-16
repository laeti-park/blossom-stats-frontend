import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const roman = ['I', 'II', 'III'];

const ToolMemberRecords = (props) => {
    return (
        <div className={"row__box-1"}>
            <MemberRecordsTable>
                <thead>
                <tr>
                    <th>
                        <img src={`/images/game_mode/trophyLeague.webp`}
                             alt={'트로피'}/>
                        트로피
                    </th>
                    <th>
                        <img src={`/images/game_mode/rankSolo.webp`}
                             alt={'솔로'}/>
                        솔로 리그
                    </th>
                    <th>
                        <img src={`/images/game_mode/rankTeam.webp`}
                             alt={'팀'}/>
                        팀 리그
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <img src={require("../images/game_icon/trophy.webp")}
                             alt={'트로피'}/>
                        {props.trophyCurrent}개
                    </td>
                    <td>
                        <img src={`/images/league_rank/${Math.floor(props.soloCurrent / 3)}.webp`}
                             alt={'파워 리그 랭크'}/>
                        {roman[(props.soloCurrent % 3)]}
                    </td>
                    <td>
                        <img src={`/images/league_rank/${Math.floor(props.teamCurrent / 3)}.webp`}
                             alt={'파워 리그 랭크'}/>
                        {roman[(props.teamCurrent % 3)]}
                    </td>
                </tr>
                </tbody>
            </MemberRecordsTable>
            <MemberProfileButton>
                <Link to={`../member/${props.id}`}>
                    <img src={require(`../images/game_icon/account.webp`)}
                         alt={'트로피 변화량'}/>
                    <div>프로필</div>
                </Link>
            </MemberProfileButton>
        </div>
    )
}

const MemberRecordsTable = styled.table`
  padding: 10px 0 10px 0;
  width: 80%;

  & th {
    border-bottom: 1px solid #FFD1D1;
    background-color: #FF9494;
    width: 33%;
  }

  & td {
    text-align: center;
    background-color: #FFE3E1;
  }

  & > thead > tr:first-child > th:first-child {
    border-top-left-radius: 6px;
  }

  & > thead > tr:first-child > th:last-child {
    border-top-right-radius: 6px;
  }

  & img {
    height: 18px;
    margin-right: 4px;
  }
`

const MemberProfileButton = styled.button`
  width: 20%;
  height: 80px;
  font-weight: bold;
  font-size: 20px;

  & > a {
    color: white;
    text-decoration: none;
  }

  & > a > img {
    width: 32px;
    height: 32px;
    object-fit: contain;
    vertical-align: middle;
  }
`

export default ToolMemberRecords;