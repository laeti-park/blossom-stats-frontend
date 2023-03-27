import React, {useEffect, useState} from "react";
import axios from "axios";
import GameMenu from "../components/tool_match_menu";
import Season from "../components/season_table";

import '../css/record.css';

const url = process.env.REACT_APP_BASE_URL;
const typeList = ['all', 'trophyLeague', 'powerLeague', 'clubLeague', 'challenge'];
const modeList = ['gemGrab', 'brawlBall', 'bounty', 'heist', 'hotZone', 'knockout', 'dual', 'soloShowdown', 'duoShowdown']

export default () => {
    const [members, setMembers] = useState([]);
    const [matchMode, setMatchMode] = useState('all');
    const [matchType, setMatchType] = useState('all');
    const [season, setSeason] = useState({});
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get(`${url}/season`, {
            params: {
                type: matchType,
                mode: matchMode
            },
        }).then(async (result) => {
            setMembers(result.data.members);
            setSeason(result.data.season);
            setPage(1);
        });
    }, [matchType, matchMode]);

    const getRadio = (radio) => {
        setMatchMode(modeList.includes(radio) ? radio : 'all');
        setMatchType(typeList.includes(radio) ? radio : 'all');
    };


    const startDate = new Date(season.start_date);
    const endDate = new Date(season.start_date);
    startDate.setDate(startDate.getDate() - 1);

    const getPage = (num) => {
        setPage(num);
    };

    return (
        <div className={'container_flex'}>
            <nav className={'game_mode__box'}>
                <GameMenu getRadio={getRadio}/>
            </nav>
            <Season members={members}
                    page={page}
                    getPage={getPage}/>
        </div>
    );
}