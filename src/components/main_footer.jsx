import React from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGamepad, faMessage, faContactCard, faComputer, faAt} from '@fortawesome/free-solid-svg-icons';

import "../css/footer.css";

const Footer = () => {
    return (
        <footer className={'footer'}>
            <div>
                <a href={'https://github.com/blossom-club/blossom-web-frontend'} target={'_blank'}>
                    <FontAwesomeIcon icon={faGamepad}/> 사이트 소개
                </a>
                <a href={'https://open.kakao.com/o/g6X3nY9c'} target={'_blank'}>
                    <FontAwesomeIcon icon={faMessage}/> 가입 & 문의
                </a>
                <a href={'https://open.kakao.com/me/Laeti_Cre'} target={'_blank'}>
                    <FontAwesomeIcon icon={faContactCard}/> 연락처
                </a>
            </div>
            <div>
                <span><FontAwesomeIcon icon={faComputer}/> 개발 :&nbsp;
                    <a href={'mailto:creator98@naver.com'} target={'_blank'}>
                        <FontAwesomeIcon icon={faAt}/> Laeti
                    </a>
                </span>
            </div>
        </footer>
    )
}

export default Footer;