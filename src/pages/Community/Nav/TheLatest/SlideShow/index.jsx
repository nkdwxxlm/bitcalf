import React from 'react';
import { Div } from '../../../../../assets/style'
import Banner from './Banner';
import 'antd/lib/carousel/style/css'

const SlideShow = () => {

    return <Div jc='c'>
        <Div w={1160} h={300} jc>
            <Banner/>
        </Div>
    </Div>
}

export default SlideShow