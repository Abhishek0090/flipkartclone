import { Box, Button, Typography, styled } from '@mui/material'
import React, { useContext, useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


//login components
import LoginDialog from './login/LoginDialog';
import { DataContext, DataProvider } from '../../context/DataProvider';
import Profile from './Profile';


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
    const [open, setOpen] = useState(false);

    const { userAccount , setUserAccount} = useContext(DataContext);
    return (
        <Wrapper>
            {
                userAccount ? <Profile userAccount = {userAccount} setUserAccount={setUserAccount}/>
                    : <LoginButton variant="contained" onClick={() => setOpen
                        (true
                        )}>Login</LoginButton>
            }


            <Typography style={{ width: 135 }}>
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

            <LoginDialog open={open} setOpen={setOpen} />

        </Wrapper>
    )
}

export default CustomButtons