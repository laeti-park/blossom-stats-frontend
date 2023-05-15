import React from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGamepad, faTasks, faContactCard, faComputer, faAt} from '@fortawesome/free-solid-svg-icons';

import "../css/footer.css";

const Footer = () => {
    return (
        <footer className={'footer'}>
            <div>
                <a href={'https://github.com/blossom-club/blossom-web-frontend'} target={'_blank'}>
                    <FontAwesomeIcon icon={faGamepad}/> 사이트 소개
                </a>
                <a href={'https://open.kakao.com/me/Laeti_Cre'} target={'_blank'}>
                    <FontAwesomeIcon icon={faContactCard}/> 연락처
                </a>
                <a href={"https://laeti-park.notion.site/Blossom-Stats-To-Do-List-ac506cb69cb048d9b44fe2bb2ad14391"} target={'_blank'}>
                    <FontAwesomeIcon icon={faTasks}/> 개발 진행사항
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