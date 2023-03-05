import { Box, Button, Typography, styled } from '@mui/material'
import React, { useContext, useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


//login components
import LoginDialog from '../login/LoginDialog';
import { DataContext, DataProvider } from '../../context/DataProvider';
import Profile from './Profile';


const Wrapper = styled(Box)(({ theme }) => ({
    margin: '0 3% 0 auto',
    display: 'flex',
    alignItems:'center',
    '& > *': {
        marginRight: '40px !important',
        textDecoration: 'none',
        color: '#FFFFFF',
        fontSize: 12,
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            color: '#2874f0',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            marginTop: 10
        }
    },
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const Container = styled(Box)(({theme})=>({
    display: 'block',
    [theme.breakpoints.down('md')]: {
       
        display: 'none' 
    }
    
}));
const LoginButton = styled(Button)(({ theme }) => ({
    color: '#2874f0',
    background: '#FFFFFF',
    textTransform: 'none',
    fontWeight: 600,
    borderRadius: 2,
    padding: '5px 40px',
    height: 32,
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
        background: '#2874f0',
        color: '#FFFFFF'
    }
}));




const CustomButtons = () => {
    const [open, setOpen] = useState(false);

    const { userAccount, setUserAccount } = useContext(DataContext);
    return (
        <Wrapper>
            {
                userAccount ? <Profile userAccount={userAccount} setUserAccount={setUserAccount} />
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


            <Container>
                <ShoppingCartIcon />
                <Typography>
                    Cart
                </Typography>
            </Container>

            <LoginDialog open={open} setOpen={setOpen} />

        </Wrapper>
    )
}

export default CustomButtons