import React from 'react';
import { Div } from '../../../assets/style';
import TopLeft from './TopLeft';
import TopRight from './TopRight';
const Top = () => {
    return (
        <Div wp={100} hp={100}  ai='c' c='f9'>
            <TopLeft/>
            <TopRight/>
        </Div>
    )
}

export default Top;