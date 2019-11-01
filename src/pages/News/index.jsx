import React from 'react';
import { Div } from '../../assets/style';
import './news.scss';
import Banner from './Banner';
import Nav from './Nav';
import Brief from './Brief';
import Top from './Top';
import Section from './Section';
export default () => {
    return (
        <Div bg="ff">

            {/*     top */}
            <Div wp={100} jc='c' bg='f3'>
                <Div w={1160} h={40}>
                    <Top />
                </Div>
            </Div>
            {/*     nav  */}
            <Div wp={100} jc='c' >
                <Div w={1160} h={70}>
                    <Nav />
                </Div>
            </Div>
            {/*     banner */}
            <Div wp={100} h={400} bg='i' jc='c' ai='c'>
                <Div w={500} h={200} bg='f0' c='ff'>
                    <Banner />
                </Div>
            </Div>

            {/*     brief */}
            <Div wp={100} h={200} jc='c'>
                <Div w={1160} h={200}  >
                    <Brief />
                </Div>
            </Div>
            {/*     section */}
            <Div wp={100} jc='c' className='news'>
                <Div w={1160}>
                    <Section />
                </Div>
            </Div>
        </Div>

    )
}