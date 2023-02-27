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
`;


const Navbar = () => {
    return (
        <NavOptions> 
            {
                navData?.map((data) => (
                    <Container>
                        <img src={data.url} alt="product" width='64' />
                        <Typography>{data.text}</Typography>
                    </Container>
                )
                )
            }
        </NavOptions>
    )
}

export default Navbar