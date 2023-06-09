import React, {useEffect, useState} from "react";
import axios from "axios";

import '../css/record.css';
import Profile from "../components/tool_profile";
import {useParams} from "react-router-dom";
import Battles from "../components/battle_records_list";
import Calendar from "../components/tool_calendar";
import MemberRecords from "../components/tool_member_records";

const url = process.env.REACT_APP_BASE_URL;

const BattleRecords = () => {
    const {id} = useParams();
    const [member, setMember] = useState({});
    const [battles, setBattles] = useState([]);
    const [dailyCount, setDailyCount] = useState([]);
    const [season, setSeason] = useState({});
    const [today, setToday] = useState(new Date(
        new Date(new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDate()).getTime()));
    const [tomorrow, setTomorrow] = useState(new Date(
        new Date(new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDate() + 1).getTime()));

    useEffect(() => {
        axios.get(`${url}/battle/${id}`, {
            params: {
                today: today,
                tomorrow: tomorrow
            },
        }).then(async (result) => {
            setMember(result.data.member);
            setBattles(result.data.battles);
            setSeason(result.data.season);
        });
    }, [today, tomorrow]);


    const getDate = (today, tomorrow) => {
        setToday(today)
        setTomorrow(tomorrow)
    }

    const startDate = new Date(season.SEASON_BGN_DT);
    startDate.setDate(startDate.getDate() - 1);

    return (
        <div className={'container_block'}>
            <Profile id={member.MEMBER_ID}
                     name={member.MEMBER_NM}
                     profile={member.MEMBER_PROFILE}/>
            <MemberRecords id={id}
                           trophyCurrent={member.TROPHY_CUR}
                           soloCurrent={member.PL_SL_CUR}
                           teamCurrent={member.PL_TM_CUR}/>
            <Calendar today={today}
                      startDate={startDate}
                      getDate={getDate}/>
            <Battles battles={battles}/>
        </div>
    );
}

export default BattleRecords;