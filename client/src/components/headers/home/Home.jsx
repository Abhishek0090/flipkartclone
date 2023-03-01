import { Box, styled } from '@mui/material'
import React from 'react'
import Banner from './Banner'
import Navbar from './Navbar'

const Component = styled(Box)`
    padding : 9px 5px;
    background : #e4e7ed;    
`;

const Home = () => {
    return (
        <>
            <Navbar />
            <Component>
                <Banner />
            </Component>
        </>
    )
}

export default Home