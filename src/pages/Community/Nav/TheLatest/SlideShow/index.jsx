import React from 'react';
import { Div, Img } from '../../../../../assets/style'
import { Carousel } from 'antd';
import 'antd/lib/carousel/style/css'

const SlideShow = () => {

    return <Div jc='c'>
        <Div w={1160} h={300} bg='s' >
            <Div w={400} h={300} bg='i' tc>
                <Carousel autoplay>
                    <div>
                        <Img  src={require('../../../../../assets/images/icon1.png')}></Img>
                    </div>
                    <div>
                        <Img src={require('../../../../../assets/images/icon2.png')}></Img>
                    </div>
                    <div>
                        <Img src={require('../../../../../assets/images/icon3.png')}></Img>
                    </div>
                    <div>
                        <Img src={require('../../../../../assets/images/icon4.png')}></Img>
                    </div>
                </Carousel>
            </Div>
        </Div>
    </Div>
}

export default SlideShow