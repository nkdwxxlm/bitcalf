import React from 'react';
import { Div,Img,Button } from '../../../assets/style'

const ForgotPassword = () => {
    return <Div jc='c'>
        <Div w={700} bg="ff" h={400} mt={30} mb={30}>
        <Div jc='c' mb={20}>
            <Img w={100} mt={50} src={require('../../../assets/images/logo.png')} alt="" />
            </Div>
            <Div jc='c' >
                <Div  mb={5}  tc>
                     <input className={'NotEmailInput'} placeholder={'邮箱'} type='email'></input><br/>  
                     <Div jc='c'>         
                    <input className={'NotEmailInput_a'} placeholder={'验证码'} type='text'></input><Div f={1} >验证码</Div>
                    </Div>
                </Div>
            </Div>
            <Div jc='c' mt={5}>
                <Button w={420} fs={16} mb={5} r={5} jc='c' c='ff' h={36} className={'outaline'}>密码找回</Button>
            </Div>
    </Div>
    </Div>
}

export default ForgotPassword


