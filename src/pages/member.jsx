import {useEffect, useState} from 'react';
import axios from 'axios';
import MemberTable from '../components/member_table';

const url = process.env.REACT_APP_BASE_URL;

const MemberPage = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        axios.get(`${url}/member`)
            .then((result) => {
                setMembers(result.data);
            });
    }, []);

    return (
        <div className={'container_block'}>
            <MemberTable members={members}/>
        </div>
    )
};

export default MemberPage;