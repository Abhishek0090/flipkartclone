import { Box, Button, Typography, styled } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Wrapper = styled(Box)`
    display : flex;
    margin : 0 3% 0 auto;
    align-items : center;

    & > button , & > p , & > div {
        margin-right: 40px;
        font-size : 14px;
        display : flex;
    }
`;

const LoginButton = styled(Button)`
    background : white;
    color : #2874f0;
    text-transform  : none;
    padding : 5px 40px;
    border-radius : 0px;
    font-weight : bold; 
`;


const CustomButtons = () => {
    return (
        <Wrapper>
            <LoginButton variant="contained">Login</LoginButton>

            <Typography style={{width : 135}}>
                Become a Seller
            </Typography>

            <Typography>
                More
            </Typography>


            <Box> 
                <ShoppingCartIcon />
                <Typography>
                    Cart
                </Typography>
            </Box>

        </Wrapper>
    )
}

export default CustomButtons