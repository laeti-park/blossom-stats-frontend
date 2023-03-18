import React, {useEffect, useState} from 'react';
import axios from 'axios';
import BrawlerPicked from '../components/brawler_info';
import MemberBrawler from '../components/brawler_table';
import BrawlerList from '../components/brawler_list'

import '../css/brawler.css';

const url = process.env.REACT_APP_BASE_URL;

export default () => {
    const [brawlers, setBrawlers] = useState([]);
    const [memberBrawlers, setMemberBrawlers] = useState([]);
    const [pick, setPick] = useState([]);
    const [brawler, setBrawler] = useState({
        "id": "16000000",
        "name": "쉘리",
        "rarity": "기본",
        "class": "대미지 딜러",
        "gender": "여성",
        "icon": "<:Brawler_1:1015890389993005096>"
    });

    useEffect(() => {
        axios.get(`${url}/brawler`, {
            params: {
                brawler: brawler.id,
            },
        }).then((result) => {
            setBrawlers(result.data.brawlers);
            setMemberBrawlers(result.data.memberBrawlers);
            setPick(result.data.pick);
        });
    }, [brawler]);

    const getBrawlers = (id) => {
        setBrawler(id);
    };

    return (
        <div className='container_flex'>
            <BrawlerList brawlers={brawlers}
                         getBrawlers={getBrawlers}/>
            <div className={'member_brawler__box'}>
                <BrawlerPicked
                    brawler={brawler}
                    pick={pick}/>
                <MemberBrawler
                    memberBrawlers={memberBrawlers}/>
            </div>

        </div>
    )
}