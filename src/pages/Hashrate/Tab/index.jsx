import React from 'react';
import { Div, Img } from '../../../assets/style';
import { Tabs } from 'antd';
import "./index.css";
const { TabPane } = Tabs;



const Tab = () => {
  return (
    <Div mt={35} >
      <Tabs defaultActiveKey="1" >
        <TabPane className="sadff"
          tab={
            <Div jc="c" ai="c" bg="ff" fs={15} c="f3" w={300} h={55} className="pppo" >
              <Img src={require("../../../assets/images/WX20191028-173111.png")} />
              比特币
               </Div>
          }
          key="1" >
          <Div w={1160} mt={-16} jc="sb" h={260} bg="ff" >
            <Div mt={8}>
              <Div w={860} h={70} jc="c" c="f3" ai="c" fs={20} >BTC哈希率</Div>
              <Div w={860} h={220} jc="sa">
                <Div w={215} h={75} fd="c" ai="c" mt={20} >
                  <Div className="wordcolor">哈希类型</Div>
                  <Div>比特币</Div>
                </Div>
                <Div w={215} h={70} fd="c" ai="c" mt={20}>
                  <Div className="wordcolor">哈希值</Div>
                  <Div>1吨/每</Div>
                </Div>
                <Div w={215} h={70} fd="c" ai="c" mt={20}>
                  <Div className="wordcolor">哈希价格</Div>
                  <Div>45usd/每</Div>
                </Div>
                <Div w={215} h={70} fd="c" ai="c" mt={20}>
                  <Div className="wordcolor">预计每天收入</Div>
                  <Div>03000sad53145/每</Div>
                </Div>
              </Div>
              <Div w={860} h={220} jc="sa" mt={-140}>
                <Div w={215} h={75} fd="c" ai="c" mt={20} >
                  <Div className="wordcolor">时间</Div>
                  <Div>365天</Div>
                </Div>
                <Div w={215} h={70} fd="c" ai="c" mt={20}>
                  <Div className="wordcolor">电费</Div>
                  <Div>包括365天的用电时间</Div>
                </Div>
                <Div w={215} h={70} fd="c" ai="c" mt={20}>
                  <Div className="wordcolor">维护费</Div>
                  <Div jc="c">
                    <Div ml={-5}>9%</Div>
                    <Div ml={20}>5%</Div>
                  </Div>
                </Div>
                <Div w={215} h={70} fd="c" ai="c" mt={20}>
                  <Div className="wordcolor">上线日期</Div>
                  <Div>立即生效</Div>
                </Div>

              </Div>
            </Div>
            <Div w={300} h={260} className="right">
              <Div jc="c" mt={65}>
                <Div fs={35} className="cred"> $45.00</Div>
                <Div fs={20} mt={15} ml={10} className="cred" >$75.00</Div>
              </Div>
              <Div w={200} h={45} className="pricebg" ml={50} mt={20} r={15} c="ff" fs={15} jc="c" ai="c"> 阅读详情</Div>
            </Div>

          </Div>
        </TabPane>

        <TabPane
          tab={
            <Div jc="c" ai="c" bg="s" fs={15} c="f3" w={300} h={55} className="pppo"  ml={-32} >
              <Img src={require("../../../assets/images/WX20191028-173111.png")} />
              比特币
               </Div>
          }
          key="2"
        >
            <Div w={1160} mt={-16} jc="sb" h={260} bg="ff" >
            <Div mt={8}>
              <Div w={860} h={70} jc="c" c="f3" ai="c" fs={20} >BTC哈希率</Div>
              <Div w={860} h={220} jc="sa">
                <Div w={215} h={75} fd="c" ai="c" mt={20} >
                  <Div className="wordcolor">哈希类型</Div>
                  <Div>比特币</Div>
                </Div>
                <Div w={215} h={70} fd="c" ai="c" mt={20}>
                  <Div className="wordcolor">哈希值</Div>
                  <Div>1吨/每</Div>
                </Div>
                <Div w={215} h={70} fd="c" ai="c" mt={20}>
                  <Div className="wordcolor">哈希价格</Div>
                  <Div>45usd/每</Div>
                </Div>
                <Div w={215} h={70} fd="c" ai="c" mt={20}>
                  <Div className="wordcolor">预计每天收入</Div>
                  <Div>03000sad53145/每</Div>
                </Div>
              </Div>
              <Div w={860} h={220} jc="sa" mt={-140}>
                <Div w={215} h={75} fd="c" ai="c" mt={20} >
                  <Div className="wordcolor">时间</Div>
                  <Div>365天</Div>
                </Div>
                <Div w={215} h={70} fd="c" ai="c" mt={20}>
                  <Div className="wordcolor">电费</Div>
                  <Div>包括365天的用电时间</Div>
                </Div>
                <Div w={215} h={70} fd="c" ai="c" mt={20}>
                  <Div className="wordcolor">维护费</Div>
                  <Div jc="c">
                    <Div ml={-5}>9%</Div>
                    <Div ml={20}>5%</Div>
                  </Div>
                </Div>
                <Div w={215} h={70} fd="c" ai="c" mt={20}>
                  <Div className="wordcolor">上线日期</Div>
                  <Div>立即生效</Div>
                </Div>

              </Div>
            </Div>
            <Div w={300} h={260} className="right">
              <Div jc="c" mt={65}>
                <Div fs={35} className="cred"> $45.00</Div>
                <Div fs={20} mt={15} ml={10} className="cred" >$75.00</Div>
              </Div>
              <Div w={200} h={45} className="pricebg" ml={50} mt={20} r={15} c="ff" fs={15} jc="c" ai="c"> 阅读详情</Div>
            </Div>

          </Div>
          
    </TabPane>
        <TabPane
          tab={
            <Div jc="c" ai="c" bg="p" fs={15} c="f3" w={300} h={55} className="pppo"  ml={-32} >
            <Img src={require("../../../assets/images/WX20191028-173111.png")} />
            比特币
             </Div>
          }
          key="3"
        >
            <Div w={1160} mt={-16} jc="sb" h={260} bg="ff" >
            <Div mt={8}>
              <Div w={860} h={70} jc="c" c="f3" ai="c" fs={20} >BTC哈希率</Div>
              <Div w={860} h={220} jc="sa">
                <Div w={215} h={75} fd="c" ai="c" mt={20} >
                  <Div className="wordcolor">哈希类型</Div>
                  <Div>比特币</Div>
                </Div>
                <Div w={215} h={70} fd="c" ai="c" mt={20}>
                  <Div className="wordcolor">哈希值</Div>
                  <Div>1吨/每</Div>
                </Div>
                <Div w={215} h={70} fd="c" ai="c" mt={20}>
                  <Div className="wordcolor">哈希价格</Div>
                  <Div>45usd/每</Div>
                </Div>
                <Div w={215} h={70} fd="c" ai="c" mt={20}>
                  <Div className="wordcolor">预计每天收入</Div>
                  <Div>03000sad53145/每</Div>
                </Div>
              </Div>
              <Div w={860} h={220} jc="sa" mt={-140}>
                <Div w={215} h={75} fd="c" ai="c" mt={20} >
                  <Div className="wordcolor">时间</Div>
                  <Div>365天</Div>
                </Div>
                <Div w={215} h={70} fd="c" ai="c" mt={20}>
                  <Div className="wordcolor">电费</Div>
                  <Div>包括365天的用电时间</Div>
                </Div>
                <Div w={215} h={70} fd="c" ai="c" mt={20}>
                  <Div className="wordcolor">维护费</Div>
                  <Div jc="c">
                    <Div ml={-5}>9%</Div>
                    <Div ml={20}>5%</Div>
                  </Div>
                </Div>
                <Div w={215} h={70} fd="c" ai="c" mt={20}>
                  <Div className="wordcolor">上线日期</Div>
                  <Div>立即生效</Div>
                </Div>

              </Div>
            </Div>
            <Div w={300} h={260} className="right">
              <Div jc="c" mt={65}>
                <Div fs={35} className="cred"> $45.00</Div>
                <Div fs={20} mt={15} ml={10} className="cred" >$75.00</Div>
              </Div>
              <Div w={200} h={45} className="pricebg" ml={50} mt={20} r={15} c="ff" fs={15} jc="c" ai="c"> 阅读详情</Div>
            </Div>

          </Div>
    </TabPane>
      </Tabs>
    </Div>
  )
}





export default Tab;

