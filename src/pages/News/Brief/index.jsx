import React from 'react';
import { Div } from '../../../assets/style';
import BirefLeft from './BriefLeft';
import BriefRight from './BriefRight';

const Brief = () => {
    return (
        <Div jc>
            <BirefLeft/>
            <BriefRight/>
        </Div>
    )
}

export default Brief;