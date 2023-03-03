import { Box, styled } from '@mui/material'
import React, { useEffect } from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import { getProducts } from '../../../redux/action/productActions';

import { useDispatch, useSelector } from 'react-redux';
import Slide from './Slide';

const Component = styled(Box)`
    padding : 9px 5px;
    background : #e4e7ed;    
`;

const Home = () => {

    const dispatch = useDispatch();

    const { products } = useSelector(state => state.getProducts);


    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);


    return (
        <>
            <Navbar />
            <Component>
                <Banner />
                <Slide products={products} />
            </Component>
        </>
    )
}

export default Home