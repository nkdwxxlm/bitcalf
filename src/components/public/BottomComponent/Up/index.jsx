import { Div, H1 } from '../../../../assets/style';
import React from 'react';

const Up = () => {
    return (
        <Div >
            <Div jc='c'>
                <H1 className='title' pt={48}>合作伙伴</H1>
            </Div>
            <Div wp={100} h={140} jc='sa' ai='c'>
                <Div jc>ANT<Div>POOL</Div></Div>
                <Div>BTC.com</Div>
                <Div>EXMO</Div>
                <Div>f2pool</Div>
                <Div>ViaBTC</Div>
                <Div>BTC.TOP</Div>
            </Div>
            <Div jc='c' c='f9'>
                + 商务合作
            </Div>
        </Div>
    )
}

export default Up;