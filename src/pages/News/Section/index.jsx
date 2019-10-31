import React from 'react';
import { Div } from '../../../assets/style';
import SectionLeft from './SectionLeft';
import SectionRight from './SectionRight';
const Section = () => {
    return (
        <Div wp={100} hp={100}  jc>
            <SectionLeft/>
            <SectionRight/>
        </Div>
    )
}

export default Section;