import React from "react";
import FriendsItem from "./member_profile_friend_item"

const ProfileFriend = (props) => {
    return (
        <React.Fragment>
            <div className={'row__box-3'}>
                <h2>친밀도<span>({
                    props.friendsPoint !== null && props.friendsPoint.FRIEND_PT_TOT !== undefined ?
                        props.friendsPoint.FRIEND_PT_TOT : 0}점)</span></h2>
                <div className={'summary__list-2'}>
                    {
                        props.friendsGroup !== undefined ?
                            props.friendsGroup.map(friend => {
                                const friendInfo = props.friends.filter(item => item.FRIEND_ID === friend.FRIEND_ID)
                                return (
                                    <FriendsItem key={friend.FRIEND_ID}
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