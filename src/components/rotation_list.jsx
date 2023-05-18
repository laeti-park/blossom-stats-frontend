import React from "react";
import RotationListItem from "./rotation_list_item";

import "../css/rotation.css";

const rotationMaps = [1, 3, 4, 6, 33, 2, 5, 8]
const challengeMaps = [20, 21, 22, 23, 24, 25, 26]

const rotationTable = (map, count) => {
    if (map !== undefined) {

        return (
            <RotationListItem key={`${map.map_id}_${map["Map.mode"]}_${map.begin_time}`}
                              map={map}
                              count={count}
            />
        )
    }
    return null;
}

const RotationList = ({rotation}) => {
    console.log(rotation);
    return (
        <React.Fragment>
            <div>
                <div className={"rotation__head"}>
                    <img className='summary__image-1'
                         src={require('../images/game_icon/random.webp')}
                         alt='random'/>
                    <span>현재 로테이션</span>
                </div>
                <div className={"rotation__box"}>
                    {
                        rotationMaps.map(slotID => {
                            return rotationTable(rotation[`${slotID}`]?.at(0), "end");
                        })
                    }
                </div>
            </div>
            <div>
                <div className={"rotation__head"}>
                    <img className={"summary__image-1"}
                         src={`/images/game_mode/challenge.webp`}
                         alt={"challenge"}/>
                    <span>챌린지 이벤트</span>
                </div>
                <div className={"rotation__box"}>
                    {
                        challengeMaps.map(slotID => {
                            return rotationTable(rotation[`${slotID}`]?.at(0), "end");
                        })
                    }
                </div>
            </div>
            <div>
                <div className={"rotation__head"}>
                    <img className='summary__image-1'
                         src={require('../images/game_icon/refresh.webp')}
                         alt='random'/>
                    <span>내일 로테이션</span>
                </div>
                <div className={"rotation__box"}>
                    {
                        rotationMaps.map(slotID => {
                            return rotationTable(rotation[`${slotID}`]?.at(rotation[`${slotID}`]?.length - 1), "start");
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    );
}

export default RotationList;