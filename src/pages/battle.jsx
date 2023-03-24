import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import DailyTable from '../components/battle_tbody';
import GameMenu from '../components/tool_match_menu';
import Calendar from '../components/tool_calendar';

import '../css/record.css';

const url = process.env.REACT_APP_BASE_URL;
const diffKST = 9 * 60 * 60 * 1000;
const typeList = ['all', 'trophyLeague', 'powerLeague', 'clubLeague', 'challenge'];
const modeList = ['gemGrab', 'brawlBall', 'bounty', 'heist', 'hotZone', 'knockout', 'dual', 'soloShowdown', 'duoShowdown']

export default () => {
    const [today, setToday] = useState(new Date(
        new Date(new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDate()).getTime() + diffKST));
    const [tomorrow, setTomorrow] = useState(new Date(
        new Date(new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDate() + 1).getTime() + diffKST));
    const battleLog = useRef([]);
    const [matchMode, setMatchMode] = useState('all');
    const [matchType, setMatchType] = useState('all');
    const [season, setSeason] = useState({});
    const [maps, setMaps] = useState([]);

    useEffect(() => {
        axios.get(`${url}/battle`, {
            params: {
                today: today,
                tomorrow: tomorrow,
                type: matchType,
                mode: matchMode
            },
        }).then(async (result) => {
            await setSeason(result.data.season);
            await setMaps(result.data.rotation);
            battleLog.current = result.data.members.sort((a, b) => {
                return b.battles.length - a.battles.length;
            });
        });
    }, [today, tomorrow, matchMode, matchType]);

    const getDate = (today, tomorrow) => {
        setToday(today)
        setTomorrow(tomorrow)
    }

    const getRadio = (radio) => {
        setMatchMode(modeList.includes(radio) ? radio : 'all');
        setMatchType(typeList.includes(radio) ? radio : 'all');
    }

    const startDate = new Date(season.start_date);
    startDate.setDate(startDate.getDate() - 1);

    return (
        <div className={'container_flex'}>
            <nav className={'game_mode__box'}>
                <GameMenu getRadio={getRadio}/>
                <Calendar today={today}
                          startDate={startDate}
                          getDate={getDate}/>
            </nav>
            <div className={'battle_table__box'}>
                <DailyTable gameMode={setMatchMode}
                                battleLog={battleLog.current}
                                maps={maps}/>
            </div>
        </div>
    );
}