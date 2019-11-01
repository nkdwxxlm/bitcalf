import React from 'react';
import { Div, Span, Img } from '../../../../assets/style';
import './index.css'
const Orderinformation = () => {
    return (
        <Div>
            <Div fs={20} w={85} h={35} mt={55} className="order"> 订单信息</Div>
            <Div className="orc"></Div>
            <Div b={[1, "s", "fc"]} mt={20} w={1100} h={185} fs={22} > <Div jc="c" mt={35} > <b>该订单的预计生效日期为<Span c="w"> 2019.10.30</Span></b> </Div>
                <Div jc="c" mt={20}>
                    <Div w={1020} h={76} fs={18} bg="fe" c="f3" ai="c" jc="c" > <Img src={require("../../../../assets/images/WX20191028-172949.png")} />  现在下单即可享受 30 天免费挖矿</Div>
                </Div>
            </Div>
        </Div>
    )
}
export default Orderinformation;
