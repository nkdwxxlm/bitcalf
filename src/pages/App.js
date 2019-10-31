import React from 'react';
import './App.css';
import Header from '../components/public/header'
import Nav from '../components/public/nav'
import Home from './Home'
import { Route } from 'react-router-dom'
import Hashrate from './Hashrate'
import OrePool from './OrePool';
import News from './News'
import Community from './Community'
import Iec from './Iec'
import Login from './Containers/Login'
import Register from './Containers/Register'
import NotEmail from './Containers/NotEmail'
import ForgotPassword from './Containers/ForgotPassword'
import TheLatest from './Community/Nav/TheLatest'
import Technology from './Community/./Nav/Technology'
import Direcruit from './Community/./Nav/Direcruit'
import Market from './Community/Nav/Market'
import QuestionAnswer from './Community/Nav/QuestionAnswer'
import AMA from './Community/Nav/AMA'
import BTC from './Community/Nav/BTC'
import BTM from './Community/Nav/BTM'
import ETH from './Community/Nav/ETH'
import EOS from './Community/Nav/EOS'
import Candy from './Community/Nav/Candy'
import Security from './Community/Nav/Security'

import Bottom from '../components/public/BottomComponent';
function App(){
  return (
    <div className="App">
      <header>
          <Header />
      </header>
      <nav>
          <Nav/>
      </nav> 
      {/* 页面跳转 */}
       <section >
        <Route path='/' exact component={ Home }/>
        <Route path='/Hashrate' exact component={ Hashrate }/>
        <Route path='/OrePool' exact component={ OrePool }/>
        <Route path='/News' exact component={ News }/>
        <Route path='/Community' exact component={ Community }/>
        <Route path='/Iec' exact component={ Iec }/>
        <Route path='/Login' exact component={ Login }/>
        <Route path='/Register' exact component={ Register }/>
        <Route path='/NotEmail' exact component={ NotEmail }/>
        <Route path='/ForgotPassword' exact component={ ForgotPassword }/>
        <Route path='/Community/TheLatest' exact component={TheLatest} />
            <Route path='/Community/Technology' exact component={Technology} />
            <Route path='/Community/Direcruit' exact component={Direcruit} />
            <Route path='/Community/Market' exact component={Market} />
            <Route path='/Community/QuestionAnswer' exact component={QuestionAnswer} />
            <Route path='/Community/AMA' exact component={AMA} />
            <Route path='/Community/BTC' exact component={BTC} />
            <Route path='/Community/BTM' exact component={BTM} />
            <Route path='/Community/ETH' exact component={ETH} />
            <Route path='/Community/EOS' exact component={EOS} />
            <Route path='/Community/Candy' exact component={Candy} />
            <Route path='/Community/Security' exact component={Security} />
      </section>
      <footer>
         {/* <Footer/> */}
         <Bottom/>
      </footer> 
    </div>
  );
}


export default App;
