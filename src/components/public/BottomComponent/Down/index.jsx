import { Div } from '../../../../assets/style';
import React from 'react';

const Down = () => {
    return (
        <Div mt={67} jc='sb' >
            <Div>
                <Div fs={22} b>BITDEER</Div>
                <Div fs={14} c='f9' pt={18} fs={12} jc>copyright <Div ml={10} mr={10} mt={3} jc='c' ai='c' w={12} h={12} r={6} b={[1, 's', 'f9']}>c</Div> 2019 BitDeer All Rights Reserved</Div>
            </Div>
            <Div>
                <Div>产品</Div>
                <Div fs={14} c='f9'>
                    <Div mt={19}>矿机共享套餐</Div>
                    <Div mt={15}>计算器</Div>
                </Div>
            </Div>
            <Div>
                <Div>信息</Div>
                <Div fs={14} c='f9'>
                    <Div mt={19}>关于我们</Div>
                    <Div mt={15}>联系我们</Div>
                    <Div mt={15}>公告中心</Div>
                    <Div mt={15}>新闻</Div>
                </Div>
            </Div>
            <Div>
                <Div>支持</Div>
                <Div fs={14} c='f9'>
                    <Div mt={19}>商务合作</Div>
                    <Div mt={15}>帮助中心</Div>
                    <Div mt={15}>提交共单</Div>
                    <Div mt={15}>隐私条款</Div>
                    <Div mt={15}>用户条款</Div>
                </Div>
            </Div>
            <Div bl={[1,'s','f9']} h={176} pl={30}>
                <Div>主要汇率</Div>
                <Div fs={14} c='f9'>
                    <Div mt={18} jc>1&nbsp; BTC = 7439.59&nbsp;美元<Div pl={13}></Div>1BCH = 212.27美元</Div>
                    <Div mt={18} jc>1 &nbsp;ETH = 161.15&nbsp;美元<Div pl={30}></Div>1ETC = 4.25美元</Div>
                    <Div mt={18} jc>1 &nbsp;DCR = 12.87&nbsp;美元<Div pl={31}></Div>1LTC = 49.38美元</Div>
                    <Div mt={18} jc>1&nbsp; ZEC = 33.39&nbsp;美元<Div pl={30}></Div>1DASH = 62.81美元</Div>
                </Div>

            </Div>
        </Div>
    )
}

export default Down;