import React from "react";
import InfoBox from './brawler_records_item';

const RecordsList = (props) => {

    const trophyMatchTotal = props.brawlers.length !== 0 ? props.brawlers.map(brawler => brawler.match_trophy).reduce(
        (total, matchCount) => total + matchCount) : 0;
    const leagueMatchTotal = props.brawlers.length !== 0 ? props.brawlers.map(brawler => brawler.match_league).reduce(
        (total, matchCount) => total + matchCount) : 0;

    return (
        <div className={'row_box_3'}>
            <h2>브롤러 정보<span>({props.brawlers.length}종)</span></h2>
            <div className={'summary_list_2'}>
                {
                    props.brawlers.map(brawler => {

                        const brawlerChange = props.brawlerChange
                            .filter(item => item.brawler_id === brawler.brawler_id)
                            .map(item => {
                                item.match_change = parseInt(brawler.trophy_begin) + parseInt(item.match_change);
                                return item;
                            });

                        return (
                            <InfoBox key={`${brawler.member_id}_${brawler.brawler_id}`}
                                     brawler={brawler}
                                     trophyMatchTotal={trophyMatchTotal}
                                     leagueMatchTotal={leagueMatchTotal}
                                     rarity={brawler[`Brawler.rarity`]}
                                     brawlerChange={brawlerChange}/>
                        )
                    })
                }
            </div>
        </div>
    )
};


export default RecordsList;