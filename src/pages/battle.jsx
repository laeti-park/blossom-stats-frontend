import React, {useEffect, useState} from "react";
import axios from "axios";
import BattleTable from '../components/battle_table';
import GameMenu from '../components/tool_match_menu';
import Calendar from '../components/tool_calendar';

import '../css/record.css';

const url = process.env.REACT_APP_BASE_URL;
const typeList = ['all', 'trophyLeague', 'powerLeague', 'clubLeague', 'challenge'];
const modeList = ['gemGrab', 'brawlBall', 'bounty', 'heist', 'hotZone', 'knockout', 'basketBrawl', 'duels', 'soloShowdown', 'duoShowdown']

export default () => {
    const [today, setToday] = useState(new Date(
        new Date(new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDate()).getTime()));
    const [tomorrow, setTomorrow] = useState(new Date(
        new Date(new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDate() + 1).getTime()));
    const [battles, setBattles] = useState([]);
    const [matchMode, setMatchMode] = useState('all');
    const [matchType, setMatchType] = useState('all');
    const [season, setSeason] = useState({});
    const [maps, setMaps] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get(`${url}/battle`, {
            params: {
                today: today,
                tomorrow: tomorrow,
                type: matchType,
                mode: matchMode
            },
        }).then(async (result) => {
            setBattles(result.data.battles);
            setSeason(result.data.season);
            setPage(1);
        });
    }, [matchMode, matchType, today, tomorrow]);

    const getDate = (today, tomorrow) => {
        setToday(today)
        setTomorrow(tomorrow)
    };

    const getRadio = (radio) => {
        setMatchMode(modeList.includes(radio) ? radio : 'all');
        setMatchType(typeList.includes(radio) ? radio : 'all');
    };

    const startDate = new Date(season?.SEASON_BGN_DT);
    startDate.setDate(startDate.getDate() - 1);

    const getPage = (num) => {
        setPage(num);
    };

    return (
        <div className={'container_flex'}>
            <nav className={'game_mode__box'}>
                <GameMenu getRadio={getRadio}/>
                <Calendar today={today}
                          startDate={startDate}
                          getDate={getDate}/>
            </nav>
            <BattleTable battles={battles}
                         maps={maps}
                         page={page}
                         getPage={getPage}/>
        </div>
    );
}