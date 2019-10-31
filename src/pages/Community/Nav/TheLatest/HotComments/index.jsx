import React from 'react';
import { Div,Span,Img } from '../../../../../assets/style'



const HotComments = () => {
    return <Div bg='ff' jc='c'>
        <Div h={450}  w={1160}   fd="rs" mt={20}>
            <Div w={300} _pr bg='fe' pl={15} pt={15} className='right ' h={450}  >
                <Div bl={[5, 's', 'w']} ml={10} h={20} _t={20} _pa> </Div>
                <Div ml={20} mt={2} fs={20} ><Span b>热门跟贴</Span>
                <Div w={250}  mt={30} bb={[1,'d']} >
                    <Div w={20} h={20} bg='w' b={[1,'s']} jc='c' ai='c' r={[5]} className='left' mr={15}>1</Div>
                    <Div className='Overflow' fs={14}>反指大王～</Div>
                    <Div  jc fs={12} ai='c' h={50} >
                        <Div><Img w={30} h={30} mr={5} src={require('../../../../../assets/images/common_61_icon.svg')}></Img></Div>
                        <Div>来源 《从现在开始 不做空 只做多》</Div>
                    </Div>

                </Div>
                </Div>
            </Div>
        </Div>
    </Div>
}

export default HotComments


