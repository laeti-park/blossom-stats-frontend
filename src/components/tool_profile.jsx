import React from "react";
import {CopyToClipboard} from "react-copy-to-clipboard";

const ToolProfile = (props) => {
    return (
        <React.Fragment>
            <div className={'row_box_1'}>
                <img className={'profile_image'}
                     src={`/images/profile_pictures/${props.profile}.webp`}
                     alt={'프로필'}/>
                <div>
                    <h1>{props.name}</h1>
                    <p>{props.id}</p>
                </div>
            </div>
            <div className={'row_box_3'}>
                <CopyToClipboard className={'clipboard'} text={props.id}
                                 onCopy={() => alert('태그를 복사했습니다.')}>
                    <span>태그 복사</span>
                </CopyToClipboard>
                <CopyToClipboard className={'clipboard'} text={props.id}><a
                    href={'brawlstars://'}>태그 복사 + 브롤스타즈 실행</a>
                </CopyToClipboard>
            </div>
        </React.Fragment>
    )
}

export default ToolProfile;