import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { getProductDetails } from '../../redux/action/productActions';
import { Box, Grid, Typography, styled } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import ActionItem from './ActionItem';

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


const DetailView = () => {

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

    const { id } = useParams();


    
    const { loading, product } = useSelector(state => state.getProductDetails)  ;
    
    const dispatch = useDispatch();
 

    console.log(product);


    useEffect(() => {

        if (product && id !== product.id)

            dispatch(getProductDetails(id));

    }, [dispatch, product, id, loading]);


    return (
        <Component>
            <Box></Box>
            {product && Object.keys(product).length &&
                <Box>
                    <Box>
                        <ActionItem product={product} />
                    </Box>
                    <Box>
                        <Typography>{product.title.longTitle}</Typography>
                    </Box>
                </Box>
            }
        </Component>
    )
}

export default DetailView