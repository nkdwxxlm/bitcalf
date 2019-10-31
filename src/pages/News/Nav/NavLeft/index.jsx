import React from 'react';
import { Div } from '../../../../assets/style';
import { TiArrowSortedDown } from "react-icons/ti";
import './nav-left.scss';
const NavLeft = () => {
    return (
        <Div hp={100}  ai='c' c='f9'>
            <Div pr={25} b>巴比特图标</Div>
            <Div _pr pr={25} jc cp className="asks">咨讯<Div pl={5}><TiArrowSortedDown/></Div>
                <Div className="ask-list" bh="w" >
                    <Div>独家</Div>
                    <Div>海盗号</Div>
                    <Div>创投</Div>
                    <Div>政策</Div>
                    <Div>技术</Div>
                    <Div>矿业</Div>
                    <Div>专题</Div>
                    <Div>妍报</Div>
                    <Div>周刊</Div>                   
                </Div>
            </Div>
            <Div pr={25} jc ch='i' cp>快讯</Div>
            <Div pr={25} jc ch='i' cp>视频<Div pl={5}><TiArrowSortedDown/></Div></Div>
            <Div pr={25} jc ch='i' cp>专栏</Div>
            <Div pr={25} jc ch='i' cp>项目</Div>
            <Div pr={25} jc ch='i' cp>学院<Div pl={5}><TiArrowSortedDown/></Div></Div>
            <Div pr={25} jc ch='i' cp>活动</Div>
            <Div pr={25} jc ch='i' cp>社区<Div pl={5}><TiArrowSortedDown/></Div></Div>
            <Div pr={25} jc ch='i' cp>海盗号</Div>
            <Div pr={25} jc ch='i' cp>图片</Div>
        </Div>
    )
}

export default NavLeft;