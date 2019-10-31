import React from 'react';
import { Div, Img } from '../../../assets/style';


const Banner = () => {
    return (
        <Div wp={100} hp={100} jc='c' ai='c' fd='c'>
            <Div fs={36}>BLOG.BITMAIN.COM</Div>
            <Div mt={20} mb={20} w={100} h={2} bg='ff'></Div>
            <Div fs={20} c='f9'>加密货币，比特币，比特大陆等</Div>
        </Div>
    )
}

export default Banner;