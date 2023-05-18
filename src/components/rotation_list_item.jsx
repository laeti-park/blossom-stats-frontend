import React, {useEffect, useRef, useState} from "react";
import moment from "moment";

import "moment/locale/ko";

const RotationListItem = (props) => {
    const nextTime = moment(props.count === "end" ? props.map.end_time : props.map.begin_time);
    const [time, setTime] = useState(moment.utc(nextTime.diff(moment())).format("H시간 mm분"));

    function useInterval(callback, delay) {
        const savedCallback = useRef();

        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            function tick() {
                savedCallback.current();
            }

            if (delay !== null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        }, [delay]);
    }

    useInterval(() => {
        setTime(moment.utc(nextTime.diff(moment())).format("H시간 m분"));
    }, 1000);

    return (
        <div className={"rotation__box_item"}>
            <table>
                <thead>
                <tr>
                    <th>
                        <img className={"summary__image-1"}
                             src={`/images/game_mode/${props.map["Map.mode"]}.webp`}
                             alt={props.map["Map.mode"]}/>
                    </th>
                    <th>
                        <div>
                            <div>
                                이름 : {props.map[`Map.name`]}
                            </div>
                            <div>
                                시간 : {`${time}`}
                            </div>
                        </div>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td colSpan={"2"}>
                        <img className={"rotation_banner__image"}
                             src={`/images/game_mode_banner/${props.map["Map.mode"]}.webp`}
                             alt={props.map["Map.mode"]}/>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default RotationListItem;