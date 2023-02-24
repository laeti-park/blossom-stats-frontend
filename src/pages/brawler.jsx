import React from 'react';
import axios from 'axios';
import BrawlerPicked from './brawler_info';
import MemberBrawler from './brawler_tbody';

const url = process.env.REACT_APP_BASE_URL;

export default () => {
    const [members, setMembers] = React.useState([]);
    const [brawlers, setBrawlers] = React.useState([]);
    const [memberBrawlers, setMemberBrawlers] = React.useState([]);
    const [pick, setPick] = React.useState([]);
    const [brawler, setBrawler] = React.useState({
        "id": "16000000",
        "name": "쉘리",
        "rarity": "기본",
        "class": "대미지 딜러",
        "gender": "여성",
        "icon": "<:Brawler_1:1015890389993005096>"
    });
    const [radio, setRadio] = React.useState('16000000');

    const onBrawlerSelected = (e, brawler) => {
        setBrawler(brawler);
    }

    const handleRadioButton = (e) => {
        setRadio(e.target.value);
    }

    React.useEffect(() => {
        axios.get(`${url}/brawler`)
            .then((result) => {
                setBrawlers(result.data.brawlers);
                setMemberBrawlers(result.data.memberBrawlers);
                setPick(result.data.pick);
            });
    }, []);

    React.useEffect(() => {
        axios.get(`${url}/member`)
            .then((result) => {
                setMembers(result.data);
            });
    }, []);

    return (
        <div className="flex_box">
            <nav className="nav__brawler_box">
                <div className="nav__list">
                    {
                        brawlers.map(item => {
                            return (
                                <label key={item.id}>
                                    <input
                                        type="radio"
                                        className="nav__radio"
                                        value={item.id}
                                        checked={radio === item.id}
                                        onChange={handleRadioButton}/>
                                    <img className="nav__brawler"
                                         src={`/images/brawler_profile/${item.id}.webp`}
                                         alt={item.id}
                                         onClick={(e) => onBrawlerSelected(e, item)}/>
                                </label>
                            )
                        })
                    }
                </div>
            </nav>
            <div>
                <BrawlerPicked
                    brawler={brawler}
                    pick={pick}/>
                <MemberBrawler
                    brawler={brawler.id}
                    memberBrawlers={memberBrawlers}
                    members={members}/>
            </div>
        </div>
    )
}