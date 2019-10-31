import React from 'react';
import { Div } from '../../../../assets/style'
import { FaAngleDown } from 'react-icons/fa';
import './index.css'

export default ()=> {
        return (
            <div>
                <Div ml={14} jc='c' ai='cS' c='fc'  h={22} fs={12} className='center' w={45}>
                    中文
                    <Div ml={7} ai='c' jc='c' className='center' h={22}  ><FaAngleDown/></Div>
                </Div>
            </div> 
        );
}

