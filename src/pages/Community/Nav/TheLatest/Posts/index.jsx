import React from 'react';
import { Div, Span, Button } from '../../../../../assets/style'
import { FaEye, FaRegCommentDots, FaRegTimesCircle, FaSignal } from 'react-icons/fa'
import { FiMic } from 'react-icons/fi'
import './index.css'




const Posts = () => {
    return <Div jc='c'>
        <Div w={860} bg='ff' >
            <Div w={840} fd="r" mr={20} className='left' h={50} >
                <Div className='oDiv' w={800} h={30}   >
                    <Span pl={25} className="Span">全部</Span>
                    <Span pl={30} className="Span"><span className='FaSignal'><FaSignal /></span>投票</Span>
                    <Span pl={30} className="Span" ><span className='FiMic'><FiMic /></span>辩论</Span>
                    <Span pl={30} className="Span">默认</Span>
                    <Span pl={20} className="Span">最新</Span>
                    <Span pl={20} className="Span">最热</Span>
                    <Span pl={20} className="Span">精华</Span>
                    <Div jc='c' mt={20} >
                        <Div w={800}  ml={40}>
                            <Div w={825} mt={20} bt={[1, 's', 'fc']} pt={20}> </Div>
                            <Div w={825} h={70} bb={[1, 'd', 'fc']} pb={20}>
                                <Div className='inlineBlockleft'  h={70} w={50} tc>
                                    头像
                                     </Div>
                                <Span className='inlineBlock' h={70} mt={10}  >
                                    <Div c='w' b cp>【直播预告】合作市场在添猛将，何一解读币安中国战略</Div>
                                    <Div fs={14} jc='c'  >
                                        <Div ch='w' cp>ccchainge</Div>
                                        <Span fs={14} ml={5} >/</Span>
                                        <Span fs={14} ml={5} >一小时前</Span>
                                        <Div bg='fc' fs={14} ml={5} ch='w' cp>活动/峰会</Div>
                                        <Div ml={440} className='eye'>
                                            <span className='FaEye'><FaEye /></span>526145&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                             <span className='FaRocketchat' ><FaRegCommentDots /></span>12311
                                                  <span className='FaRegTimesCircle'><FaRegTimesCircle /></span>
                                        </Div>
                                    </Div>
                                </Span>
                            </Div>
                        </Div>
                    </Div>
                </Div>
                <Button bg='w' className="div" c='fd' h={40} fs={14} ml={-40} >发布帖子</Button>
            </Div>
        </Div>
    </Div>
}

export default Posts