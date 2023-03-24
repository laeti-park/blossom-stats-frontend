import React, {useState} from 'react';
import styled from 'styled-components';
import {Link, Route, Routes} from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';

import Index from './pages';
import Member from './pages/member';
import Member_Profile from './pages/member_profile';
import Brawler from "./pages/brawler";
import BrawlerRecords from './pages/brawler_records';
import Record from "./pages/battle";
import Season from "./pages/season";
import Footer from "./components/main_footer";

import './css/index.css';
import './css/header.css';
import './css/table.css';
import './css/calendar.css';

function App() {
    const [isToggled, setIsToggled] = useState(false);

    return (
        <React.Fragment>
            <div className='title'>
                <Link to='/'
                      onClick={() => setIsToggled(!isToggled)}>
                    <img src={require(`./images/blossom_logo/blossom_logo_horizontal.png`)}
                         alt={'Blossom Logo'}/>
                </Link>
            </div>
            <Header isToggled={isToggled}>
                <div className={'container_menu'}>
                    <img className='logo'
                         src={require(`./images/blossom_logo/blossom_icon.png`)}
                         alt={'Blossom Icon'}/>
                    <div className='toggle'
                         onClick={() => {
                             setIsToggled(!isToggled);
                         }}>
                        <FontAwesomeIcon icon={!isToggled ? faBars : faTimes}/>
                    </div>
                    <ul className={'header__list-menu'}>
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
                        <li className='header__list-item'>
                            <Link to='/battle'
                                  onClick={() => setIsToggled(!isToggled)}>일일기록</Link>
                        </li>
                        <li className='header__list-item'>
                            <Link to='/season'
                                  onClick={() => setIsToggled(!isToggled)}>시즌기록</Link>
                        </li>
                    </ul>
                </div>
            </Header>
            <Routes>
                <Route path='/' element={<Index/>}/>
                <Route path='/member' element={<Member/>}/>
                <Route path='/member/:id' element={<Member_Profile/>}/>
                <Route path='/brawler' element={<Brawler/>}/>
                <Route path='/brawler/:id' element={<BrawlerRecords/>}/>
                <Route path='/battle' element={<Record/>}/>
                <Route path='/season' element={<Season/>}/>
            </Routes>
            <Footer/>
        </React.Fragment>
    );
}

const Header = styled.div`
  align-items: center;
  background-color: #343A40;
  color: white;

  .header__list-menu {
    list-style: none;
    display: flex;
    column-gap: 20px;
  }

  @media screen and (max-width: 768px) {
    .header__list-menu {
      display: ${(props) => (props.isToggled ? 'flex' : 'none')};
      flex-direction: column;
      width: 100%;
      margin: 0 0;
      padding: 0 20px 10px 20px;
    }
  }
`;

export default App;