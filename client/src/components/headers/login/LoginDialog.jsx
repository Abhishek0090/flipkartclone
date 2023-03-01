import React, { useState } from "react";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Typography, styled } from "@mui/material";

const Container = styled(Box)`
  height: 82vh;
  maxwidth: 500px;
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;

  width: 30%;
  padding: 30px;
  & > p,
  & > h5 {
    color: #fff;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > p,
  & > button {
    margin-top: 10px;
  }
`;

const LoginButton = styled(Button)`
  background: #fb641b;
  text-transform: none;
  color: #fff;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
`;

const SignUpButton = styled(Button)`
  background: #fb641b;
  text-transform: none;
  color: #fff;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
`;

const LoginExistButton = styled(Button)`
  background: #fff;
  text-transform: none;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
`;

const RequestOTP = styled(Button)`
  background: #fff;
  text-transform: none;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
`;

const PolicyText = styled(Typography)`
  font-size: 12px;
  cursor: pointer;
`;

const SignUpText = styled(Typography)`
  font-size: 12px;
  font-weight: 600;
  color: #2874f0;
  text-align: center;
  cursor: pointer;
`;

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subHeading: "Sign up with your mobile number to get started",
  },
};

const signUpInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const LoginDialog = ({ open, setOpen }) => {
  const [account, setToggleAccount] = useState(accountInitialValues.login);

  const [signup, setSignup] = useState(signUpInitialValues);

  const handleClose = () => {
    setOpen(false);
    setToggleAccount(accountInitialValues.login);
  };

  const toggleSignUp = () => {
    setToggleAccount(accountInitialValues.signup);
  };

  const handleChange = (e) => {
    e.preventDefault();

    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const signUpUser = ()=>{
    
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <Container>
          <Box style={{ display: "flex", height: "100%" }}>
            <Image>
              <Typography variant="h5">{account.heading}</Typography>
              <Typography style={{ marginTop: 20 }}>
                {account.subHeading}
              </Typography>
            </Image>
            {account.view === "login" ? (
              <>
                <Wrapper>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    name="email"
                    label="Enter Email/Mobile Number"
                    type="email"
                    fullWidth
                    variant="standard"
                    onChange={(e) => handleChange(e)}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    name="password"
                    label="Enter Password"
                    type="password"
                    fullWidth
                    variant="standard"
                    onChange={(e) => handleChange(e)}
                  />
                  <PolicyText>
                    By continuing, you agree to Flipkart's{" "}
                    <span style={{ color: "#2874f0" }}>
                      Terms of Use and Privacy Policy
                    </span>
                  </PolicyText>
                  <LoginButton>Login</LoginButton>
                  <Typography style={{ textAlign: "center" }}>OR</Typography>
                  <RequestOTP>Request OTP</RequestOTP>
                  <SignUpText onClick={toggleSignUp}>
                    New to Flipkart? Create an account
                  </SignUpText>
                </Wrapper>
              </>
            ) : (
              <>
                <Wrapper>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    name="firstname"
                    label="Enter First Name"
                    type="name"
                    fullWidth
                    variant="standard"
                    onChange={(e) => handleChange(e)}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    name="lastname"
                    label="Enter Last Name"
                    type="name"
                    fullWidth
                    variant="standard"
                    onChange={(e) => handleChange(e)}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    name="username"
                    label="Enter Username"
                    type="name"
                    fullWidth
                    variant="standard"
                    onChange={(e) => handleChange(e)}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    name="email"
                    label="Enter Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                    onChange={(e) => handleChange(e)}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    name="password"
                    label="Enter Password"
                    type="password"
                    fullWidth
                    variant="standard"
                    onChange={(e) => handleChange(e)}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    name="phone"
                    label="Enter Phone"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => handleChange(e)}
                  />
                  <SignUpButton onClick={()=> signUpUser()}>Continue</SignUpButton>
                  <LoginExistButton
                    onClick={() => setToggleAccount(accountInitialValues.login)}
                  >
                    Existing User? Log in
                  </LoginExistButton>
                </Wrapper>
              </>
            )}
          </Box>
        </Container>
      </Dialog>
    </div>
  );
};

export default LoginDialog;
