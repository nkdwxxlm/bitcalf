import React from 'react';
import { Div, Img } from '../../../../assets/style';
import './index.css';
import { IoIosArrowDown,IoMdArrowDropdownCircle } from "react-icons/io";


const Orderdetails = () => {
    return (
        <Div w={1100} h={675} mt={20} bg="fe" fs={14} c="f6"   >
            <Div jc="fs"  >
                <Div mt={33} ai="c" ml={50} h={38} w={150}>
                    <Div>币种</Div>
                </Div>
                <Div b={["1" ,"s" ,"fc"]} bg="ff" w={195}  h={38} jc="sa" ai="c"  mt={33} r={3} >
                    <Div ml={-25}  fs={15}>Bitcoin</Div> 
                    <Div mr={-25} mt={5}><IoIosArrowDown /></Div></Div>
                <Div h={38} w={200} ai="c" mt={33}>
                    <Div ml={5} c="f3">(SHA256矿机共享套餐)</Div>
                </Div>
            </Div>
            <Div jc="fs"  >
                <Div mt={33} ai="c" ml={50} h={38} w={150}>
                    <Div>机型</Div>
                </Div>
                <Div h={38} w={200} ai="c" mt={33}>
                    <Div ml={5} fs={20} c="f3" >蚂蚁矿机15系列</Div>
                </Div>
            </Div>
            <Div jc="fs"  >
                <Div mt={33} ai="c" ml={50} h={38} w={150}>
                    <Div>算力</Div>
                </Div>
                <Div h={38} w={200} ai="c" mt={33}>
                    <Div w={145} h={38} b={["1", "s", "fc"]} ai="c" jc="c" r={["4", "0", "0", "4"]} >蚂蚁矿机15系列</Div>
                    <Div w={74} h={38} b={["1", "s", "fc"]} ai="c" jc="c" r={["0", "4", "4", "0"]} className="bl" >TH/s</Div>
                </Div>
            </Div>
            <Div jc="fs"  >
                <Div mt={33} ai="c" ml={50} h={38} w={150}>
                    <Div>套餐周期</Div>
                </Div>
                <Div b={["1" ,"s" ,"fc"]}  w={195} h={38} fs={15} jc="sa" mt={33} ai="c" r={3}>
                    <Div ml={-20}> 300天 </Div>
                <Div  mr={-30} >
                <IoIosArrowDown />
                </Div>
                </Div>
                <Div h={38} w={200} ai="c"  mt={33}>
                    <Div ml={15} c="p" fs={15}>300天</Div>  
                    <Div c="f3">（2019.10.30）</Div>
                    <Img src={require("../../../../assets/images/WX20191028-173052.png")} />
                </Div>
            </Div>
            <Div jc="fs"  >
                <Div mt={33} ai="c" ml={50} h={38} w={150}>
                    <Div>优惠卷</Div>
                </Div>
                <Div b={["1" ,"s" ,"fc"]} w={195} h={45} bg="ff" fs={15} jc="sb" ai="c" mt={33} r={3} >
                <Div ml={25} >无可用</Div>    
                    <Div mr={20} fs={15} c="f3"><IoMdArrowDropdownCircle /></Div></Div>
            </Div>
            <Div jc="fs"  >
                <Div mt={33} ai="c" jc="c"  h={38} w={150}>
                    <Div ml={10}>矿池
                    <Img src={require("../../../../assets/images/WX20191028-173052.png")} />
                    </Div>
                </Div>
                <Div b={["1" ,"s" ,"fc"]} bg="ff" w={150} ml={60} h={45} jc="c" ai="c" mt={33} r={5}  fs={14}  mr={33} >Antpool </Div>
                <Div b={["1" ,"s" ,"fc"]} bg="ff" w={150} ml={10} h={45} jc="c" ai="c" mt={33} r={5}  fs={14}  mr={33} >Antpool </Div>
                <Div b={["1" ,"s" ,"fc"]} bg="ff" w={150} ml={10} h={45} jc="c" ai="c" mt={33} r={5}  fs={14}  mr={33} >Antpool </Div>
                <Div b={["1" ,"s" ,"fc"]} bg="ff" w={150} ml={10} h={45} jc="c" ai="c" mt={33} r={5}  fs={14}  mr={33} >Antpool </Div>
                <Div b={["1" ,"s" ,"fc"]} bg="ff" w={150} ml={10} h={45} jc="c" ai="c" mt={33} r={5}  fs={14}  mr={33} >Antpool </Div>
            </Div>
            <Div ml={200} >
                <Div ml={5} mt={5} fs={18} c="f3" >订单生效之后再修改矿池</Div>
            </Div>

            <Div jc="fs"  >
                <Div mt={33} ai="c" ml={50} h={38} w={150}>
                    <Div>收款方式</Div>
                </Div>
                <Div b={["1","s","fc"]} w={195} h={50} jc="c" ai="c" bg="ff" c="f3"  mt={33} r={3} fs={15} >打款至我的个人钱包</Div>
            </Div>

            <Div jc="fs"  >
                <Div mt={33} ai="c" ml={50} h={38} w={150}>
                    <Div>BTC收币地址</Div>
                </Div>
                <Div b={["1","s","fc"]}  w={230} bg="ff" h={60} mt={22} c="f3" r={3} jc="c" ai="c" fs={15} >+添加新的BTC地址</Div>
            </Div>
            <Div className="bt" ></Div>
        </Div>
    )
}
export default Orderdetails;