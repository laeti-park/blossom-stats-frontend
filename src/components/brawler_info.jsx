import React from "react";

const brawlerPicked = ({brawler, battlePicks}) => {
    const brawlerTL = battlePicks.find(item => {
        return item.BRAWLER_ID === brawler.BRAWLER_ID && item.MATCH_TYP === 0
    });

    const brawlerPLSolo = battlePicks.find(item => {
        return item.BRAWLER_ID === brawler.BRAWLER_ID && item.MATCH_TYP === 2
    });

    const brawlerPLTeam = battlePicks.find(item => {
        return item.BRAWLER_ID === brawler.BRAWLER_ID && item.MATCH_TYP === 3
    });

    return (
        <div className='info__box'>
            <div className='info__title'>
                <img src={`/images/brawler_profile/${brawler.BRAWLER_ID}.webp`}
                     alt={'브롤러 프로필'}/>
                <div>
                    <h3>
                        {brawler.BRAWLER_NM}
                    </h3>
                    <span>{brawler.BRAWLER_RRT}브롤러-{brawler.BRAWLER_CL}</span>
                </div>
            </div>
            <div className='info__detail'>
                <div>
                    <div>
                        <img src={`/images/game_mode_icon/trophyLeague.webp`}
                             alt={'트로피'}/>
                        <div>
                            <div className='detail__title'>
                                트로피 리그 픽률
                            </div>
                            <div className='detail__content'>
                                {Math.round((brawlerTL?.MATCH_CNT_RATE) * 100) / 100.0}%
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={`/images/game_mode_icon/trophyLeague.webp`}
                             alt={'트로피'}/>
                        <div>
                            <div className='detail__title'>
                                트로피 리그 승률
                            </div>
                            <div className='detail__content'>
                                {Math.round((brawlerTL?.MATCH_CNT_VIC_RATE) * 100) / 100.0}%
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={`/images/game_mode_icon/powerLeague.webp`}
                             alt={'파워리그'}/>
                        <div>
                            <div className='detail__title'>
                                파워 리그 픽률
                            </div>
                            <div className='detail__content'>
                                {Math.round((brawlerPLSolo?.MATCH_CNT_RATE) * 100) / 100.0}%
                                / {Math.round((brawlerPLTeam?.MATCH_CNT_RATE) * 100) / 100.0}%
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={`/images/game_mode_icon/powerLeague.webp`}
                             alt={'파워리그'}/>
                        <div>
                            <div className='detail__title'>
                                파워 리그 승률
                            </div>
                            <div className='detail__content'>
                                {Math.round((brawlerPLSolo?.MATCH_CNT_VIC_RATE) * 100) / 100.0}%
                                / {Math.round((brawlerPLTeam?.MATCH_CNT_VIC_RATE) * 100) / 100.0}%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default brawlerPicked;