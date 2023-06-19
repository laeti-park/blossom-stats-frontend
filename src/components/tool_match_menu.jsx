import {useState} from "react";

const ToolMatchMenu = (props) => {
    const [radio, setRadio] = useState('all');

    const handleRadioButton = (e) => {
        setRadio(e.target.value);
        props.getRadio(e.target.value);
    };

    return (
        <div className={'game_mode__list'}>
            <label>
                <input type="radio" className={'radio_button'}
                       value={'all'}
                       checked={radio === 'all'}
                       onChange={handleRadioButton}/>
                <img className={'rectangle__image'}
                     src={'/images/game_mode_icon/all.webp'}
                     alt={'전체'}/>
            </label>
            <label>
                <input type="radio" className={'radio_button'}
                       value={'trophyLeague'}
                       checked={radio === 'trophyLeague'}
                       onChange={handleRadioButton}/>
                <img className={'rectangle__image'}
                     src={'/images/game_mode_icon/trophyLeague.webp'}
                     alt={'트로피 리그'}/>
            </label>
            <label>
                <input type="radio" className={'radio_button'}
                       value={'powerLeague'}
                       checked={radio === 'powerLeague'}
                       onChange={handleRadioButton}/>
                <img className={'rectangle__image'}
                     src={'/images/game_mode_icon/powerLeague.webp'}
                     alt={'파워 리그'}/>
            </label>
            <label>
                <input type="radio" className={'radio_button'}
                       value={'gemGrab'}
                       checked={radio === 'gemGrab'}
                       onChange={handleRadioButton}/>
                <img className={'rectangle__image'}
                     src={'/images/game_mode_icon/gemGrab.webp'}
                     alt={'젬 그랩'}/>
            </label>
            <label>
                <input type="radio" className={'radio_button'}
                       value={'brawlBall'}
                       checked={radio === 'brawlBall'}
                       onChange={handleRadioButton}/>
                <img className={'rectangle__image'}
                     src={'/images/game_mode_icon/brawlBall.webp'}
                     alt={'브롤 볼'}/>
            </label>
            <label>
                <input type="radio" className={'radio_button'}
                       value={'bounty'}
                       checked={radio === 'bounty'}
                       onChange={handleRadioButton}/>
                <img className={'rectangle__image'}
                     src={'/images/game_mode_icon/bounty.webp'}
                     alt={'바운티'}/>
            </label>
            <label>
                <input type="radio" className={'radio_button'}
                       value={'heist'}
                       checked={radio === 'heist'}
                       onChange={handleRadioButton}/>
                <img className={'rectangle__image'}
                     src={'/images/game_mode_icon/heist.webp'}
                     alt={'하이스트'}/>
            </label>
            <label>
                <input type="radio" className={'radio_button'}
                       value={'hotZone'}
                       checked={radio === 'hotZone'}
                       onChange={handleRadioButton}/>
                <img className={'rectangle__image'}
                     src={'/images/game_mode_icon/hotZone.webp'}
                     alt={'핫 존'}/>
            </label>
            <label>
                <input type="radio" className={'radio_button'}
                       value={'knockout'}
                       checked={radio === 'knockout'}
                       onChange={handleRadioButton}/>
                <img className={'rectangle__image'}
                     src={'/images/game_mode_icon/knockout.webp'}
                     alt={'녹아웃'}/>
            </label>
            <label>
                <input type="radio" className={'radio_button'}
                       value={'basketBrawl'}
                       checked={radio === 'basketBrawl'}
                       onChange={handleRadioButton}/>
                <img className={'rectangle__image'}
                     src={'/images/game_mode_icon/volleyBrawl.webp'}
                     alt={'발리 브롤'}/>
            </label>
            <label>
                <input type="radio" className={'radio_button'}
                       value={'duels'}
                       checked={radio === 'duels'}
                       onChange={handleRadioButton}/>
                <img className={'rectangle__image'}
                     src={'/images/game_mode_icon/duels.webp'}
                     alt={'듀얼'}/>
            </label>
            <label>
                <input type="radio" className={'radio_button'}
                       value={'soloShowdown'}
                       checked={radio === 'soloShowdown'}
                       onChange={handleRadioButton}/>
                <img className={'rectangle__image'}
                     src={'/images/game_mode_icon/soloShowdown.webp'}
                     alt={'솔로 쇼다운'}/>
            </label>
            <label>
                <input type="radio" className={'radio_button'}
                       value={'duoShowdown'}
                       checked={radio === 'duoShowdown'}
                       onChange={handleRadioButton}/>
                <img className={'rectangle__image'}
                     src={'/images/game_mode_icon/duoShowdown.webp'}
                     alt={'듀오 쇼다운'}/>
            </label>
            <label>
                <input type="radio" className={'radio_button'}
                       value={'clubLeague'}
                       checked={radio === 'clubLeague'}
                       onChange={handleRadioButton}/>
                <img className={'rectangle__image'}
                     src={'/images/game_mode_icon/clubLeague.webp'}
                     alt={'클럽 리그'}/>
            </label>
            <label>
                <input type="radio" className={'radio_button'}
                       value={'challenge'}
                       checked={radio === 'challenge'}
                       onChange={handleRadioButton}/>
                <img className={'rectangle__image'}
                     src={'/images/game_mode_icon/challenge.webp'}
                     alt={'챌린지'}/>
            </label>
        </div>
    );
}
export default ToolMatchMenu;