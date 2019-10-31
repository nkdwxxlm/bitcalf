import React from 'react';
import { Div } from '../../../../assets/style';


const BriefRight = () => {
    return (
        <Div f={1}  pt={20} >
            <Div jc fd='rs'>
                <Div pl={50} c='f9'>评论量<Div fs={26} b c='f0'>564</Div></Div>
                <Div pl={30} c='f9'>浏览量<Div fs={26} b c='f0'>746.3万</Div></Div>
                <Div c='f9'>文章数<Div fs={26} b c='f0'>134</Div></Div>
            </Div>
            <Div fd='rs' mt={30}>
                <Div jc='c' ai='c' w={269} h={40} bg='w'>参与评论</Div>
            </Div>
        </Div>
    )
}

export default BriefRight;