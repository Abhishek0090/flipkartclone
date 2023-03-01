import React, { useState } from 'react'
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Typography, styled } from '@mui/material';

const Container = styled(Box)`
    height  : 70vh;
`;


const LoginDialog = ({ open, setOpen }) => {

    // const [open, setOpen] = useState(false);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>

            <Dialog open={open} onClose={handleClose} >
                {/* <DialogTitle>Login / Signup</DialogTitle> */}
                {/* <ClearIcon onClick={handleClose}/> */}
                <Container>
                    <Box></Box>
                    <Box>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Enter Email/Mobile Address"
                            type="email"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Enter Password"
                            type="password"
                            fullWidth
                            variant="standard"
                        />
                        <Typography>
                            By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.
                        </Typography>

                        <Button>
                            Login
                        </Button>
                        <Typography>
                            OR
                        </Typography>
                        <Button>Request OTP</Button>

                        <Typography>New to Flipkart? Create an account</Typography>
                    </Box>
                </Container>
            </Dialog>
        </div>
    )
}

export default LoginDialog