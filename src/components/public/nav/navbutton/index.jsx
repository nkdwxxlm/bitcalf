import React from 'react';
import { Div,Button} from '../../../../assets/style'
import { Link } from 'react-router-dom'
import './index.css'


export default ()=> {
        return (
            <div>
                <Div ml={176} fs={12} jc='c' ai='c'  >
                <Link to='/Register'><Button bg='f6' mr={6} w={61} h={22} className='Btn' jc='c' >注册</Button></Link>
                <Link to='/Login'><Button bg='p' w={61}  h={22}  className='Btn'>登陆</Button></Link>
                </Div>
            </div> 
        )
}

