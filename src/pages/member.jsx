import React from 'react';
import axios from 'axios';
import Tbody from './member_tbody';

const url = process.env.REACT_APP_BASE_URL;

export default () => {
    const [members, setMembers] = React.useState([]);

    React.useEffect(() => {
        axios.get(`${url}/member`)
            .then((result) => {
                setMembers(result.data);
            });
    }, []);

    return (
        <div>
            <table className='table__box'>
                <thead>
                <tr>
                    <th>
                        <img className='table__head_row__image'
                             src={'images/game_icon/account.webp'} alt='닉네임'/>
                        닉네임
                    </th>
                    <th>
                        <img className='table__head_row__image'
                             src={'images/game_icon/trophy.webp'} alt='트로피'/>
                        트로피
                    </th>
                    <th className='table__head_row__rank'>
                        <img className='table__head_row__image'
                             src={'images/game_mode/rankSolo.webp'} alt='솔로'/>
                        솔로
                    </th>
                    <th className='table__head_row__rank'>
                        <img className='table__head_row__image'
                             src={'images/game_mode/rankTeam.webp'} alt='팀'/>
                        팀
                    </th>
                </tr>
                </thead>
                <Tbody members={members}/>
            </table>
        </div>
    )
}