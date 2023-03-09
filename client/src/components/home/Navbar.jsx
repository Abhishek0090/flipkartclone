import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import { navData } from '../../constants/data'
import { Link } from 'react-router-dom';

const Component = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '55px 130px 0 130px !important',
    overflowX: 'overlay',
    backgroundColor : '#fff',
    [theme.breakpoints.down('lg')]: {
        margin: '0px !important'
    }
}))

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
        <Component >  
            {
                navData?.map((data) => (
                    <Container key={data.id}>
                        <img src={data.url} alt="product" width='64' />
                        <Text>{data.text}</Text>
                    </Container>
                )
                )
            } 
        </Component >
    )
}

export default Navbar