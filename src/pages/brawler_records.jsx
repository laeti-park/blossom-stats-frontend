import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import Profile from "../components/tool_profile";
import Brawlers from "../components/brawler_records_list";

import '../css/profile.css';

const url = process.env.REACT_APP_BASE_URL;

const BrawlerRecords = () => {
    const {id} = useParams();
    const [member, setMember] = useState({});
    const [brawlers, setBrawlers] = useState([]);
    const [brawlerChange, setBrawlerChange] = useState([]);

    useEffect(() => {
        axios.get(`${url}/brawler/${id}`)
            .then(async (result) => {
                setMember(result.data.member);
                setBrawlers(result.data.brawlers);
                setBrawlerChange(result.data.brawlerChange);
            });
    }, []);

    return (
        <div className={'container_block'}>
            <Profile id={member.id}
                     name={member.name}
                     profile={member.profile_picture}/>
            {/*TODO: n각 그래프 만들기*/}
            {/*<MemberRecords />*/}
            {/*<RadarChart brawlers={brawlers}/>*/}
            <Brawlers brawlers={brawlers}
                      brawlerChange={brawlerChange}/>
        </div>
    )
}

export default BrawlerRecords;