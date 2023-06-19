import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import Profile from '../components/tool_profile';
import MemberInfo from '../components/member_profile_info';
import DailyRecord from '../components/member_profile_battle';
import SeasonRecord from '../components/member_profile_season';
import FriendRecord from '../components/member_profile_friend';
import Brawlers from '../components/member_profile_brawler';

import '../css/profile.css';

const url = process.env.REACT_APP_BASE_URL;

const Member_Profile = () => {
    const {id} = useParams();
    const [member, setMember] = useState([]);
    const [battles, setBattles] = useState([]);
    const [records, setRecords] = useState([]);
    const [dailyCount, setDailyCount] = useState([]);
    const [seasonCount, setSeasonCount] = useState([]);
    const [today, setToday] = useState(new Date(
        new Date(new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDate()).getTime()));
    const [tomorrow, setTomorrow] = useState(new Date(
        new Date(new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDate() + 1).getTime()));
    const [season, setSeason] = useState({});
    const [friends, setFriends] = useState([]);
    const [friendsGroup, setFriendsGroup] = useState([]);
    const [friendsPoint, setFriendsPoint] = useState([]);
    const [brawlers, setBrawlers] = useState([]);

    useEffect(() => {
        axios.get(`${url}/member/${id}`, {
            params: {
                today: today,
                tomorrow: tomorrow
            },
        }).then(async (result) => {
            setMember(result.data.member);
            setBattles(result.data.battles);
            setRecords(result.data.records);
            setSeason(result.data.season);
            setDailyCount(result.data.dailyCount);
            setSeasonCount(result.data.seasonCount);
            setFriends(result.data.friends);
            setFriendsGroup(result.data.friendsGroup);
            setFriendsPoint(result.data.friendsPoint);
            setBrawlers(result.data.brawlers);
        });
    }, [today, tomorrow]);

    const getDate = (today, tomorrow) => {
        setToday(today)
        setTomorrow(tomorrow)
    }

    const startDate = new Date(season.begin_date);
    startDate.setDate(startDate.getDate() - 1);

    return (
        <div className={'container_block'}>
            <Profile id={member.MEMBER_ID}
                     name={member.MEMBER_NM}
                     profile={member.MEMBER_PROFILE}/>
            <MemberInfo trophyCurrent={member.TROPHY_CUR}
                        trophyHighest={member.TROPHY_HGH}
                        soloCurrent={member.PL_SL_CUR}
                        soloHighest={member.PL_SL_HGH}
                        teamCurrent={member.PL_TM_CUR}
                        teamHighest={member.PL_TM_HGH}
                        victoryTriple={member.VICTORY_TRP}
                        victoryDuo={member.VICTORY_DUO}
                        rank25={member.BRAWLER_RNK_25}
                        rank30={member.BRAWLER_RNK_30}
                        rank35={member.BRAWLER_RNK_35}
                        matchChange={records.matchChange}/>
            <DailyRecord id={member.id}
                         battles={battles}
                         count={dailyCount}
                         today={today}
                         getDate={getDate}
                         startDate={season.startDate}/>
            <FriendRecord friendsGroup={friendsGroup}
                          friendsPoint={friendsPoint}
                          friends={friends}/>
            <SeasonRecord records={records}
                          seasonCount={seasonCount}/>
            <Brawlers brawlers={brawlers}/>
        </div>
    )
}

export default Member_Profile;