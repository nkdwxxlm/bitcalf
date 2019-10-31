import React from 'react';
import { Div,Img } from '../../assets/style'
import Content from './content'
import Sectionbutton from './button'
import banner from '../../assets/images/banner.png'



const section=()=> {
        return (
            <div>
                <Div w='a' bg='p' h={620} jc='c' >
                    <Div w={1160}  h={620} _pr>
                    <Content />
                    <Sectionbutton />
                    <Div h={490} _pa  _t={68}  jc='fe'> 
                    <Img src={banner} alt="" h={490}  />
                     </Div>
                    </Div>
                </Div> 
            </div> 
        );
}

export default section;