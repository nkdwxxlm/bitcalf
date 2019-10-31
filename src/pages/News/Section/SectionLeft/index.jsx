import React, { Fragment } from 'react';
import { Div, Img } from '../../../../assets/style';
import { FiEye } from "react-icons/fi";
import './section-left.scss';

const SectionLeft = () => {
    return (
        <Fragment>
            <Div fd='c' w={850}>
                <Div bt={[1, 'd', 'f9']} bb={[1, 'd', 'f9']} wp={100}  h={220} ai='c' mt={30} className="section-left">
                    <Div jc>
                        <Img w={280} h={160} src={require("../../../../assets/images/banner.png")} />
                        <Div pl={20}>
                            <Div fs={20}>区块链行业人员分布大调查：42%的从业者是交易所员工</Div>
                            <Div fs={14} c='f6' pt={10}>员工最多的是矿机生厂商比特大陆，达到1500人</Div>
                            <Div mt={78} fs={14}>
                                <Div ai='c'>
                                    <Img mr={5} w={30} h={30} src={require('../../../../assets/images/common_61_icon.svg')} />
                                    <Div>高手</Div>
                                    <Div w={5} h={5} r={2.5} bg='fc' ml={8} mr={8}></Div>
                                    <Div c='f9'>23分钟前</Div>
                                    <Div w={5} h={5} r={2.5} bg='fc' ml={8} mr={8}></Div>
                                    <Div w={80} bg='fe' jc='c' ai='c' r={10} fs={14} mr={8} c='w'>比特大陆</Div>
                                    <Div w={80} bg='fe' jc='c' ai='c' r={10} fs={14} mr={8} c='w'>高手兄</Div>
                                    <Div c='f9' pr={5} pt={3} ml={140}><FiEye /></Div><Div c='f9'>88888</Div>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                </Div>
                <Div  mt={20}>
                    <Div  wp={100} h={40} jc='c' ai='c' bg='fe' c='f0'>查看更多</Div>
                </Div>
            </Div>
        </Fragment>

    )
}

export default SectionLeft;