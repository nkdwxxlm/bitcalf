import React from 'react';
import { Div } from '../../../assets/style';
import NavLeft from './NavLeft';
import NavRight from './NavRight';


const Nav = () => {
    return (
        <Div wp={100} hp={100}  ai='c' c='f9'>
           <NavLeft/>
           <NavRight/>
        </Div>
    )
}

export default Nav;