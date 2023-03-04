import { Box, styled } from '@mui/material'
import React, { useEffect } from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import { getProducts } from '../../redux/action/productActions';

import { useDispatch, useSelector } from 'react-redux';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';

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
                <MidSlide products={products} title="Deal of the Day" timer={true}/>
                <MidSection/>
                <MidSlide products={products} title="Discount for You" timer={false}/>
                <MidSlide products={products} title="Suggested Items" timer={false}/>
                <MidSlide products={products} title="Top Selection" timer={false}/>
                <MidSlide products={products} title="Recommended Items" timer={false}/>
                <MidSlide products={products} title="Trending Offer" timer={false}/>
                <MidSlide products={products} title="Season's top picks" timer={false}/>
                <MidSlide products={products} title="Top Deals on Accessories" timer={false}/>

            </Component>
        </>
    )
}

export default Home