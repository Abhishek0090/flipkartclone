import { Box, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component = styled(Menu)`
    margin-top  : 5px;
`;

const LogoutButton = styled(Typography)`
    font-size : 14px;
    margin-left : 10px;
`;

const Profile = ({ userAccount , setUserAccount}) => {

    const [open, setOpen] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setOpen(e.currentTarget);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const Logout = () => {
        setUserAccount('');
    }

    return (
        <>
            <Box onClick={handleClick} >
                <Typography style={{ marginTop: 2, cursor: 'pointer' }}>{userAccount}</Typography>
            </Box>

            <Component 
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose} 
            >

                <MenuItem onClick={() => { handleClose(); Logout(); }}>
                    <PowerSettingsNewIcon color='primary' fontSize='small' />
                    <LogoutButton>
                        Logout
                    </LogoutButton>
                </MenuItem>
            </Component>


        </>
    )
}

export default Profile