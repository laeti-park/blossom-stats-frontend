import React from "react";
import axios from "axios";
import Season from "./season_tbody";

const url = process.env.REACT_APP_BASE_URL;
const typeList = ['all', 'trophyLeague', 'powerLeague', 'clubLeague', 'challenge'];
const modeList = ['gemGrab', 'brawlBall', 'bounty', 'heist', 'hotZone', 'knockout', 'dual', 'soloShowdown', 'duoShowdown']

export default () => {
    const [members, setMembers] = React.useState([]);
    const gameMode = React.useRef('all');
    const gameType = React.useRef('all');
    const [radio, setRadio] = React.useState('all');
    const [season, setSeason] = React.useState({});

    React.useEffect(() => {
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
        <div className={'flex_box'}>
            <div>
                <nav className={'nav__game_mode_box'}>
                    <label>
                        <input type="radio" className={'nav__radio'}
                               value={'all'}
                               checked={radio === 'all'}
                               onChange={handleRadioButton}/>
                        <img className={'nav__all'}
                             src={'/images/game_mode/all.webp'} alt={'전체'}/>
                    </label>
                    <label>
                        <input type="radio" className={'nav__radio'}
                               value={'trophyLeague'}
                               checked={radio === 'trophyLeague'}
                               onChange={handleRadioButton}/>
                        <img className={'nav__items'}
                             src={'/images/game_mode/trophyLeague.webp'} alt={'트로피 리그'}/>
                    </label>
                    <label>
                        <input type="radio" className={'nav__radio'}
                               value={'powerLeague'}
                               checked={radio === 'powerLeague'}
                               onChange={handleRadioButton}/>
                        <img className={'nav__items'}
                             src={'/images/game_mode/powerLeague.webp'} alt={'파워 리그'}/>
                    </label>
                    <label>
                        <input type="radio" className={'nav__radio'}
                               value={'gemGrab'}
                               checked={radio === 'gemGrab'}
                               onChange={handleRadioButton}/>
                        <img className={'nav__item'}
                             src={'/images/game_mode/gemGrab.webp'} alt={'젬 그랩'}/>
                    </label>
                    <label>
                        <input type="radio" className={'nav__radio'}
                               value={'brawlBall'}
                               checked={radio === 'brawlBall'}
                               onChange={handleRadioButton}/>
                        <img className={'nav__item'}
                             src={'/images/game_mode/brawlBall.webp'} alt={'브롤 볼'}/>
                    </label>
                    <label>
                        <input type="radio" className={'nav__radio'}
                               value={'bounty'}
                               checked={radio === 'bounty'}
                               onChange={handleRadioButton}/>
                        <img className={'nav__item'}
                             src={'/images/game_mode/bounty.webp'} alt={'바운티'}/>
                    </label>
                    <label>
                        <input type="radio" className={'nav__radio'}
                               value={'heist'}
                               checked={radio === 'heist'}
                               onChange={handleRadioButton}/>
                        <img className={'nav__item'}
                             src={'/images/game_mode/heist.webp'} alt={'하이스트'}/>
                    </label>
                    <label>
                        <input type="radio" className={'nav__radio'}
                               value={'hotZone'}
                               checked={radio === 'hotZone'}
                               onChange={handleRadioButton}/>
                        <img className={'nav__item'}
                             src={'/images/game_mode/hotZone.webp'} alt={'핫 존'}/>
                    </label>
                    <label>
                        <input type="radio" className={'nav__radio'}
                               value={'knockout'}
                               checked={radio === 'knockout'}
                               onChange={handleRadioButton}/>
                        <img className={'nav__item'}
                             src={'/images/game_mode/knockout.webp'} alt={'녹아웃'}/>
                    </label>
                    <label>
                        <input type="radio" className={'nav__radio'}
                               value={'dual'}
                               checked={radio === 'dual'}
                               onChange={handleRadioButton}
                               disabled={true}/>
                        <img className={'nav__item'}
                             src={'/images/game_mode/dual.webp'} alt={'듀얼'}/>
                    </label>
                    <label>
                        <input type="radio" className={'nav__radio'}
                               value={'soloShowdown'}
                               checked={radio === 'soloShowdown'}
                               onChange={handleRadioButton}
                               disabled={true}/>
                        <img className={'nav__item'}
                             src={'/images/game_mode/soloShowdown.webp'} alt={'솔로 쇼다운'}/>
                    </label>
                    <label>
                        <input type="radio" className={'nav__radio'}
                               value={'duoShowdown'}
                               checked={radio === 'duoShowdown'}
                               onChange={handleRadioButton}/>
                        <img className={'nav__item'}
                             src={'/images/game_mode/duoShowdown.webp'} alt={'듀오 쇼다운'}/>
                    </label>
                    <label>
                        <input type="radio" className={'nav__radio'}
                               value={'clubLeague'}
                               checked={radio === 'clubLeague'}
                               onChange={handleRadioButton}/>
                        <img className={'nav__item'}
                             src={'/images/game_mode/clubLeague.webp'} alt={'클럽 리그'}/>
                    </label>
                    <label>
                        <input type="radio" className={'nav__radio'}
                               value={'challenge'}
                               checked={radio === 'challenge'}
                               onChange={handleRadioButton}/>
                        <img className={'nav__item'}
                             src={'/images/game_mode/challenge.webp'} alt={'챌린지'}/>
                    </label>
                </nav>
            </div>
            <div>
                <Season members={members}/>
            </div>
        </div>
    );
}