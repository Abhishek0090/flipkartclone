import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import { navData } from '../../../constants/data'

const NavOptions = styled(Box)`
    display : flex;
    margin : 55px 130px 0 130px;
    justify-content : space-between;
`;

const Container = styled(Box)`
    padding : 12px 8px;
    text-align : center;
`;

const Text = styled(Typography)`
    font-size : 14px;
    font-weight  : 600; 
    font-family  : inherit;
`;


const Navbar = () => {
    return (
        <NavOptions> 
            {
                navData?.map((data) => (
                    <Container key={data.id}>
                        <img src={data.url} alt="product" width='64' />
                        <Text>{data.text}</Text>
                    </Container>
                )
                )
            }
        </NavOptions>
    )
}

export default Navbar