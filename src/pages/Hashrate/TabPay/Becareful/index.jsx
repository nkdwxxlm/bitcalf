import React from 'react';
import { Div } from '../../../../assets/style';

const Becareful = () => {
    return (
        <Div w={1100}  h={500}  bg="fe" mt={20} jc="c">
            <Div w={1030}>
            <Div mt={30} c="f9">注意事项:</Div>
            <Div mt={10}><b>法律声明</b></Div>
            <Div c="f9">矿机共享共享服务在以下国家或地区被禁止:巴尔干半岛、白俄罗斯、缅甸、科特迪瓦(象牙海岸)，克里米亚-乌克兰、古巴、刚果民主共和国、伊朗、伊拉克、利比里亚、朝鲜、苏丹、叙利亚、委内瑞拉、
                津巴布韦、中国香港和中国大陆。请确认矿机共享服务在您的国家或地区是合法的。否则，您将承担一切法律后果。</Div>
            <Div mt={10}><b>无法退款</b></Div>
            <Div c="f9">按照协议规定，一旦订单已付款，将不支持退款</Div>
            <Div mt={10}><b>定价规则</b></Div>
            <Div c="f9">矿机共享套餐的定价会根据数字货币价格等多因素调整。实际购买价格以用户付款时为准，后续即使价格发生变化，BitDeer也不会对这个订单进行差价补偿。</Div>
            <Div mt={10}><b>算力波动说明</b></Div>
            <Div c="f9">BitDeer提供的套餐对应的为真实算力，真实算力由于网络、矿机功率等不稳定因素会导致波动，BitDeer不承诺100%稳定运行。</Div>
            <Div mt={10}><b>不可控风险声明</b></Div>
            <Div c="f9">BitDeer不对以下不可控风险所造成的损失负责：不能预见、不能避免或不能克服的客观事件，包括自然灾害如洪水、火山爆发、地震、山崩、火灾、被中国
                政府部门评定为百年不遇级别以上的风暴和恶劣气候等，政府行为和政府指令，城市级别的电网供电事故，以及社会异常事件如战争、罢工、动乱等。</Div>
            <Div mt={10}><b>使用范围声明</b></Div>
            <Div c="f9">用户不得将BitDeer提供的算力用于攻击网络等违法违规行为，否则BitDeer有权强行收回您的算力。</Div>
            </Div>
        </Div>
    )
}
export default Becareful;