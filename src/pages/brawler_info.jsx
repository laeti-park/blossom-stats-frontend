import React from "react";

const brawlerPicked = ({brawler, pick}) => {

    const brawlersPickTrophy = pick.filter((element) => {
        return ['0'].includes(element.match_type);
    });

    const filterPickTrophy = pick.filter((element) => {
        return element.brawler_id === brawler.id && ['0'].includes(element.match_type);
    });

    const brawlersPickLeague = pick.filter((element) => {
        return ['2', '3'].includes(element.match_type);
    });

    const filterPickLeague = pick.filter((element) => {
        return element.brawler_id === brawler.id && ['2', '3'].includes(element.match_type);
    });

    const pickTotalTrophy = brawlersPickTrophy.reduce((sum, item) => sum + (item['match_count'] || 0), 0);
    const pickMatchTrophy = filterPickTrophy.reduce((sum, item) => sum + (item['match_count'] || 0), 0);
    const pickVictoryTrophy = filterPickTrophy.reduce((sum, item) => sum + (item['victory_count'] || 0), 0);

    const pickTotalLeague = brawlersPickLeague.reduce((sum, item) => sum + (item['match_count'] || 0), 0);
    const pickMatchLeague = filterPickLeague.reduce((sum, item) => sum + (item['match_count'] || 0), 0);
    const pickVictoryLeague = filterPickLeague.reduce((sum, item) => sum + (item['victory_count'] || 0), 0);


    return (
        <div className='info__box'>
            <div className='info__title'>
                <img src={`/images/brawler_profile/${brawler.id}.webp`} alt={'브롤러 프로필'}/>
                <h1>
                    <strong>{brawler.name}</strong>
                    <span>{brawler.rarity}브롤러-{brawler.class}</span>
                </h1>
            </div>
            <div className='info__detail'>
                <div className='detail__box'>
                    <div className='detail__title'>
                        트로피 리그 픽률
                    </div>
                    <div className='detail__content'>
                        {isNaN(pickMatchTrophy / pickTotalTrophy) ? 0 : Math.round((pickMatchTrophy / pickTotalTrophy) * 10000) / 100.0}%
                    </div>
                </div>
                <div className='detail_victory_box'>
                    <div className='detail__title'>
                        트로피 리그 승률
                    </div>
                    <div className='detail__content'>
                        {isNaN(pickVictoryTrophy / pickMatchTrophy) ? 0 : Math.round((pickVictoryTrophy / pickMatchTrophy) * 10000) / 100.0}%
                    </div>
                </div>
                <div className='detail__box'>
                    <div className='detail__title'>
                        파워 리그 픽률
                    </div>
                    <div className='detail__content'>
                        {isNaN(pickMatchLeague / pickTotalLeague) ? 0 : Math.round((pickMatchLeague / pickTotalLeague) * 10000) / 100.0}%
                    </div>
                </div>
                <div className='detail__box'>
                    <div className='detail__title'>
                        파워 리그 승률
                    </div>
                    <div className='detail__content'>
                        {isNaN(pickVictoryLeague / pickMatchLeague) ? 0 : Math.round((pickVictoryLeague / pickMatchLeague) * 10000) / 100.0}%
                    </div>
                </div>
            </div>
        </div>
    )
}

export default brawlerPicked;