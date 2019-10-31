import React from 'react';
import { Div } from '../../../assets/style'
import Navlogo from './navlogo'
import Navlogoright from './navlogoright'
import Navcontent from './navcontent'
import Navbutton from './navbutton'
import Navlanguage from './navlanguage'


const nav =()=> {
        return (
            <div>
                <Div  bg='s' h={72}   ai="c" w='a' jc='c'>
                    <Div h={72} w={1160} ai='c'  >
                    <Navlogo />
                    <Navlogoright />
                    <Navcontent />
                    <Navbutton />
                    <Navlanguage/>
                    </Div>
                </Div>
           
            </div>
        );
}

export default nav;