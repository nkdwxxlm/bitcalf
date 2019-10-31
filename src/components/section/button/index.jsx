import React from 'react';
import { Div,Button} from '../../../assets/style'
import './index.css'


export default ()=> {
        return (
            <div>
                <Div mt={79} w={259} pl={40} jc='c'>
                    <Button mr={12} bg='s' h={44} w={123} fs={17} c='fc' className='btn'>套餐选购</Button>
                    <Button bg='f6' h={44} w={123} fs={17} c='fc' className='btn'>介绍视频</Button>
                </Div> 
            </div> 
        ) 
}

