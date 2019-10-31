import React from 'react';
import { Div} from '../../../../assets/style'
import { Link,withRouter } from 'react-router-dom'
import './index.css'


class Navcontent extends React.Component{
    render(){
        const { location } =this.props
        return (
            <div w='a'>
                <Div  w={448}  jc='sb' c='fc' fs={13} >
                    <Link to="/"><Div className={ location.pathname==='/'? 'selected':null}>首页</Div></Link>
                    <Link to="/Hashrate"><Div className={ location.pathname==='/Hashrate'? 'selected':null}>算力</Div></Link>
                    <Link to="/OrePool"><Div className={ location.pathname==='/OrePool'? 'selected':null}>矿池</Div></Link>
                    <Link to="/News"><Div className={ location.pathname==='/News'? 'selected':null}>牛闻</Div></Link>
                    <Link to="/Community" className={ location.pathname==='/Community'? 'selected':null}><Div>社区</Div></Link>
                    <Link to="/Iec"> <Div className={ location.pathname==='/Iec'? 'selected':null}>生态链</Div></Link>
                </Div>
            </div>
        );
    }
}

export default withRouter(Navcontent)