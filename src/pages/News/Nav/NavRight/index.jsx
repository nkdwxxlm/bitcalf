import React from 'react';
import { Div } from '../../../../assets/style';
import { TiAnchor } from "react-icons/ti";
import { IoMdSearch } from "react-icons/io";
import './nav-right.scss';

const NavRight = () => {
    return (
        <Div hp={100} f={1} ai='c' c='f9' fd='rs'>
            <Div cp pl={10} pr={10} hp={100} bg="w" c='ff' jc='c' ai='c'><Div pt={3}><TiAnchor /></Div>开通海盗号</Div>
            <Div fd='rs' ai='c' r={30} bg='fe' mr={30}>
                <Div className="icon"><IoMdSearch /></Div><input className="search" type="text" placeholder="搜索..." />
            </Div>
        </Div>
    )
}

export default NavRight;