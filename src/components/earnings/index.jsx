import React from 'react';
import { Div } from '../../assets/style'
import Content from './content'
import Image from './images'
import Arc from './arc'



const earnings=()=> {
        return (
            <div>
                <Div h={665} w='a' jc='c' _pr oh >
                    <Div h={665} w={1160}  >      
                    <Content/>
                    <Image/>         
                    </Div>
                    <Div _pa h={300} _t={1000} jc='c' >
                        <Arc/>
                    </Div>
                </Div>
            </div> 
        );
}

export default earnings;