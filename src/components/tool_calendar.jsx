import React, {useState} from "react";
import moment from "moment/moment";
import Calendar from "react-calendar";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight, faCalendarAlt} from "@fortawesome/free-solid-svg-icons";

const ToolMatchMenu = (props) => {
    const [calendar, setCalendar] = useState(false);

    const arrowRotate = {
        padding: '2px',
        margin: '0 4px 0 0',
        transform: calendar ? 'rotate(90deg)' : '',
        transition: 'transform 0.3s ease',
    };

    return (
        <React.Fragment>
            <div className={'date__box'}>
                <label>
                    <input type="checkbox"
                           onChange={() => {
                               setCalendar(!calendar)
                           }}
                           checked={calendar}/>
                    <div>
                            <span>
                                <FontAwesomeIcon icon={faAngleRight}
                                                 style={arrowRotate}/>
                                {moment(props.today).format("YYYY년 MM월 DD일")}
                            </span>
                        <FontAwesomeIcon icon={faCalendarAlt}/>
                    </div>
                </label>
            </div>
            <div style={{display: `${calendar ? 'block' : 'none'}`}}>
                <Calendar value={props.today}
                          calendarType="US"
                          minDate={props.startDate}
                          maxDate={new Date()}
                          formatDay={(locale, date) => moment(date).format('D')}
                          onChange={
                              (element) => {
                                  props.getDate(
                                      new Date(new Date(element).getTime()),
                                      new Date(new Date(new Date(element).setDate(element.getDate() + 1)).getTime())
                                  );
                              }
                          }/>
            </div>
        </React.Fragment>
    );
};

export default ToolMatchMenu;