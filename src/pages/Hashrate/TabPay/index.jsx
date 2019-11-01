import React from 'react';
import { Div } from '../../../assets/style';
import Orderinformation from './Orderinformation';
import Orderdetails from './Orderdetails';
import Electricityfees from './Electricityfees';
import Costofcalculation from "./Costofcalculation";
import Becarful from    './Becareful';

const Purchaes = () => {
    return (
        <Div wp={100} bg="fe" jc="c"  >
            <Div w={1160}  bg="ff"  jc="c" mt={15}  >
                <Div w={1100}  >
                    <Orderinformation />
                    <Orderdetails />
                    <Electricityfees />
                    <Costofcalculation />
                    <Becarful />
                </Div>
            </Div>
        </Div>
    )
}
export default Purchaes;