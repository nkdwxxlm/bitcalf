import React from 'react';
import { Div } from '../../../../assets/style'
import './index.css'
import SlideShow from './SlideShow'
import Posts from './Posts'
import BlockChain from './BlockChain'
import RecentNews from './RecentNews'
import Reading from './Reading'
import HotList from './HotList'
import HotComments from './HotComments'



const TheLatest = () => {
    return <Div bg='ff'>
        <SlideShow />
        <Div jc='c' >
            <Posts />
            <BlockChain />
        </Div>
        <RecentNews />
        <Reading/>
        <HotList/>
        <HotComments/>
    </Div>

}



export default TheLatest