import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import Profile from "../components/tool_profile";
import Brawlers from "../components/brwaler_records_list";

import '../css/profile.css';

const url = process.env.REACT_APP_BASE_URL;

const Brawler_Records = () => {
    const {id} = useParams();
    const [member, setMember] = useState({});
    const [brawlers, setBrawlers] = useState([]);

    useEffect(() => {
        axios.get(`${url}/brawler/${id}`)
            .then(async (result) => {
                setMember(result.data.member);
                setBrawlers(result.data.brawlers);
            });
    }, []);

    return (
        <div className={'container_block'}>
            <Profile id={member.id}
                     name={member.name}
                     profile={member.profile_picture}/>
            {/*<MemberRecords />*/}
            <Brawlers brawlers={brawlers}/>
        </div>
    )
}

export default Brawler_Records;