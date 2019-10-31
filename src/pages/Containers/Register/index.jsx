import React from 'react';
import { Div, Img, Span, Button } from '../../../assets/style'
import './index.css'
import { Link } from 'react-router-dom'

const Register =()=> {
    return <Div jc='c' >
        <Div w={650} bg='bg' mt={30} mb={30}>
            <Div jc='c' mb={20}><Img w={100} mt={50} src={require('../../../assets/images/logo.png')} alt="" /></Div>
            <Div jc='c' >
                <Div w={400} mb={5} >
                    <Div mb={5}>邮箱</Div>
                    <input className={'oinput'} placeholder={'邮箱'} type='email'></input>
                </Div>
            </Div>
            <Div jc='c' >
                <Div w={400} mb={5}>
                    <Div mb={5}>密码</Div>
                    <input className={'oinput'} placeholder={'密码'} type='password'></input><br />
                    <input className={'oinput'} placeholder={'确认密码'} type='password'></input>
                </Div>
            </Div>
            <Div jc='c' >
                <Div w={400} mb={5}>
                    <Div mb={5}>验证码</Div>
                    <Div jc='c'>
                        <input className={'oinput input'} placeholder={'验证码'} type='text'></input>
                        <Div ml={20} f={1} >验证码</Div>
                    </Div>
                </Div>
            </Div>
            <Div jc='c'>
                <Div w={400} mb={5}>
                    <input type="checkbox" className={'chekbox'} /><Span fs={13}><b>我已阅读并同意 隐私政策 和服务条款</b></Span>
                </Div>
            </Div>       
            <Div jc='c' mt={30}>
                <Button w={400} mb={5} bg='i' jc='c' h={40} className={'outaline'}  >创建账户</Button>
            </Div>
            <Div jc='c'>
                <Div w={400} mb={5} _pr mt={20}>
                    <Link to='/NotEmail' className={'NotEmail'}>没有收到邮件？</Link><Link to='/Login' className={'login'}>登录</Link>
                </Div>
            </Div>
        </Div>
    </Div>
}

export default Register


