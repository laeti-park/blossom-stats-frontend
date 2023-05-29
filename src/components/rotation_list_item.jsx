import React, {useEffect, useRef, useState} from "react";
import moment from "moment";

import "moment/locale/ko";

const RotationListItem = (props) => {
    const nextTime = moment(props.count === "end" ? props.map.end_time : props.map.begin_time);
    const diffTime = {
        day: props.count === "end" ?
            moment.duration(nextTime.diff(moment())).days() : 0,
        hour: props.count === "end" ?
            moment.duration(nextTime.diff(moment())).hours() : Math.abs(moment.duration(nextTime.diff(moment())).hours()),
        minute: props.count === "end" ?
            moment.duration(nextTime.diff(moment())).minutes() : Math.abs(moment.duration(nextTime.diff(moment())).minutes()),
    }
    const [time, setTime] = useState(`${diffTime.day}일 ${diffTime.hour}시간 ${diffTime.minute}분`);
    console.log();

    function useInterval(callback, delay) {
        const savedCallback = useRef();

        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

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
        diffTime.day = props.count === "end" ?
            moment.duration(nextTime.diff(moment())).days() : 0;
        diffTime.hour = props.count === "end" ?
            moment.duration(nextTime.diff(moment())).hours() : Math.abs(moment.duration(nextTime.diff(moment())).hours());
        diffTime.minute = props.count === "end" ?
            moment.duration(nextTime.diff(moment())).minutes() : Math.abs(moment.duration(nextTime.diff(moment())).minutes());
        setTime(`${diffTime.day}일 ${diffTime.hour}시간 ${diffTime.minute}분`);
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
                                {props.count === "end" ? "종료까지" : "시작까지"} : {`${time}`}
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