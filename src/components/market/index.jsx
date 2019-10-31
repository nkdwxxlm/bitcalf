import React from 'react';
import { Div } from '../../assets/style'
import Topcontent from './topcontent'
import Themarket from './Themarket'
import Arc from './arc'


const market = () => {
    return (
        <div>
            <Div w='a' h={655} bg='fc' jc='c' _pr oh >
                <Div w={1160} h={665}  >
                    <Topcontent />
                    <Themarket />
                    <Div h={300} _pa _t={580} _l={-100}>
                        <Arc />
                    </Div>
                    <Div h={300} w='a' _pa _t={1230} _r={-150} jc='fe'  >
                        <Arc  />
                    </Div>
                </Div>
            </Div>
        </div>
    )
}

export default market;