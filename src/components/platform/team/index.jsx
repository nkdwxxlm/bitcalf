import React from 'react';
import { Div } from '../../../assets/style'
import './index.css'



export default ()=> {
        return (
            <div>
                <Div w={1073} h={365}  ml={44} jc='sb' c='f6'>
                    <Div pt={89}>
                        <Div  r={[100]} w={123} h={123} ml={29} bg='bg' ></Div>
                        <Div mt={46} jc='c' w={180} fs={15} b c='f3'>  比特大陆顶级供货方</Div>
                        <Div mt={30} w={182} className='Center' fs={14}>比特大陆提供最新款矿机支持矿机质量保障</Div>
                    </Div>
                    <Div pt={89}>
                        <Div r={[100]} w={123} h={123} ml={29} bg='bg' ></Div>
                        <Div mt={46} jc='c' w={180} fs={15} b c='f3'>五大矿池深度合作</Div>
                        <Div mt={30} w={182} className='Center' fs={14}>BTC.com、AntPool、F2Pool ViaBTC、BTC.TOP <br/>五大矿池合作</Div>
                    </Div>
                    <Div pt={89}>
                        <Div r={[100]} w={123} h={123} ml={29} bg='bg'></Div>
                        <Div mt={46} jc='c' w={180} fs={15} b c='f3'>支持矿池直接打款</Div>
                        <Div mt={30} w={203} className='Center' fs={14}>可选择矿池直接将收益打给用户BitDeer不参与收益的分配与划拨</Div>
                    </Div>
                    <Div pt={89}>
                        <Div r={[100]} w={123} h={123} ml={29} bg='bg' ></Div>
                        <Div mt={46} jc='c' w={180} fs={15} b c='f3'>24小时维护的专业团队</Div>
                        <Div mt={30} w={180} className='Center' fs={14}>平台24小时提供专业的挖矿服务保障人员</Div>
                    </Div>
                </Div>
            </div> 
        );
}

