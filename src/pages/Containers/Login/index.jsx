import React from 'react';
import { Div,Img,Button,Span } from '../../../assets/style'
import './index.css'
import { Link } from 'react-router-dom'

const login = () => {
    return <Div jc='c'>
        <Div w={750} bg="ff" h={450} mt={30} mb={30}>
        <Div jc='c' mb={20}>
            <Img w={100} mt={50} src={require('../../../assets/images/logo.png')} alt="" />
            </Div>
            <Div jc='c' >
                <Div  mb={5}  tc>
                     <input className={'oainput'} placeholder={'密码'} type='password'></input><br/>               
                    <input className={'oainput'} placeholder={'邮箱'} type='email'></input>
                </Div>
            </Div>
            <Div jc='c' mt={5}>
                <Button w={320} mb={5} r={5} jc='c' c='ff' h={36} className={'outaline'}>登录</Button>
            </Div>
            <Div jc='c' mb={5}>
               <Span><Link to='/Register' className='Logincolor' >注册</Link> | <Link to="/ForgotPassword" className='Logincolor'>忘记密码？</Link></Span>
            </Div>

    </Div>
    </Div>
}

export default login


