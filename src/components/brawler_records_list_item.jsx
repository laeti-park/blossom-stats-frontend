import React, {useState} from "react";
import styled from "styled-components";
import {AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer} from "recharts";

const RecordsItem = ({brawler, trophyMatchTotal, leagueMatchTotal, rarity, brawlerChange}) => {
    const [graph, setGraph] = useState(false);

    return (
        <ItemBox visible={graph}
                 rarity={rarity}>
            <div className={'brawler__box'}>
                <div className={'brawler__box_top'}>
                    <a className={'brawler_base_info'}
                       id={brawler["Brawler.name"]}>
                        <img
                            src={`/images/rank_tl${brawler.TROPHY_RNK}.webp`}
                            alt={'브롤러 랭크'}/>
                        <h2>{brawler[`Brawler.name`]}</h2>
                    </a>
                    <img src={`/images/brawler_profile/${brawler.BRAWLER_ID}.webp`}
                         alt={'브롤러 프로필'}/>
                    <div className={'brawler_detail_info'}>
                        <div>
                            <img src={require(`../images/game_icon/trophy.webp`)}
                                 alt={'트로피'}/> 현재 : {brawler.TROPHY_CUR}
                        </div>
                        <div>
                            <img src={require(`../images/game_icon/trophy.webp`)}
                                 alt={'트로피'}/> 최고 : {brawler.TROPHY_HGH}
                        </div>
                        <div>
                            <img src={require(`../images/game_icon/trophy_plus.webp`)}
                                 alt={'트로피 변화량'}/> 변화량
                            : {brawler.TROPHY_CUR - brawler.TROPHY_BGN}
                        </div>
                    </div>
                </div>
                <div className={'brawler__box_bottom'}>
                    <div>
                        <div>
                            <img src={`../images/game_mode_icon/trophyLeague.webp`}
                                 alt={'트로피 변화량'}/>
                            트로피 리그 [ 픽률
                            : <span>{trophyMatchTotal > 0 ? Math.floor((brawler.MATCH_CNT_TL / trophyMatchTotal) * 100) : 0}%</span>
                            <span>승률 : {
                                brawler.MATCH_CNT_VIC_TL > 0 ?
                                    Math.floor(brawler.MATCH_CNT_VIC_TL / (brawler.MATCH_CNT_VIC_TL + brawler.MATCH_CNT_DEF_TL) * 100) : 0}% ]</span>
                        </div>
                        <div>
                            <img src={`../images/game_mode_icon/powerLeague.webp`}
                                 alt={'트로피 변화량'}/>
                            파워 리그 [ 픽률 :
                            <span>
                                {leagueMatchTotal > 0 ? Math.floor((brawler.MATCH_CNT_PL / leagueMatchTotal) * 100) : 0}%
                            </span>
                            <span>승률 : {
                                brawler.MATCH_CNT_VIC_PL > 0 ?
                                    Math.floor(brawler.MATCH_CNT_VIC_PL / (brawler.MATCH_CNT_VIC_PL + brawler.MATCH_CNT_DEF_PL) * 100) : 0}% ]
                            </span>
                        </div>
                    </div>
                    <div>
                        <button className={'brawler__button'}
                                onClick={() => {
                                    setGraph(!graph)
                                }}
                                disabled={brawlerChange.length === 0}>
                            <img src={require(`../images/game_icon/search.webp`)}
                                 alt={'트로피 변화량'}/>
                        </button>
                    </div>
                </div>
            </div>
            <div className={'brawler_graph__box'}>
                <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={brawlerChange}
                               margin={{
                                   top: 20,
                                   right: 20,
                                   left: 0,
                                   bottom: 10,
                               }}>
                        <CartesianGrid/>
                        <XAxis dataKey="MATCH_DT" stroke="white"/>
                        <YAxis stroke="white" domain={['auto', 'auto']}/>
                        <Tooltip labelStyle={{color: "black"}}/>
                        <Area name="트로피" type="monotone"
                              dataKey="MATCH_CHG"
                              stroke="#39375B"
                              strokeWidth={2}
                              dot={{stroke: '#F9F5EB', strokeWidth: 2}}/>
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </ItemBox>
    )
}

const ItemBox = styled.div`
  width: 100%;
  font-size: 1rem;
  color: white;

  .brawler__box {
    border: 1px solid #39375B;
    border-radius: 0.1rem;
  }

  .brawler__box_top {
    display: flex;
    height: 140px;
    background-color: ${props => (props.rarity === '기본' ? '#94D7F4' :
            props.rarity === '희귀' ? '#2EDD1C' :
                    props.rarity === '초희귀' ? '#0087FA' :
                            props.rarity === '영웅' ? '#B116ED' :
                                    props.rarity === '신화' ? '#D6001A' :
                                            props.rarity === '전설' ? '#FFF11E' : '')};
    background-image: linear-gradient(${props => (props.rarity === '크로마틱' ? '45deg, purple 40%, red 50%, yellow 60%' : '')});
    justify-content: space-between;
  }

  .brawler__box_top > img {
    min-width: 210px;
    object-fit: contain;
    object-position: left;
  }

  .brawler_base_info {
    display: flex;
    clip-path: polygon(100% 0, 100% 0, 90% 100%, 0 100%, 0 0);
    position: absolute;
    padding: 6px 20px 6px 6px;
    height: 38px;
    background-color: #3A4F7A;
  }

  .brawler_base_info > img {
    height: 26px;
    margin-right: 6px;
    object-fit: contain;
    object-position: left;
  }

  .brawler_detail_info {
    width: 260px;
    padding: 10px;
    background-color: #3A4F7A;
    border-left: 1px solid #39375B;
  }

  .brawler_detail_info > div {
    margin-top: 10px;
    font-size: 1rem;
  }

  .brawler_detail_info > div > img,
  .brawler__box_bottom > div > div > img {
    object-fit: contain;
    object-position: left;
  }

  .brawler_detail_info > div > img {
    width: 28px;
    height: 20px;
  }

  .brawler__box_bottom > div > div > img {
    width: 20px;
    height: 16px;
  }

  .brawler__box_bottom {
    padding: 10px;
    height: 60px;
    display: flex;
    background-color: #3A4F7A;
    border-top: 1px solid #39375B;
    justify-content: space-between;
    font-size: 0.9rem;
  }

  .brawler__box_bottom > div > div {
    display: flex;
    gap: 4px;
    margin-bottom: 8px;
  }

  .brawler__button {
    width: 60px;
    height: 40px;
  }
  
  .brawler__button > img {
    width: 28px;
    height: 28px;
    object-fit: contain;
    vertical-align: middle;
  }

  .brawler_graph__box {
    max-height: ${props => (props.visible ? '' : 0)};
    padding: ${props => (props.visible ? '10px' : 0)};
    transform: scaleY(${props => (props.visible ? 1 : 0)});
    transform-origin: top;
    transition: transform 0.25s ease;
    background-color: #3A4F7A;
    font-size: 14px;
  }

  @media screen and (min-width: 768px) {
    width: 49%;
  }
`;

export default RecordsItem;