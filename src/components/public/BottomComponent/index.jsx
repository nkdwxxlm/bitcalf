import { Div } from '../../../assets/style';
import React from 'react';
import Up from './Up';
import Down from './Down';
import './bg.scss';

const Bottom = () => {
    return (
        <Div>
            <Div wp={100} bg='ff' jc='c'>
                <Div w={1400} h={300} >
                    <Up />
                </Div>
            </Div>

            <Div c='ff' wp={100} bg='i' jc='c' className='down'>
                <Div w={1400} h={300} >
                    <Down />
                </Div>
            </Div>

        </Div>

    )
}

export default Bottom;