import React from 'react';
import { Div } from '../../../../assets/style';


const TopLeft = () => {
    return (
        <Div w={750} hp={100}  ai='c' c='f9' fs={14}>
            <Div jc>
                8BTCCI:<Div pl={10} pr={20}>33%</Div>
            </Div>
            <Div jc>
                8BTCVI:<Div pl={10} pr={20}>33%</Div>
            </Div>
            <Div jc>
                24H成交额:<Div pl={10} pr={20}>33%</Div>
            </Div>
            <Div jc>
                总市值:<Div pl={10} pr={20}>33%</Div>
            </Div>
        </Div>
    )
}

export default TopLeft;