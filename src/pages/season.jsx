import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import Season from "../components/season_table";

import '../css/record.css';

const url = process.env.REACT_APP_BASE_URL;
const typeList = ['all', 'trophyLeague', 'powerLeague', 'clubLeague', 'challenge'];
const modeList = ['gemGrab', 'brawlBall', 'bounty', 'heist', 'hotZone', 'knockout', 'dual', 'soloShowdown', 'duoShowdown']

export default () => {
    const [members, setMembers] = useState([]);
    const gameMode = useRef('all');
    const gameType = useRef('all');
    const [radio, setRadio] = useState('all');
    const [season, setSeason] = useState({});

    useEffect(() => {
        axios.get(`${url}/season`, {
            params: {
                type: gameType.current,
                mode: gameMode.current
            },
        }).then(async (result) => {
            await setMembers(result.data.members);
            await setSeason(result.data.season);
        });
    }, []);

    const getData = () => {
        axios.get(`${url}/season`, {
            params: {
                type: gameType.current,
                mode: gameMode.current
            },
        }).then(async (result) => {
            await setMembers(result.data.members);
            await setSeason(result.data.season);
        });
    }

    const handleRadioButton = (e) => {
        gameMode.current = modeList.includes(e.target.value) ? e.target.value : 'all';
        gameType.current = typeList.includes(e.target.value) ? e.target.value : 'all';
        setRadio(e.target.value);
        getData();
    }

    const startDate = new Date(season.start_date);
    const endDate = new Date(season.start_date);
    startDate.setDate(startDate.getDate() - 1);

    return (
        <div className={'container_flex'}>
            <nav className={'game_mode__box'}>
                <div className={'game_mode__list'}>
                    <label>
                        <input type="radio" className={'radio_button'}
                               value={'all'}
                               checked={radio === 'all'}
                               onChange={handleRadioButton}/>
                        <img className={'rectangle_image'}
                             src={'/images/game_mode/all.webp'}
                             alt={'전체'}/>
                    </label>
                    <label>
                        <input type="radio" className={'radio_button'}
                               value={'trophyLeague'}
                               checked={radio === 'trophyLeague'}
                               onChange={handleRadioButton}/>
                        <img className={'rectangle_image'}
                             src={'/images/game_mode/trophyLeague.webp'}
                             alt={'트로피 리그'}/>
                    </label>
                    <label>
                        <input type="radio" className={'radio_button'}
                               value={'powerLeague'}
                               checked={radio === 'powerLeague'}
                               onChange={handleRadioButton}/>
                        <img className={'rectangle_image'}
                             src={'/images/game_mode/powerLeague.webp'}
                             alt={'파워 리그'}/>
                    </label>
                    <label>
                        <input type="radio" className={'radio_button'}
                               value={'gemGrab'}
                               checked={radio === 'gemGrab'}
                               onChange={handleRadioButton}/>
                        <img className={'rectangle_image'}
                             src={'/images/game_mode/gemGrab.webp'}
                             alt={'젬 그랩'}/>
                    </label>
                    <label>
                        <input type="radio" className={'radio_button'}
                               value={'brawlBall'}
                               checked={radio === 'brawlBall'}
                               onChange={handleRadioButton}/>
                        <img className={'rectangle_image'}
                             src={'/images/game_mode/brawlBall.webp'}
                             alt={'브롤 볼'}/>
                    </label>
                    <label>
                        <input type="radio" className={'radio_button'}
                               value={'bounty'}
                               checked={radio === 'bounty'}
                               onChange={handleRadioButton}/>
                        <img className={'rectangle_image'}
                             src={'/images/game_mode/bounty.webp'}
                             alt={'바운티'}/>
                    </label>
                    <label>
                        <input type="radio" className={'radio_button'}
                               value={'heist'}
                               checked={radio === 'heist'}
                               onChange={handleRadioButton}/>
                        <img className={'rectangle_image'}
                             src={'/images/game_mode/heist.webp'}
                             alt={'하이스트'}/>
                    </label>
                    <label>
                        <input type="radio" className={'radio_button'}
                               value={'hotZone'}
                               checked={radio === 'hotZone'}
                               onChange={handleRadioButton}/>
                        <img className={'rectangle_image'}
                             src={'/images/game_mode/hotZone.webp'}
                             alt={'핫 존'}/>
                    </label>
                    <label>
                        <input type="radio" className={'radio_button'}
                               value={'knockout'}
                               checked={radio === 'knockout'}
                               onChange={handleRadioButton}/>
                        <img className={'rectangle_image'}
                             src={'/images/game_mode/knockout.webp'}
                             alt={'녹아웃'}/>
                    </label>
                    <label>
                        <input type="radio" className={'radio_button'}
                               value={'basketBrawl'}
                               checked={radio === 'basketBrawl'}
                               onChange={handleRadioButton}/>
                        <img className={'rectangle_image'}
                             src={'/images/game_mode/basketBrawl.webp'}
                             alt={'바스켓 브롤'}/>
                    </label>
                    <label>
                        <input type="radio" className={'radio_button'}
                               value={'duels'}
                               checked={radio === 'duels'}
                               onChange={handleRadioButton}
                               disabled={true}/>
                        <img className={'rectangle_image'}
                             src={'/images/game_mode/duels.webp'}
                             alt={'듀얼'}/>
                    </label>
                    <label>
                        <input type="radio" className={'radio_button'}
                               value={'soloShowdown'}
                               checked={radio === 'soloShowdown'}
                               onChange={handleRadioButton}
                               disabled={true}/>
                        <img className={'rectangle_image'}
                             src={'/images/game_mode/soloShowdown.webp'}
                             alt={'솔로 쇼다운'}/>
                    </label>
                    <label>
                        <input type="radio" className={'radio_button'}
                               value={'duoShowdown'}
                               checked={radio === 'duoShowdown'}
                               onChange={handleRadioButton}/>
                        <img className={'rectangle_image'}
                             src={'/images/game_mode/duoShowdown.webp'}
                             alt={'듀오 쇼다운'}/>
                    </label>
                    <label>
                        <input type="radio" className={'radio_button'}
                               value={'clubLeague'}
                               checked={radio === 'clubLeague'}
                               onChange={handleRadioButton}/>
                        <img className={'rectangle_image'}
                             src={'/images/game_mode/clubLeague.webp'}
                             alt={'클럽 리그'}/>
                    </label>
                    <label>
                        <input type="radio" className={'radio_button'}
                               value={'challenge'}
                               checked={radio === 'challenge'}
                               onChange={handleRadioButton}/>
                        <img className={'rectangle_image'}
                             src={'/images/game_mode/challenge.webp'}
                             alt={'챌린지'}/>
                    </label>
                </div>
            </nav>
            <Season members={members}/>
        </div>
    );
}