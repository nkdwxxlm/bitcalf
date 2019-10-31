import React from 'react';
import { Div } from '../../assets/style'
import Content from './content'
import Team from './team'


const platform=()=> {
        return (
            <div>
                <Div bg='fc' h={677} wp={100} jc='c'>
                    <Div w={1160} h={667}  pt={110} >
                    <Content/>
                    <Team/>
                    </Div>
                </Div>
            </div> 
        );
}

export default platform;