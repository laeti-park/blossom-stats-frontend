import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import Profile from '../components/tool_profile';
import MemberInfo from '../components/member_profile_info';
import DailyRecord from '../components/member_profile_daily';
import SeasonRecord from '../components/member_profile_season';
import FriendRecord from '../components/member_profile_friend';
import Brawlers from '../components/member_profile_brawler';

import '../css/profile.css';

const url = process.env.REACT_APP_BASE_URL;
const diffKST = 9 * 60 * 60 * 1000;

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
            new Date().getDate()).getTime() + diffKST));
    const [tomorrow, setTomorrow] = useState(new Date(
        new Date(new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDate() + 1).getTime() + diffKST));
    const [season, setSeason] = useState({});
    const [friends, setFriends] = useState([]);
    const [brawlers, setBrawlers] = useState([]);

    useEffect(() => {
        axios.get(`${url}/member/${id}`, {
            params: {
                today: today,
                tomorrow: tomorrow
            },
        })
            .then(async (result) => {
                setMember(result.data.member);
                setBattles(result.data.battles);
                setRecords(result.data.records);
                setSeason(result.data.season);
                setDailyCount(result.data.dailyCount);
                setSeasonCount(result.data.seasonCount);
                setFriends(result.data.friends);
                setBrawlers(result.data.brawlers);
            });
    }, [today, tomorrow]);

    const getDate = (today, tomorrow) => {
        setToday(today)
        setTomorrow(tomorrow)
    }

    const startDate = new Date(season.start_date);
    startDate.setDate(startDate.getDate() - 1);

    return (
        <div className={'container_block'}>
            <Profile id={member.id}
                        name={member.name}
                        profile={member.profile_picture}/>
            <MemberInfo trophyCurrent={member.trophy_current}
                        trophyHighest={member.trophy_highest}
                        soloCurrent={member.league_solo_current}
                        soloHighest={member.league_solo_highest}
                        teamCurrent={member.league_team_current}
                        teamHighest={member.league_team_highest}
                        victoryTriple={member.victory_triple}
                        victoryDuo={member.victory_duo}
                        rank25={member.rank_25}
                        rank30={member.rank_30}
                        rank35={member.rank_35}
                        matchChange={records.matchChange}/>
            <DailyRecord id={member.id}
                         battles={battles}
                         count={dailyCount}
                         today={today}
                         getDate={getDate}
                         startDate={season.startDate}/>
            <FriendRecord friends={friends}/>
            <SeasonRecord records={records}
                          seasonCount={seasonCount}/>
            <Brawlers brawlers={brawlers}/>
        </div>
    )
}

export default Member_Profile;