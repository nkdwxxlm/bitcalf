import React from 'react';
import { Div, Span, Img } from '../../../../assets/style';
import './index.css';

const Costofcalculation = () => {
    return (
        <Div>
            <Div jc="sb" fs={20} className="df" >
                <Div w={343} h={80} ml={100} ai="c" >电费</Div>
                <Div w={706} h={80} ai="c" >97.00 =$0.0970天</Div>
            </Div>
            <Div jc="sb" fs={20} >
                <Div w={343} h={80} ml={100} ai="c" >总计</Div>
                <Div w={706} h={80} ai="c" fs={30}>$6545</Div>
            </Div>
            <Div fd="c"  >
                <Div w={380} h={45}  ai="c" jc="c" className="dd" ml={420}> <Img src={require("../../../../assets/images/WX20191028-173052.png") } /> 该预售订单预计开始挖矿时间为2019.10.10</Div>
                <Div w={310} h={60} jc="c" ai="c" bg="fc" c="ff" ml={420} mt={30}>确定</Div>
                <Div jc="c" mt={20} >
                  <input type="Checkbox" className="du"  bg="p" ></input> <Div>我接受<Span c="p">比特小牛用户服务协议</Span></Div>
                </Div>
                <Div jc="c" mt={5} >如果你没有以下支付方式，请通过右下角的反馈入口联系客服</Div>
            </Div>
             <Div w={1100} h={140} bg="fe" jc="fs" mt={20}>
                 <Div w={200} h={140}> <Div ml={30} mt={39}>支付方式</Div>  </Div>
                 <Div w={900}  fw="w" mt={30} >
                 <Div w={150} h={40} jc="c" ai="c"><Img src={require("../../../../assets/images/WX20191028-173111.png") } /> BTC </Div>
                 <Div w={150} h={40} jc="c" ai="c"><Img src={require("../../../../assets/images/WX20191028-173111.png") } /> BCH </Div>
                 <Div w={150} h={40} jc="c" ai="c"><Img src={require("../../../../assets/images/WX20191028-173111.png") } /> ETH </Div>
                 <Div w={150} h={40} jc="c" ai="c"><Img src={require("../../../../assets/images/WX20191028-173111.png") } /> LTC </Div>
                 <Div w={150} h={40} jc="c" ai="c"><Img src={require("../../../../assets/images/WX20191028-173111.png") } /> DASH </Div>
                 <Div w={150} h={40} jc="c" ai="c"><Img src={require("../../../../assets/images/WX20191028-173111.png") } /> T/T </Div>
                 <Div w={150} h={40} ml={30}  jc="c" ai="c"><Img src={require("../../../../assets/images/WX20191028-173111.png") } /> USDT(OMU) </Div>
                 </Div>
             </Div>
        </Div>

    )
}
export default Costofcalculation;