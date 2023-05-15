import React from "react";
import FriendsItem from "./member_profile_friend_item"

const ProfileFriend = (props) => {
    return (
        <React.Fragment>
            <div className={'row__box-3'}>
                <h2>친밀도<span>({
                    props.friendsPoint !== null && props.friendsPoint.total_point !== undefined ?
                        props.friendsPoint.total_point : 0}점)</span></h2>
                <div className={'summary__list-2'}>
                    {
                        props.friendsGroup !== undefined ?
                            props.friendsGroup.map(friend => {
                                const friendInfo = props.friends.filter(item => item.friend_id === friend.friend_id)
                                return (
                                    <FriendsItem key={friend.friend_id}
                                                 friend={friend}
                                                 friendInfo={friendInfo}/>
                                )
                            }) : null
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProfileFriend;