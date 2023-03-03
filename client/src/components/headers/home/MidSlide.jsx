import { Box, styled } from '@mui/material'
import React from 'react'
import Slide from './Slide'

const Component  = styled(Box)`
    display : flex
`;

const LeftComponent = styled(Box)`
    width : 80%

`;

const RightComponent = styled(Box)`
background : #fff;
padding : 5px;
margin-top : 10px;

`;



const MidSlide = ({ products, title, timer }) => {

    const adUrl = 'https://rukminim1.flixcart.com/fk-p-flap/278/278/image/05d9d0065ee84cc1.jpg?q=90';
    return (

        <Component>
            <LeftComponent>
            <Slide products={products} title={title} timer={true}/>
            </LeftComponent>
            <RightComponent>
                <img src={adUrl} alt='ad url'/>
            </RightComponent>

        </Component>
    )
}

export default MidSlide