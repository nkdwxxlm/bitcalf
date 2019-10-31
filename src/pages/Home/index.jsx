import React from 'react';
import { Div } from '../../assets/style'
import Section from '../../components/section'
import Market from '../../components/market'
import Earnings from '../../components/earnings';
import Platform from '../../components/platform';


const Home = () => {
    return (
        <div>
            <Div>
                <Section />
                <Market />
                <Earnings />
                <Platform />
            </Div>
        </div>
    );
}

export default Home;