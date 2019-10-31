import React from 'react';
import { Div } from '../../../assets/style'
import { FaListUl } from 'react-icons/fa'
import { Link,withRouter } from 'react-router-dom' 
import './index.css'




class CommunityNav extends React.Component{
    render(){
        const { location } =this.props;
        return <Div jc='c'> 
                <Div    w='a' >
                    <Div  w={1160} ai='c' ></Div>
                    <ul>
                        <Link to='/Community' ><li className={ location.pathname==="/Community"?"borderBottom":null}>最新</li></Link>
                        <Link to='/Community/Technology' ><li  className={ location.pathname==="/Community/Technology"?"borderBottom":null}>技术</li></Link>
                        <Link to='/Community/Direcruit' ><li className={ location.pathname==="/Community/Direcruit"?"borderBottom":null}>直聘</li></Link>
                        <Link to='/Community/Market' ><li className={ location.pathname==="/Community/Market"?"borderBottom":null}>行情</li></Link>
                        <Link to='/Community/QuestionAnswer' ><li className={ location.pathname==="/Community/QuestionAnswer"?"borderBottom":null}>问答</li></Link>
                        <Link to='/Community/AMA'><li  className={ location.pathname==="/Community/AMA"?"borderBottom":null}>AMA</li></Link>
                        <Link to='/Community/BTC'><li  className={ location.pathname==="/Community/BTC"?"borderBottom":null}>BTC</li></Link>
                        <Link to='/Community/BTM' ><li className={ location.pathname==="/Community/BTM"?"borderBottom":null}>BTM</li></Link>
                        <Link to='/Community/ETH' ><li className={ location.pathname==="/Community/ETH"?"borderBottom":null}>ETH</li></Link>
                        <Link to='/Community/EOS'><li  className={ location.pathname==="/Community/EOS"?"borderBottom":null}>EOS</li></Link>
                        <Link to='/Community/Candy' ><li className={ location.pathname==="/Community/Candy"?"borderBottom":null}>糖果</li></Link>
                        <Link to='/Community/Security' ><li className={ location.pathname==="/Community/Security"?"borderBottom":null}>安全</li></Link>
                        <li><FaListUl/></li>
                    </ul>
                    </Div>

                </Div>
    }
    
}

export default withRouter(CommunityNav)  