import React from 'react';
import { Div } from '../../../../assets/style';
import './brief-left.scss';
const BriefLeft = () => {
    return (
        <Div w={800}>
            <Div className="pr">
                <Div className="pa" bg='ff' jc='c' ai='c' fs={30}>BITMAIN</Div>
            </Div>
            <Div pl={215}>
                <Div fs={25} b pt={20} pb={20}>比特大陆</Div>
                <Div c='f6' fs={14}>
                    比特大陆（Bitmain）是一家专注于高速、低功耗定制芯片设计研发的科技公司，成立于2013年初，拥有低功耗高性能的16nm工艺集成电路的量产经验，成功设计量产了多款ASIC定制芯片和集成系统。重点面向世界的中小型企业及个人用户，目前公司客户遍及全球多个国家和地区。公司总部位于中国北京，并在深圳、福州、天津、上海，以及香港、新加坡、美国、以色列、瑞士、荷兰设有子公司。
                </Div>
            </Div>

        </Div>
    )
}

export default BriefLeft;