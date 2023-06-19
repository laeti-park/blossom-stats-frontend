import React, {useEffect, useState} from 'react';
import axios from 'axios';
import BrawlerPicked from '../components/brawler_info';
import BrawlerTable from '../components/brawler_table';
import BrawlerList from '../components/brawler_list'

import '../css/brawler.css';

const url = process.env.REACT_APP_BASE_URL;

export default () => {
    const [brawlers, setBrawlers] = useState([]);
    const [memberBrawlers, setMemberBrawlers] = useState([]);
    const [battlePicks, setBattlePicks] = useState([]);
    const [brawler, setBrawler] = useState({
        "BRAWLER_ID": "16000000",
        "BRAWLER_NM": "쉘리",
        "BRAWLER_RRT": "기본",
        "BRAWLER_CL": "대미지 딜러",
        "BRAWLER_GNDR": "여성"
    });

    useEffect(() => {
        axios.get(`${url}/brawler`, {
            params: {
                brawler: brawler.BRAWLER_ID,
            },
        }).then((result) => {
            setBrawlers(result.data.brawlers);
            setMemberBrawlers(result.data.memberBrawlers);
            setBattlePicks(result.data.battlePicks);
        });
    }, []);

    useEffect(() => {
        axios.get(`${url}/brawler`, {
            params: {
                brawler: brawler.BRAWLER_ID,
            },
        }).then((result) => {
            setMemberBrawlers(result.data.memberBrawlers);
            setBattlePicks(result.data.battlePicks);
        });
    }, [brawler]);

    const getBrawlers = (id) => {
        setBrawler(id);
    };

    return (
        <div className='container_flex'>
            <BrawlerList brawlers={brawlers}
                         getBrawlers={getBrawlers}/>
            <div className={'brawler_table__box'}>
                <BrawlerPicked
                    brawler={brawler}
                    battlePicks={battlePicks}/>
                <BrawlerTable
                    memberBrawlers={memberBrawlers}/>
            </div>
        </div>
    )
}