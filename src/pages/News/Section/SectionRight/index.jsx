import React, { Fragment , PureComponent} from 'react';
import { Div, Img } from '../../../../assets/style';
// import { IoIosRadioButtonOff } from "react-icons/io";
import { Tabs } from 'antd';
import './section-right.scss';
class SectionRight extends PureComponent {
   

   
render(){

 const {TabPane} = Tabs;

    return (
        
        <Fragment>
            <Div f={1} mt={30} ml={25}>
                <Div>
                    <Tabs defaultActiveKey="1" className="tab-right">
                        <TabPane tab="BTC" key="1">
                        <Img wp={100} src={require("../../../../assets/images/icon3.png")}    />
                        </TabPane>
                        <TabPane tab="ETH" key="2">
                        <Img wp={100} src={require("../../../../assets/images/icon1.png")}    />
                        </TabPane>  
                        <TabPane tab="BTM" key="3">
                        <Img wp={100} src={require("../../../../assets/images/icon2.png")}    />
                        </TabPane>  
                        <TabPane tab="BCH" key="4">
                        <Img wp={100} src={require("../../../../assets/images/icon4.png")}    />
                        </TabPane>  
                        <TabPane tab="EOS" key="5">
                        <Img wp={100} src={require("../../../../assets/images/icon3.png")}    />
                        </TabPane>      
                    </Tabs>   
                </Div>
                <Div mt={30}>
                    <Div bg="fe" pt={25} pb={25} pl={20} pr={20} >
                        <Div jc='sb'>
                            <Div pl={10} bl={[3, 's', 'w']} h={20} ai='c' fs={20} b>快讯</Div><Div c="f6">更多 ></Div>
                        </Div>
                        <Div fs={12} mt={20} bl={[1, 'd','f9']} _pr pl={20} >
                            <Div jc>
                                <Div w={10} h={10} b={[1, 's']} r={5} className = "circle"></Div><Div c='f9' >发布于 16 小时之前</Div>
                            </Div>
                            <Div fs={20} cp>【北京首次使用区块链技术实现一键立案】
                            <Div fs={16} c='f6'>10月28日，在一起网络侵权纠纷案件中,对于被告未如约履行调解协议的行为,原告通过点击北京互联网法院电子诉讼服务平台的“未履行完毕”按键,使该案一键进入了执行系统。此案也是全国法院系统首例采用区块链智能合约技术实现的执行“一键立案”。据介绍,传统执行立案步骤包括:确认是否按期履行,核对申请执行期限,申请执行,填写、上传当事人信息、执行申请书、执行依据等信息材料。而在区块链智能合约嵌入调解书案件中,当事人仅需点击“未履行完毕”按钮,即可跳过后续繁复程序直接完成执行立案,后台将通过区块链智能合约技术自动生成未履行报告、执行申请书、抓取当事人信息、抓取执行依据、自动执行立案、生成执行通知书、报告财产令等。</Div>
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </Div>
        </Fragment>
    )
}
}

export default SectionRight;