import React from 'react';
import { Div, Button, Img } from '../../../../assets/style';
import './index.css';

const Electricityfees = () => {
    return (
        <Div>
            <Div w={300} h={85} fs={18} jc="sb" ai="c" ml={50} >
                算力费
             <Div>$2574</Div>
            </Div>
            <Div w={1100} h={265} bg="fe" fd="cr" className="ass">
                <Div w={200} jc="c" mt={70} >
                    电费缴纳天数
              </Div>
                <Div fd="c">
                    <Div jc="sb" mt={35} >
                        <Button w={120} h={40} r={3} jc="c" ai="c" fs={17}>10</Button>
                        <Button w={120} h={40} r={3} ml={30} jc="c" fs={17} ai="c">20</Button>
                        <Button w={120} h={40} r={3} ml={30} jc="c" fs={17} ai="c">30</Button>
                        <Button w={120} h={40} r={3} ml={30} jc="c" fs={17}  ai="c">40</Button>
                    </Div>
                    <Div className="asb" jc="c">输入天数（——）</Div>
                    <Div className="asc"  ai="c" c="w" > <Img ml={20}  src={require("../../../../assets/images/WX20191028-173052.png") } />套餐中未缴纳的电费剩余天数可以后续支付
                    </Div>
                </Div>
            </Div>

        </Div>
    )
}
export default Electricityfees;