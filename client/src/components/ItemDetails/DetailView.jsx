import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { getProductDetails } from '../../redux/action/productActions';
import { Box, Grid, Typography, styled } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import ActionItem from './ActionItem';
import axios from 'axios';

const Component = styled(Box)`
    margin-top: 55px;
    background: #F2F2F2;
`;

const Container = styled(Grid)(({ theme }) => ({
    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}))

const RightContainer = styled(Grid)`
    margin-top: 50px;
    & > p {
        margin-top: 10px;
    }
`;

const URL = 'http://localhost:8000/api/'


const DetailView = () => {

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

    const { id } = useParams();

console.log(id);

const [product, setProduct] = useState(null)
    
    // const { loading, product } = useSelector((state) => state.getProductDetails)  ;
    
    // const dispatch = useDispatch();
 

    // console.log(product);


    // useEffect(() => {

    //     if (product && id !== product.id)

    //         dispatch(getProductDetails(id));

    // }, [dispatch, product, id, loading]);

 useEffect(()=>{
    const fetchData = async ()=>{

        try {
            const res =  await axios.get(`${URL}/product/${id}`);
            setProduct(res.data)
            
            // console.log(product)
            
        } catch (error) {
            console.log('Error while getting product by id response', error);
        }
    }
   fetchData()
},[])
 


    return (
        <Component>
        <Box></Box>
        { product && Object.keys(product).length &&
            <Container container> 
                <Grid item lg={4} md={4} sm={8} xs={12}>
                    <ActionItem product={product} />
                </Grid>
                <RightContainer item lg={8} md={8} sm={8} xs={12}>
                    <Typography>{product.title.longTitle}</Typography>
                    <Typography style={{marginTop: 5, color: '#878787', fontSize: 14 }}>
                        8 Ratings & 1 Reviews
                        <span><img src={fassured} style={{width: 77, marginLeft: 20}} /></span>
                    </Typography>
                    <Typography>
                        <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                        <span style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                        <span style={{ color: '#388E3C' }}>{product.price.discount} off</span>
                    </Typography>
                    {/* <ProductDetail product={product} /> */}
                </RightContainer>
            </Container>
        }   
    </Component>
    )
}

export default DetailView