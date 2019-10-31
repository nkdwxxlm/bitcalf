import React from 'react';
import { Div } from '../../assets/style'
import { Route } from 'react-router-dom'
import Nav from './Nav'
import TheLatest from './Nav/TheLatest'
import Technology from './Nav/Technology'
import Direcruit from './Nav/Direcruit'
import Market from './Nav/Market'
import QuestionAnswer from './Nav/QuestionAnswer'
import AMA from './Nav/AMA'
import BTC from './Nav/BTC'
import BTM from './Nav/BTM'
import ETH from './Nav/ETH'
import EOS from './Nav/EOS'
import Candy from './Nav/Candy'
import Security from './Nav/Security'
import './index.css'




const Community = () => {
    return <Div className='Community'>
        <nav>
            <Nav/>
        </nav>
        <section>
            <Route path='/Community' exact component={TheLatest} />
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
    </Div>
}

export default Community

