import React from 'react';
import { Div,Span,Img } from '../../../../../assets/style'
import { FaRegStar } from 'react-icons/fa'



const BlockChain = () => {
    return <Div >
        <Div h={400} >
            <Div w={300} _pr bg='fe' pl={15} pt={15} className='right ' h={450} >
                <Div bl={[5, 's', 'w']} ml={10} h={20} _t={20} _pa> </Div>
                <Div ml={20} mt={2} fs={20} ><Span b>区块链社区 </Span>
                    <Span fs={12} ml={70}><FaRegStar /><Span fs={16} ml={5} >关注节点</Span></Span>
                </Div>
                <Div className='clearfix'>
                    <Div w={50} mt={15} className='left' ><Img src={require('../../../../../assets/images/common_61_icon.svg')}></Img></Div>
                    <Div className='right' mt={15} jc='sa' w={230}  >
                        <Div>今日</Div>
                        <Div>主题</Div>
                        <Div>铁树</Div>
                    </Div>
                    <Div className='right ' jc='sa' w={230} mt={5} c='d' >
                        <Div>593</Div>
                        <Div>9.5万</Div>
                        <Div>65.5万</Div>
                    </Div>

                    <Div pt={80} fs={12}>
                        讨论风格：建议多回贴，不滥开新贴，同一内容集中在同一主题，参考bitcointalk的讨论风格。
    讨论建议：发贴须言之有物，严禁纯表情或其它无意义的回贴。严禁留QQ号、微信号等即时通类帐号信息以及其他违反版规的行为。<br />
                        商务咨询>><br />
                        申请解封>><br />
                        侵权投诉>><br />
                        意见反馈>><br />
                        风险提示：关于防范变相ICO活动的风险提示 >>本站所提供资讯信息不代表任何投资暗示。
            <Div mt={20} fs={16} b>节点管理员:</Div>
                        <Div jc='sa' mt={20}>
                            <Img src={require('../../../../../assets/images/common_61_icon.svg')}></Img>
                            <Img src={require('../../../../../assets/images/common_61_icon.svg')}></Img>
                            <Img src={require('../../../../../assets/images/common_61_icon.svg')}></Img>
                            <Img src={require('../../../../../assets/images/common_61_icon.svg')}></Img>
                        </Div>
                    </Div>
                </Div>
            </Div>
        </Div>
    </Div>
}

export default BlockChain


