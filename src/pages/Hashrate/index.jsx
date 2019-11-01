import React from 'react';
import { Div} from '../../assets/style';
import Price from './Price';
import Tab from './Tab';
const OrePool = () => {
    return (
        <Div wp={100}  jc="c"  bg="fe"  >
            <Div w={1160} h={800}  >
              <Price />
              <Tab />
            </Div>
        </Div>
    )
}
export default OrePool;