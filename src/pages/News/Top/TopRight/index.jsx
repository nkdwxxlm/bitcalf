import React from 'react';
import { Div } from '../../../../assets/style';


const TopRight = () => {
    return (
        <Div fs={14} f={1} hp={100}  ai='c' c='f9' fd='rs'>
            <Div pl={10} >图标</Div>
            <Div pl={10} pr={10}>图标</Div>
            <Div pl={10} pr={10}>图标</Div>
            <Div w={1} h={14} bl={[1,'s','f0']}></Div><Div pl={10} pr={10}>登录</Div><Div w={1} h={14} bl={[1,'s','f0']}></Div>
            <Div pl={10} pr={10}>立即注册</Div><Div w={1} h={14} bl={[1,'s','f0']}></Div>
            <Div pl={10} pr={10}>8BTC 国际站</Div>
        </Div>
    )
}

export default TopRight;