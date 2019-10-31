import React from 'react';
import { Div } from '../../../assets/style'
import {FaBitcoin} from 'react-icons/fa'
import './index.css'


export default ()=> {
        return (
            <div>
                <Div   w={1135}  jc='sb' mt={69} c='ff' pl={25}>
                    <Div  h={268} w={340} bg='bg'  _pr>
                        <Div jc='c' ai='c' fs={58} mt={38} ><FaBitcoin/></Div>
                        <Div jc='c' c='f3' fs={18} mt={25} >BTC/BCH</Div>
                        <Div jc='c' c='f6' fs={11} mt={16} >主流BTC BCH算力矿池</Div>
                        <Div jc='c' c='f6' fs={15} mt={25}>最新牛市行情</Div>
                        <Div   bg='s' w={340} _pa _b={0} h={41} jc='c' ai='c'>
                        静态收益 - 24.74%
                        </Div>
                    </Div> 
                    <Div h={268} w={340}  bg='bg' _pr>
                    <Div jc='c' ai='c' fs={58} mt={38} ><FaBitcoin/></Div>
                        <Div jc='c' c='f3' fs={18} mt={25} >ETH</Div>
                        <Div jc='c' c='f6' fs={11} mt={16} >ETH算力矿池 区块链2.0</Div>
                        <Div jc='c' c='f6' fs={15} mt={25}>最新牛市行情</Div>
                    <Div   className='bgColor' w={340} _pa _b={0} h={41} jc='c' ai='c'> 
                        静态收益 - 12.74%
                    </Div>
                    </Div>
                    <Div  h={268} w={340}  bg='bg' _pr _z={9}>
                    <Div jc='c' ai='c' fs={58} mt={38} ><FaBitcoin/></Div>
                        <Div jc='c' c='f3' fs={18} mt={25} >BCT</Div>
                        <Div jc='c' c='f6' fs={11} mt={16} >小牛币算力矿池 收益潜力巨大</Div>
                        <Div jc='c' c='f6' fs={15} mt={25}>最新牛市行情</Div>
                    <Div   bg='p' w={340} _pa _b={0} h={41} jc='c' ai='c'>
                    静态收益 - 74.74%
                    </Div>
                    </Div>
                    </Div>
                <Div  jc='c' ai='c'  w={1135} mt={85} fs={12} >
                    以上静态收益率为该专区内多个套餐的最大值，查看 <Div c='s' cp >静态收益率的计算规则</Div>
                </Div>
                
            </div> 
        )
}

