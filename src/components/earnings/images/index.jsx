import React from 'react';
import { Div, Img } from '../../../assets/style'
// import {FiCornerDownRight} from 'react-icons/fi'



const images = () => {
    return (
        <div>
            <Div mt={35} jc='sa' ai='fe' _pr >
                <Div  ai='c' fd='c'  >
                    <Img src={require('../../../assets/images/icon1.png')} alt=""  />
                    <Div mt={40} c='f9'  b>选购算力套餐</Div>
                    {/* <Div _pa ml={250} _t={98} fs={25} bg='i'><FiCornerDownRight/></Div> */}
                </Div>
                <Div  ai='c' jc='c' fd='c' _pr>
                    <Img src={require('../../../assets/images/icon2.png')} alt="" />
                    <Div mt={50} c='f9' b>配置矿机运维</Div>
                    {/* <Div _pa _l={250} _t={58} fs={25}><FiCornerDownRight/></Div> */}
                </Div>
                <Div ai='c'  jc='c' fd='c' _pr>
                    <Img src={require('../../../assets/images/icon3.png')} alt=""  />
                    <Div mt={50} c='f9' b>矿池分配收益</Div>
                    {/* <Div _pa _l={250} _t={35} fs={25}><FiCornerDownRight/></Div> */}
                </Div>
                <Div ai='c'  jc='c' fd='c' _pr>
                    <Img src={require('../../../assets/images/icon4.png')} alt="" />
                    <Div pt={20} c='f9' b>收益钱包到账</Div>
                </Div>
            </Div>
        </div>
    );
}

export default images;