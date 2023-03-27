import styled from 'styled-components';
import Calendar from "../components/tool_calendar";

const ProfileDaily = ({id, battles, count, today, getDate, startDate}) => {
    const victory_rate = battles.length !== 0 ?
        Math.round(count.victory_count / (count.victory_count + count.defeat_count) * 100) : 0;

    return (
        <div className={'row_box_3'}>
            <h2>일일 기록<span>({battles.length}회)</span></h2>
            <h4>
                <span style={{color: '#5AA469'}}>승: {count.victory_count}회 </span>
                <span style={{color: '#556FB5'}}>무: {count.draw_count}회 </span>
                <span style={{color: '#D35D6E'}}>패: {count.defeat_count}회 </span>
                <span>/ 승률: {victory_rate}%</span>
            </h4>
            <Calendar today={today}
                      startDate={startDate}
                      getDate={getDate}/>
            <div className={'summary_list_1'}>
                {
                    battles.map(battle => {
                        return (
                            <SummaryBox key={battle.match_date}
                                        matchResult={battle.match_result}
                                        href={`../battle/${id.replace('#', '')}`}>
                                <img className={'summary_image_1'}
                                     src={`/images/game_mode/${battle.mode}.webp`}
                                     alt={'게임모드'}/>
                                <img className={'summary_image_2'}
                                     src={`/images/brawler_pin/${battle.brawler_id}.webp`}
                                     alt={'브롤러'}/>
                            </SummaryBox>
                        )
                    })
                }
            </div>
        </div>
    )
}

const SummaryBox = styled.a`
  display: flex;
  width: 60px;
  height: 60px;
  border: 1px solid #39375B;
  border-radius: 1rem;
  justify-content: center;
  align-items: center;
  position: relative;

  background-color: ${props =>
          (props.matchResult === '-1' ? '#5AA469' :
                  (props.matchResult === '0' ? '#556FB5' : '#D35D6E'))}
`;

export default ProfileDaily;