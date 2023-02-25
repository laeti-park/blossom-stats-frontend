import React, {useState} from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link, Route, Routes} from 'react-router-dom';
import Index from './pages';
import Member from './pages/member';

import './css/index.css';
import './css/header.css';
import './css/table.css';
import './css/nav.css';
import './css/info.css';
import './css/calendar.css';

import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import Brawler from "./pages/brawler";
import Record from "./pages/record";
import Season from "./pages/season";

function App() {
    const [isToggled, setIsToggled] = useState(false);

    return (
        <div>
            <div className='title'>
                <Link to='/'
                      onClick={() => setIsToggled(!isToggled)}>
                    <img src={'images/blossom_logo/blossom_logo_horizontal.png'}
                         alt={'Blossom Logo'}/>
                </Link>
            </div>
            <Header isToggled={isToggled}>
                <div
                    className='toggle'
                    onClick={() => {
                        setIsToggled(!isToggled);
                    }}
                >
                    <FontAwesomeIcon icon={!isToggled ? faBars : faTimes}/>
                </div>
                {/* Apple 로고 */}
                <img className='logo' src={'images/blossom_logo/blossom_icon.png'} alt={'Blossom Icon'}/>
                {/* 메뉴 리스트 */}
                <ul className='header__menu-list'>
                    <li className='header__list-item'>
                        <Link to='/'
                              onClick={() => setIsToggled(!isToggled)}>메인</Link>
                    </li>
                    <li className='header__list-item'>
                        <Link to='/member'
                              onClick={() => setIsToggled(!isToggled)}>클럽원</Link>
                    </li>
                    <li className='header__list-item'>
                        <Link to='/brawler'
                              onClick={() => setIsToggled(!isToggled)}>브롤러</Link>
                    </li>
                    {/*<li className='header__list-item'>
                        <Link to='/rotation'>로테이션</Link>
                    </li>*/}
                    <li className='header__list-item'>
                        <Link to='/record'
                              onClick={() => setIsToggled(!isToggled)}>일일기록</Link>
                    </li>
                    <li className='header__list-item'>
                        <Link to='/season'
                              onClick={() => setIsToggled(!isToggled)}>시즌기록</Link>
                    </li>
                </ul>
            </Header>
            <Routes>
                <Route path='/' element={<Index/>}/>
                <Route path='/member' element={<Member/>}/>
                <Route path='/brawler' element={<Brawler/>}/>
                <Route path='/record' element={<Record/>}/>
                <Route path='/season' element={<Season/>}/>
            </Routes>
        </div>
    );
}

const Header = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  color: white;
  background-color: #343a40;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
    flex-wrap: wrap;
    
    .header__right {
      display: ${(props) => (props.userToggled ? 'flex' : 'none')};
      flex-direction: column;
      width: 100%;
      background-color: #343a40;
    }

    .header__menu-list {
      display: ${(props) => (props.isToggled ? 'flex' : 'none')};
      flex-direction: column;
      width: 100%;
      background-color: #343a40;
      margin: 0 0;
      padding: 10px 20px;
    }

    .header__menu-list li,
    .header__right li {
      margin: 1rem 0;
      padding: 0;
    }

    .toggle {
      display: block;
    }
  }
`;

export default App;