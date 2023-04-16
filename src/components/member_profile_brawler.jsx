import styled from "styled-components";

const ProfileBrawler = (props) => {

    return (
        <div className={'row__box-3'}>
            <h2>브롤러 정보<span>({props.brawlers.length}종)</span></h2>
            <div className={'summary__list-2'}>
                {
                    props.brawlers.map(brawler => {
                        return (
                            <SummaryBox key={`${brawler.member_id}_${brawler.brawler_id}`}
                                        href={`../brawler/${brawler.member_id.replace('#', '')}#${brawler['Brawler.name']}`}>
                                <div className={'summary_title'}>
                                    <img className={'summary__image-1'}
                                         src={`/images/brawler_pin/${brawler.brawler_id}.webp`}
                                         alt={'브롤러'}/>
                                    <div>{brawler['Brawler.name']}</div>
                                </div>
                                <div className={'summary_content'}>
                                    <div>
                                        <img className={'summary__image-3'}
                                             src={require('../images/game_icon/power_point.webp')}
                                             alt={'파워 레벨'}/>
                                        <span>파워 레벨 : Lv.{brawler.power}</span>
                                    </div>
                                    <div>
                                        <img className={'summary__image-3'}
                                             src={require('../images/game_icon/trophy.webp')}
                                             alt={'트로피'}/>
                                        <span>현재 : {brawler.trophy_current}개 </span>
                                        <span>
                                            <img className={'summary__image-3'}
                                                 src={require('../images/game_icon/trophy_plus.webp')}
                                                 alt={'트로피 변화량'}/>
                                            {brawler.trophy_current - brawler.trophy_begin}개
                                        </span>
                                    </div>
                                </div>
                            </SummaryBox>
                        )
                    })
                }
            </div>
        </div>
    )
};

const SummaryBox = styled.a`
  width: 100%;
  display: flex;
  height: 72px;
  border: 1px solid #39375B;
  border-radius: 0.25rem;
  justify-content: left;
  align-items: center;
  padding-left: 6px;
  background-color: #F6C6EA;
  font-size: 1rem;
  text-decoration: none;
  color: black;

  .summary_title {
    width: 80px;
    text-align: center;
  }

  .summary_title > div {
    margin-top: 2px;
    margin-right: 6px;
    font-size: 0.9rem;
  }

  @media screen and (min-width: 768px) {
    width: 49%;
    height: 60px;

    .summary_title > img {
      height: 28px;
    }
  }
`;

export default ProfileBrawler;