import React from 'react';
import { Div,Span } from '../../../../../assets/style'
import './index.css'



const HotList = () => {
    return <Div bg='ff' jc='c'>
        <Div h={450}  w={1160}   fd="rs" mt={20}>
            <Div w={300} _pr bg='fe' pl={15} pt={15} className='right ' h={450}  >
                <Div bl={[5, 's', 'w']} ml={10} h={20} _t={20} _pa> </Div>
                <Div ml={20} mt={2} fs={20} ><Span b>热贴榜</Span>
                <Span fs={14} ml={70}>本周最热 / 本月最热</Span>
                <Div w={250}  mt={30} bb={[1,'d']} pb={20}>
                    <Div w={20} h={20} bg='w' b={[1,'s']} jc='c' ai='c' r={[5]} className='left' mr={15}>1</Div>
                    <Div className='Overflow' fs={14} b>【盖楼空投】Bitsoda拼团抢购第五期3132132</Div>
                    <Div ml={25} fs={12}>关于BitsodaBitsoda.com成立于2019年3月，</Div>
                </Div>
                </Div>

            </Div>
        </Div>
    </Div>
}

export default HotList


